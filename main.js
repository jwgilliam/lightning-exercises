const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", "apples", "tamales", "curry", "tomatoes", "corn", "tamarind"]


const myFavoriteFoods = (array) => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.startsWith("a") || element.startsWith("t")){
      newArray.push(element)
    }
  }
  return newArray
}

console.log(myFavoriteFoods(foodArray))