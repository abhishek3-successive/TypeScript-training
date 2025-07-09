interface WeaterProp{
    temperature : String | Number
}
const Weather = ({ temperature } : WeaterProp) => {
  const tempNum = Number(temperature);

  if (isNaN(tempNum)) {
    return <p >Enter the correct value</p>;
  }

  if (tempNum > 25) {
    return <p >It's sunny today! ☀️ </p>;
  } else if (tempNum < 10) {
    return <p >It's cold today!  ❄️</p>;
  } else {
    return <p >The weather is moderate today. ☁️ </p>;
  }
};

export default Weather;