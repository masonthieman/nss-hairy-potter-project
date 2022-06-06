// Function that fires a pottery object and returns a modified pottery object
// Adds a cracked and fired property depending on a provided firing temperature
export const firePottery = (potteryObject, firingTemp) => {
    
    // Make the pottery fired and sets its Boolean value to 'true'
    potteryObject.fired = true;

    // If the provided temperature is greater than 2200
    // make the pottery object's 'cracked' property 'true'
    if (firingTemp > 2200) {
        potteryObject.cracked = true;
    }

    // If temp is less than 2200, make set 'cracked' to 'false'
    else {
        potteryObject.cracked = false;
    }

    // return the modified object with the newly added properties
    return potteryObject
}