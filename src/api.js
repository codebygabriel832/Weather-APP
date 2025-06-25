export const getData = async (Location) => {
  let temperature;
  let condition;
  let humidity;
  let windspeed;
  let precipatate;
  let address;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Location}?unitGroup=us&include=current&key=GG5ZAPKPML5JP7Z6T9UANZYT7&contentType=json`;
  try {
    const response = await fetch(url, {
      mode: "cors",
    });
    if (response.ok) {
      const data = await response.json();
      temperature = data.currentConditions.temp;
      condition = data.currentConditions.conditions;
      humidity = data.currentConditions.humidity;
      windspeed = data.days[0].windspeed;
      precipatate = data.days[0].precip;
      address = data.resolvedAddress;
      return {
        temperature,
        condition,
        precipatate,
        humidity,
        windspeed,
        address,
      };
    } else {
      throw new Error("Please Enter a valid Location");
    }
  } catch (error) {
    return {
      error,
    };
  }
};
