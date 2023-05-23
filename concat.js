
// const concat1 = [3, 2, 1]
// const concat2 = [9, 1, 1, 1, 4, 15, -1]

const calculations = {

    concatStuff: (a, b) => {
        return a.concat(b)
    },

    odds: joinArr.filter((arr) => {
        if(arr % 2 !== 0){
            return arr
        }
    }),
    duplicate: function removeDup(arr){
        return arr.filter((item, index) => 
            arr.indexOf(item) === index)
        
    },
    numOrder: const sortConcat = removeDup(concatOdds).sort(function(a, b) {
        return a - b
    })
}

// FUNCTIONS BELOW ARE FUNCTIONAL - I worked the math out.

// // Concats the two arrays
// const joinArr = concat1.concat(concat2)

// // Filters for odd numbers
// const concatOdds = joinArr.filter((arr) => {
//     if(arr % 2 !==0){
//         return arr
//     }
// })

// // Removes duplicates
// function removeDup(arr){
//     return arr.filter((item, index) => 
//         arr.indexOf(item) === index)
    
// }

// const sortConcat = removeDup(concatOdds).sort(function(a, b) {
//     return a - b
// })


// console.log(sortConcat) // Final list


module.exports = calculations