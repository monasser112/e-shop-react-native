// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
  jeans: '',
  jackets: '',
  sweatShirts: '',
  tshirts: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {

    case 'ALL':
      return {
        ...state,
        jackets: '',
        sweatShirts: '',
        tshirts: '',
        jeans: ''
      };


    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    /************My addition********* */
    case 'SET_TEXT_JEANS':
      return {
        ...state,
        jackets: '',
        sweatShirts: '',
        tshirts: '',
        jeans: 'jeans'
      };

    case 'SET_TEXT_SWEATSHIRTS':
      return {
        ...state,
        jackets: '',
        sweatShirts: 'sweatshirts',
        tshirts: '',
        jeans:''
      };

    case 'SET_TEXT_JACKET':
      return {
        ...state,
        jackets: 'jackets',
        sweatShirts: '',
        tshirts: '',
        jeans: ''
      };

    case 'SET_TEXT_TSHIRT':
      return {
        ...state,
        jackets: '',
        sweatShirts: '',
        tshirts: 'tshirts',
        jeans: ''
      };

    /*********************Last Edition********** */
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
