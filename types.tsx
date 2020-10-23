export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Pantry: undefined
  Recipes: undefined
}

export type PantryParamList = {
  IngredientList: undefined
  AddIngredient: undefined
}

export type RecipeParamList = {
  RecipeListScreen: undefined
}

export interface Ingredient {
  name: string
  amount: number
  unit: Unit
  type?: IngredientType
}

export enum Unit {
  KG = 'kg',
  G = 'g',
  ML = 'ml',
  L = 'l',
}

export enum IngredientType {
  GENERIC = 'generic',
  DAIRY = 'dairy',
  VEGETABLE = 'vegetable',
}

export enum RecipeType {
  BREAKFAST = 'breakfast',
  SNACK = 'snack',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  DESSERT = 'dessert',
  VEGETARIAN = 'vegetarian',
}

export interface Recipe {
  name: string
  ingredients: Ingredient[]
  steps: string[]
  types: RecipeType[]
  cookingTime: number
}
