import * as React from 'react'
import {
  StyleSheet,
  Button,
  FlatList,
  Text,
  View,
  Pressable,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'

import Ingredient from '../components/Ingredient'
import { add } from '../store/pantry/actions'
import { Unit } from '../types'

export default function IngredientListScreen({ navigation }) {
  const state = useSelector((state) => state)

  const renderIngredient = ({ item }) => <Ingredient {...item} />

  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <FlatList
        data={state.pantry.ingredients}
        renderItem={renderIngredient}
        keyExtractor={(item, i) => i}
      />
      <Pressable
        onPress={() => navigation.navigate('AddIngredient')}
        style={styles.button}
      >
        <AntDesign name='plus' size={24} color='#FCFCFC' />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
    flex: 1,
  },
  title: {},
  separator: {},
  button: {
    position: 'absolute',
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#5F2EEA',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 16,
    bottom: 32,
    zIndex: 1,
  },
})
