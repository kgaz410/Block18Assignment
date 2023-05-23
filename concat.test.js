const { describe } = require("yargs");
const calculations = require("./concat");

describe("Concat Test:", () => {
    test("concat(a, b): joining a & b should return ab", () => {
        except(a).concat(b).toBe(ab)
    })

})


describe("Odd Numbers Test:", () => {
    test("odds(arr): filter arr should return only odd numbers", () => {
        except .filter(arr) => {
            if(arr % 2 !==0){
             return arr
        }
    }) 

})

describe("Remove Duplicates:", () => {
    test("duplicates(arr): should remove all duplicate numbers in array", () => {
        function removeDup(arr){
                return arr.filter((item, index) => 
                    arr.indexOf(item) === index)
                
            }
    })

})

    describe("Sort Number Descending Order:", () => {
        test("sort(arr): should return number list in descending order", () => {
            const sortConcat = removeDup(concatOdds).sort(function(a, b) {
                    return a - b
                })

        })

    })



// I have no idea if i wrote these correctly. My functions are correct on the concat.js file.

