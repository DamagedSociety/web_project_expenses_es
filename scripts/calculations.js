let budgetValue = 0;

let totalExpensesValue = 0;

let balanceColor = "green";

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

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() <= budgetValue * 0.25) {
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
  let categoriesNames = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let categoriesData = [];

  for (let categoryName of categoriesNames) {
    const categoryTotal = calculateCategoryExpenses(categoryName);
    categoriesData.push([categoryName, categoryTotal]);
  }

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
