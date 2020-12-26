// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByAll = () => ({
  type: 'ALL'
});


// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});


// JEANS
export const setJeans = () => ({
  type: 'SET_TEXT_JEANS'
});
//sweatShirts
export const setSweatShirt= () => ({
  type: 'SET_TEXT_SWEATSHIRTS'
});

//Jacket
export const setJacket= () => ({
  type: 'SET_TEXT_JACKET'
});

//tshirt
export const setTshirt= () => ({
  type: 'SET_TEXT_TSHIRT'
});


// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
