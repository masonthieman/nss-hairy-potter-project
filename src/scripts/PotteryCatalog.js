// Initialize the empty array containing each pottery object for sale
let catalogArray = [];

// Function that adds a pottery object to the catalog if proper conditions are met
export const toSellOrNotToSell = potteryObject => {
    
    // If the weight is greater than or equal to 6 and the pottery is not cracked,
    // add it to the catalog of pottery to sell
    if (potteryObject.weight >= 6 && !potteryObject.cracked) {
        potteryObject.price = 40
        catalogArray.push(potteryObject)
    }

    // If the weight is less than 6 and the pottery is not cracked,
    // add it to the catalog of pottery to sell
    else if (potteryObject.weight < 6 && !potteryObject.cracked) {
        potteryObject.price = 20
        catalogArray.push(potteryObject)
    }

    // Return the pottery object with newly added properties if applicable
    return potteryObject

}

// Export function to return the catalog array in this module
export const usePottery = () => {
    return catalogArray
}