const product = require("./calcul");

describe("Multiplication Tests:", () => {
    test("product(3, 4): multiplying 3 * 4 should return 12", () => {
        except(product.product(3, 4)).toBe(12)
    })

})

