import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharge } from "../actions-creators";
import { chargesSelector } from "../selector";

export const useCharges = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(chargesSelector);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(fetchCharge());
  }, [dispatch]);

  const fetchChargeWithSearch = () => dispatch(fetchCharge(searchText));

  return {
    data,
    loading,
    error,
    searchText,
    setSearchText,
    fetchChargeWithSearch,
  };
};
