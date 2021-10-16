const StateProvider = require("./StateProvider")
// @ponicode
describe("StateProvider.useStateValue", () => {
    test("0", () => {
        let callFunction = () => {
            StateProvider.useStateValue()
        }
    
        expect(callFunction).not.toThrow()
    })
})
