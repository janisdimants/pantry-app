import actionTypes from './actionTypes'
import { Ingredient, Unit, IngredientType } from '../../types'

type defaultStateProps = {
  ingredients: Ingredient[]
}

const defaultState: defaultStateProps = {
  ingredients: [
    {
      name: 'Flour',
      amount: 250,
      unit: Unit.G,
      type: IngredientType.GENERIC,
    },
    {
      name: 'Sugar',
      amount: 150,
      unit: Unit.G,
      type: IngredientType.GENERIC,
    },
    {
      name: 'Condensed Milk',
      amount: 400,
      unit: Unit.ML,
      type: IngredientType.DAIRY,
    },
    {
      name: 'Milk Chocolate',
      amount: 200,
      unit: Unit.G,
      type: IngredientType.DAIRY,
    },
  ],
}

export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      }
    default:
      return defaultState
  }
}
