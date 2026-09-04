let budgetValue = 0;

let totalExpensesValue = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const expense of expenseEntries) {
  totalExpensesValue += expense[1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() <= 250) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      categoryTotal += expense[1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  //Declaras el array con los nombres de las 5 categorías (dentro de la función).
  let categoriesNames = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  //Declaras el array vacío categoriesData (dentro de la función), donde vas a ir guardando los pares [nombre, total].

  let categoriesData = [];

  //Iteras sobre el array de nombres de categorías (con un bucle), y en cada vuelta:

  for (let categoryName of categoriesNames) {
    //Llamas a calculateCategoryExpenses() pasándole la categoría actual.
    const categoryTotal = calculateCategoryExpenses(categoryName);
    //Guardas el resultado como un mini-array dentro de categoriesData.
    categoriesData.push([categoryName, categoryTotal]);
  }
  //Iteras sobre categoriesData (otro bucle) para encontrar cuál tiene el total más alto, usando el algoritmo de máximo que ya conoces.
  let maximum = 0;
  let maximumName = "";
  for (const categoryData of categoriesData) {
    if (categoryData[1] > maximum) {
      maximum = categoryData[1];
      maximumName = categoryData[0];
    }
  }
  return maximumName;
}

function addExpenseEntry(newEntry) {
  expenseEntries.push(newEntry);
  totalExpensesValue += newEntry[1];
}
