export const getColorByStatus = (status) => {
  switch (status) {
    case "IN_PROGRESS":
      return "yellow";
    case "COMPLETED":
      return "green";
    default:
      return "red";
  }
};

export const formatToCurrency = (currency) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currency);
};
