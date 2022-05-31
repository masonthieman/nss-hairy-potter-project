let primaryKey = 1;

const makePottery = ( potteryShape, potteryWeight, potteryHeight ) => {
    const potteryObject = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: primaryKey
    }

   // primaryKey++;
    return potteryObject
}

module.exports = { makePottery }