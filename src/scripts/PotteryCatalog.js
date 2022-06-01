let catalogArray = [];

const toSellOrNotToSell = potteryObject => {
    if (potteryObject.weight >= 6 && !potteryObject.cracked) {
        potteryObject.price = 40
        catalogArray.push(potteryObject)
    }
    else if (potteryObject.weight < 6 && !potteryObject.cracked) {
        potteryObject.price = 20
        catalogArray.push(potteryObject)
    }

    return potteryObject

}

const usePottery = () => {
    return catalogArray
}

module.exports = { toSellOrNotToSell, usePottery }