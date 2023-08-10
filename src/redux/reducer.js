const initialState = {
    valueToShare: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VALUE':
        return { ...state, valueToShare: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;