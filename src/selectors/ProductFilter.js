// Get visible expenses

export default (products, { text, sortBy, jeans,jackets,sweatShirts,tshirts,startDate, endDate }) => {
  return products.filter((product) => {
   // const startDateMatch = typeof startDate !== 'number' || product.createdAt >= startDate;
   // const endDateMatch = typeof endDate !== 'number' || product.createdAt <= endDate;
    const textMatch = product.description.toLowerCase().includes(text.toLowerCase());

    const isJeans=product.description.toLowerCase().includes(jeans.toLowerCase());

    const isJackets=product.description.toLowerCase().includes(jackets.toLowerCase());

    const isSweatShirts=product.description.toLowerCase().includes(sweatShirts.toLowerCase());

    const isTshirts=product.description.toLowerCase().includes(tshirts.toLowerCase());

    return textMatch&&isJeans&&isJackets&&isSweatShirts&&isTshirts;
    
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
