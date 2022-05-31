
const firePottery = (potteryObject, firingTemp) => {
    potteryObject.fired = true;

    if (firingTemp > 2200) {
        potteryObject.cracked = true;
    }
    else {
        potteryObject.cracked = false;
    }

    return potteryObject
}

module.exports = { firePottery }