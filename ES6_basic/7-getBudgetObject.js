export default function getBudgetObject(...args) {
  const [income, gdp, capita] = args;
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
