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

import generic from '../assets/images/ingredients/generic.png'
import dairy from '../assets/images/ingredients/dairy.png'
import vegetable from '../assets/images/ingredients/vegetable.png'
import { Ingredient, IngredientType } from '../types'

const typeToImageMap = {
  generic,
  dairy,
  vegetable,
}

const IngredientComponent = ({
  name,
  amount,
  unit,
  type = IngredientType.GENERIC,
}: Ingredient) => (
  <View style={styles.item}>
    <View style={styles.imageContainer}>
      <Image source={typeToImageMap[type]} style={styles.image} />
    </View>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.amount}>
      {amount} {unit}
    </Text>
  </View>
)

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
  amount: {
    fontWeight: 'normal',
    fontSize: 14,
    color: '#6E7191',
  },
})

export default IngredientComponent
