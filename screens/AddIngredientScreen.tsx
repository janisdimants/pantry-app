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
    console.log({ unit, type })
    navigation.navigate('IngredientList')
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        style={styles.nameInput}
      />
      <View style={styles.amountInputContainer}>
        <TextInput
          onChangeText={(text) => setAmount(text)}
          value={amount}
          keyboardType='number-pad'
          style={styles.amountInput}
        />
        <Picker
          selectedValue={unit}
          onValueChange={(value) => setUnit(value)}
          style={styles.unitInput}
        >
          {Object.entries(Unit).map(([key, value]) => (
            <Picker.Item label={value} value={value} />
          ))}
        </Picker>
      </View>
      <Picker
        selectedValue={type}
        onValueChange={(value) => setType(value)}
        style={styles.typeInput}
      >
        {Object.entries(IngredientType).map(([key, value]) => (
          <Picker.Item label={value} value={value} />
        ))}
      </Picker>
      <Pressable onPress={addIngredient} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  )
}

const inputBase = {
  backgroundColor: '#EFF0F6',
  color: '#A0A3BD',
  borderRadius: 16,
  height: 64,
  fontSize: 18,
  paddingLeft: 24,
  paddingRight: 20,
  marginTop: 8,
  marginBottom: 8,
  border: 'none',
  outline: 'none',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  nameInput: {
    ...inputBase,
  },
  amountInput: {
    ...inputBase,
    flex: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  amountInputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  unitInput: {
    ...inputBase,
    width: 120,
    backgroundColor: '#D6D8E7',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  typeInput: {
    ...inputBase,
  },
  button: {
    marginTop: 8,
    marginLeft: 'auto',
    width: 120,
    borderRadius: 32,
    height: 64,
    backgroundColor: '#5F2EEA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#F7F7FC',
    fontSize: 20,
  },
})
