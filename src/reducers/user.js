const initialState = {
  user: '',
  email: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      user: action.user,
      email: action.email,
    };
  default:
    return { ...state };
  }
}

export default user;
