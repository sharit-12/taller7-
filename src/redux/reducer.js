const contadorReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENTAR':
        return state + 1;
      case 'DECREMENTAR':
        return state - 1;
      default:
        return state;
    }
  };
  
  export default contadorReducer;
  