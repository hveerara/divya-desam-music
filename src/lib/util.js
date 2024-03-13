export const getBackgroundImageUrl = (categoryName) => {
  switch (categoryName) {
    case "ChozhaNaatu Thirupathigal":
      return "url('/img/flower-rose.jpeg')";
    case "ThondaiNaatu Thirupathigal":
      return "url('/img/flower-mullai.jpg')";
    case "MalaiNaatu Thirupathigal":
      return "url('/img/flower-ixora.jpeg')";
    case "PandiyaNaatu Thirupathigal":
      return "url('/img/flower-jasmine.jpeg')";
    case "VadaNaatu Thirupathigal":
      return "url('/img/flower-chrysanthemum.jpeg')";
    case "NaduNaatu Thirupathigal":
      return "url('/img/thulasi.jpeg')";
    case "Thirupparkadal Thirupathigal":
      return "url('/img/flower-lily.jpeg')";
    case "Thiruparamapada Thirupathigal":
      return "url('/img/flower-lotus.jpeg')";
    case "Mangalam":
      return "url('/img/deepam.png')";
    case "Prayer":
      return "url('/img/flowers-mixed.jpeg')";
    default:
      return "";
  }
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
