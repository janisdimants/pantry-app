import * as actions from "./actions"
import * as types from "../../types.tsx"
// @ponicode
describe("actions.add", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.add({ name: "Michael", amount: -100, unit: types.Unit.KG, type: types.IngredientType.DAIRY })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.add({ name: "Pierre Edouard", amount: 1, unit: types.Unit.G, type: types.IngredientType.VEGETABLE })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.add({ name: "Anas", amount: -100, unit: types.Unit.ML, type: types.IngredientType.VEGETABLE })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.add({ name: "Anas", amount: 100, unit: types.Unit.G, type: types.IngredientType.VEGETABLE })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.add({ name: "George", amount: 1, unit: types.Unit.KG, type: types.IngredientType.DAIRY })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.add({ name: "", amount: Infinity, unit: types.Unit.L, type: types.IngredientType.DAIRY })
        }
    
        expect(callFunction).not.toThrow()
    })
})
