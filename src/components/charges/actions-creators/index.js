import { CHARGES_ACTIONS } from "./../constants/";

export const fetchChargeStart = () => ({
  type: CHARGES_ACTIONS.FETCH_CHARGES_START,
});

export const fetchChargeSuccess = (payload) => ({
  type: CHARGES_ACTIONS.FETCH_CHARGES_SUCCESS,
  payload,
});

export const fetchChargeError = (payload) => ({
  type: CHARGES_ACTIONS.FETCH_CHARGES_ERROR,
  payload,
});

export const fetchCharge = (filter = "") => {
  return async function fetchChargeThunk(dispatch) {
    try {
      dispatch(fetchChargeStart());
      const response = await fetch("/api/charges?search=" + filter);
      const data = await response.json();
      dispatch(fetchChargeSuccess(data));
    } catch (error) {
      dispatch(fetchChargeError(error.message));
    }
  };
};
