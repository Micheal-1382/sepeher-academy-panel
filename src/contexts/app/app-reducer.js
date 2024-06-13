const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR": {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    }
  }
};

export default appReducer;
