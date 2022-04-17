const weatherOptions = {
  0: "Clear ☀️",
  1: "Mostly Clear ⛅",
  2: "Partly Cloudy ☁️",
  3: "Overcast ☁️",
  61: "Slight Rain 🌧",
};

const weather = (conditions) => {
  if (weatherOptions[conditions]) {
    return weatherOptions[conditions];
  } else {
    return "Rainy 🌧";
  }
};

export default weather;
