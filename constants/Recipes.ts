import { Unit, Recipe, RecipeType } from '../types'

export const recipes: Recipe[] = [
  {
    name: 'Chocolate shortbread',
    types: [RecipeType.DESSERT],
    ingredients: [
      {
        name: 'Flour',
        amount: 250,
        unit: Unit.G,
      },
      {
        name: 'Sugar',
        amount: 150,
        unit: Unit.G,
      },
      {
        name: 'Butter',
        amount: 275,
        unit: Unit.G,
      },
      {
        name: 'Condensed Milk',
        amount: 400,
        unit: Unit.ML,
      },
      {
        name: 'Milk Chocolate',
        amount: 200,
        unit: Unit.G,
      },
    ],
    steps: [
      'Heat the oven to 180C/160C fan/gas 4. Lightly grease and line a 20-22cm square or rectangular baking tin with a lip of at least 3cm.',
      'To make the shortbread, mix 250g plain flour and 75g caster sugar in a bowl. Rub in 175g softened butter until the mixture resembles fine breadcrumbs.',
      'Knead the mixture together until it forms a dough, then press into the base of the prepared tin.',
      'Prick the shortbread lightly with a fork and bake for 20 minutes or until firm to the touch and very lightly browned. Leave to cool in the tin.',
    ],
    cookingTime: 45,
  },
]

export default recipes
