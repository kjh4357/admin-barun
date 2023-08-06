export const getFormTranslate = (form) => {
  switch (form) {
    case "apartment":
      return "아파트";
    case "housing":
      return "주택";
    case "villa":
      return "빌라";
    case "mall":
      return "상가";
    case "etc":
      return "기타";
    default:
      return "";
  }
};
