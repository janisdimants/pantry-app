import * as React from 'react'
import {
  StyleSheet,
  Button,
  TextInput,
  Picker,
  Pressable,
  View,
  Text,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { add } from '../store/pantry/actions'
import { Unit, IngredientType } from '../types'
import Navigation from '../navigation'

export default function IngredientListScreen({ navigation }) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const [name, setName] = React.useState('Name')
  const [amount, setAmount] = React.useState(0)
  const [unit, setUnit] = React.useState(Unit.G)
  const [type, setType] = React.useState(IngredientType.GENERIC)

  const addIngredient = () => {
    dispatch(
      add({
        name,
        amount,
        unit,
        type,
      })
    )
    navigation.navigate('IngredientList')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Ingredient</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <TextInput onChangeText={(text) => setName(text)} value={name} />
      <TextInput
        onChangeText={(text) => setAmount(text)}
        value={amount}
        keyboardType='number-pad'
      />
      <Picker selectedValue={unit} onValueChange={(value) => setUnit(value)}>
        {Object.entries(Unit).map(([key, value]) => (
          <Picker.Item label={value} value={key} />
        ))}
      </Picker>
      <Picker selectedValue={type} onValueChange={(value) => setType(value)}>
        {Object.entries(IngredientType).map(([key, value]) => (
          <Picker.Item label={value} value={key} />
        ))}
      </Picker>
      <Button onPress={addIngredient} title='+' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 32,
  },
  separator: {},
})
