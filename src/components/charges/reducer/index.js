import { CHARGES_ACTIONS } from "./../constants/";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const chargesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARGES_ACTIONS.FETCH_CHARGES_START:
      return {
        ...state,
        loading: true,
      };
    case CHARGES_ACTIONS.FETCH_CHARGES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case CHARGES_ACTIONS.FETCH_CHARGES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
