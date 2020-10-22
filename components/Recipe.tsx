import * as React from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native'
import { useSelector } from 'react-redux'
import { Ingredient } from '../types'

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

const Recipe = ({ name, ingredients }) => {
  const state = useSelector((state) => state)

  const missingIngredients = getMissingIngredients(
    ingredients,
    state.pantry.ingredients
  )

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      {missingIngredients.length === 0 ? (
        <Text>You have all ingredients!</Text>
      ) : (
        <Text>
          Missing{' '}
          {missingIngredients
            .map((i) => `${i.amount} ${i.unit} ${i?.name}`)
            .join(' | ')}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default Recipe
