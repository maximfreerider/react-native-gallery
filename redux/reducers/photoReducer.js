import {ADD_PHOTOS} from '../actionTypes'

const initialState = {
  photos: [{id:1, name: 'Maks'}]
}


export const photoReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_PHOTOS:
      console.log(action.payload)
      return {
        ...state,
        photos: action.payload
      }
    default:
      return state
  }
}
