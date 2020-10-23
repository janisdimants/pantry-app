import * as React from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'

import { RecipeType } from '../types'
import Recipe from '../components/Recipe'
import recipes from '../constants/Recipes'

export default function RecipeListScreen() {
  const renderRecipe = ({ item }) => <Recipe {...item} />

  const [type, setType] = React.useState<RecipeType | undefined>()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Select a category for what you’d like to make
      </Text>
      <View style={styles.recipeTypeContainer}>
        {Object.entries(RecipeType).map(([key, value]) => (
          <Pressable
            onPress={() => setType(value as RecipeType)}
            style={[
              styles.recipeType,
              value === type && styles.recipeTypeSelected,
            ]}
          >
            <Text
              style={[
                styles.recipeTypeText,
                value === type && styles.recipeTypeTextSelected,
              ]}
            >
              {value}
            </Text>
          </Pressable>
        ))}
      </View>
      <FlatList
        data={recipes.filter((r) => {
          if (type) {
            return r.types.includes(type)
          }
          return true
        })}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#A0A3BD',
    fontSize: 16,
    fontWeight: '500',
    margin: 24,
  },
  recipeTypeContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 32,
    justifyContent: 'center',
  },
  recipeType: {
    height: 32,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    backgroundColor: '#EFF0F6',
  },
  recipeTypeSelected: {
    backgroundColor: '#2A00A2',
  },
  recipeTypeText: {
    color: '#A0A3BD',
    fontSize: 13,
  },
  recipeTypeTextSelected: {
    color: '#DED3FF',
  },
  category: {},
  separator: {},
})
