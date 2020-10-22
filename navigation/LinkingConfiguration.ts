import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Pantry: {
            screens: {
              IngredientListScreen: 'one',
            },
          },
          Recipes: {
            screens: {
              RecipeListScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
}
