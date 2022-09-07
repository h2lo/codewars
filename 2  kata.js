function bonusTime(salary, bonus) {
  if (bonus === true) {
    return `£${10*salary}`
  }
  return `£${salary}`;
}

console.log(bonusTime(2, true));
console.log(bonusTime(78, false));