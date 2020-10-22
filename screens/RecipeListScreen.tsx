import * as React from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'

import { RecipeType } from '../types'
import Recipe from '../components/Recipe'
import recipes from '../constants/Recipes'

export default function RecipeListScreen() {
  const renderRecipe = ({ item }) => (
    <Recipe name={item.name} ingredients={item.ingredients} />
  )

  const [type, setType] = React.useState<RecipeType | undefined>()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Select a category for what you’d like to make
      </Text>
      {Object.entries(RecipeType).map(([key, value]) => (
        <Pressable onPress={() => setType(value as RecipeType)}>
          <Text style={{ fontWeight: value === type ? 'bold' : 'normal' }}>
            {value}
          </Text>
        </Pressable>
      ))}
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
  container: {},
  title: {},
  separator: {},
})
