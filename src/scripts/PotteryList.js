// Imports module function to return the pottery catalog
import { usePottery } from './PotteryCatalog.js'

// Create an HTML representation of the catalog of pottery to sell
export const PotteryList = () => {

    // Invoke the usePottery function to generate the catalog of pottery
    let potteryList = usePottery()

    // Declare the html string and initialize it to an empty string
    let htmlString = ''
    
    // Iterate through each element of the pottery catalog list
    for (let piece of potteryList) {
        
        // Add the relevant html components with each property of the pottery
        // to the html string
        htmlString += `<section class="pottery" id="pottery--${piece.id}">`
        htmlString += `<h2 class="pottery__shape">${piece.shape}</h2>`
        htmlString += `<div class="pottery__properties">`
        htmlString += `Item weighs ${piece.weight} grams and is ${piece.height} cm in height`
        htmlString += `</div>`
        htmlString += `<div class="pottery__price">`
        htmlString += `Price is $${piece.price}`
        htmlString += `</div>`
        htmlString += `</section>`
    }

    // Return the created html string to be output by main module
    return htmlString
}