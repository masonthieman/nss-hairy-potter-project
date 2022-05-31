// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug",2,5)
let platter = makePottery("platter",1,3)
let chalice = makePottery("chalice",5,10)
let pot = makePottery("pot",10,20)
let bowl = makePottery("bowl",50,100)

console.log(chalice)
// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2100)
platter = firePottery(platter, 2300)
chalice = firePottery(chalice, 2000)
pot = firePottery(pot,1900)
bowl = firePottery(bowl,2200)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



