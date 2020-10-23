import * as React from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native'
import { useSelector } from 'react-redux'

import generic from '../assets/images/recipes/generic.png'
import dessert from '../assets/images/recipes/dessert.png'
import { Ingredient, Recipe, RecipeType } from '../types'

const typeToImageMap = {
  dessert,
  breakfast: generic,
  snack: generic,
  lunch: generic,
  dinner: generic,
  vegetarian: generic,
}

const getMissingIngredients = (
  recipeIngredients: Ingredient[],
  pantryIngredients: Ingredient[]
) => {
  return recipeIngredients
    .map((recipeIngredient) => {
      const ingredient = pantryIngredients.find(
        (i) => i.name == recipeIngredient.name
      )

      if (!ingredient) {
        return recipeIngredient
      }

      if (
        ingredient.unit === recipeIngredient.unit &&
        ingredient.amount < recipeIngredient.amount
      ) {
        return {
          ...recipeIngredient,
          amount: recipeIngredient.amount - ingredient.amount,
        }
      }
    })
    .filter((item) => item !== undefined)
}

const RecipeComponent = ({
  name,
  ingredients,
  types = [RecipeType.BREAKFAST],
  cookingTime,
}: Recipe) => {
  const state = useSelector((state) => state)

  const missingIngredients = getMissingIngredients(
    ingredients,
    state.pantry.ingredients
  )

  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={typeToImageMap[types[0]]} style={styles.image} />
      </View>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.ingredients}>
          {missingIngredients.length === 0
            ? 'You have all ingredients!'
            : `Missing ${missingIngredients
                .map((i) => `${i.amount} ${i.unit} ${i?.name}`)
                .join(' | ')}`}
        </Text>
      </View>
      <Text style={styles.cookingTime}>{cookingTime} min</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
    padding: 16,
    height: 80,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 'auto',
    marginLeft: 24,
    color: '#4E4B66',
  },
  imageContainer: {
    width: 56,
    height: 56,
    padding: 12,
    backgroundColor: '#D6D8E7',
    borderRadius: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
  ingredients: {
    marginLeft: 24,
    color: '#A0A3BD',
    fontSize: 13,
  },
  cookingTime: {
    marginLeft: 'auto',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#6E7191',
  },
})

export default RecipeComponent
