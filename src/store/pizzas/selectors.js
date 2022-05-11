export const selectPizzas = (reduxState) => {
  const newArray = [...reduxState.pizzas.allPizzas];
  return newArray.sort((a, b) => b.bought - a.bought);
};
