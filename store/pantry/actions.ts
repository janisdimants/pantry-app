import actionTypes from './actionTypes'
import { Ingredient } from '../../types'

export const add = (ingredient: Ingredient) => {
  return { ingredient, type: actionTypes.ADD }
}
