const initialState = {

    username: '',
    id: 0,
    profile_pic: ''
};


const UPDATE_USER_NAME = "UPDATE_USER_NAME"

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_USER_NAME:
        return Object.assign( {}, state, { username: action.payload } );
       
      default: return state
    }
};
    export function getUserInfo( userInfo ){
    return {
      type: UPDATE_USER_NAME,
      payload: userInfo
    }
  }