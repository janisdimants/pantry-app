import * as React from 'react'
import { StyleSheet, Button, FlatList, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Ingredient from '../components/Ingredient'
import { add } from '../store/pantry/actions'
import { Unit } from '../types'

export default function IngredientListScreen({ navigation }) {
  const state = useSelector((state) => state)

  const renderIngredient = ({ item }) => <Ingredient name={item.name} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantry</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <FlatList
        data={state.pantry.ingredients}
        renderItem={renderIngredient}
        keyExtractor={(item) => item.name}
      />
      <Button onPress={() => navigation.navigate('AddIngredient')} title='+' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {},
  separator: {},
})
