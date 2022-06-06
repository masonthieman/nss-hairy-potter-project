// Initialize id for each pottery object starting with 1
let primaryKey = 1;

// Function that takes a shape of pottery and its dimensions.
// Returns a newly created pottery object
export const makePottery = ( potteryShape, potteryWeight, potteryHeight ) => {
    
    // Add relevant properties
    const potteryObject = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: primaryKey
    }

    // Increment the id for the next created pottery object
    primaryKey++;

    // Return the newly created pottery
    return potteryObject
}
