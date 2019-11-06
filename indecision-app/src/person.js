const isAdult = age => age >= 18;
const canDrink = age => age >= 21;
// export { isAdult, canDrink}
// export default age => age >= 64;
const isSenior = age => age >= 64;

export { isAdult, canDrink, isSenior as default };
