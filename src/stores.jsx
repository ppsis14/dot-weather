import { create } from "zustand";

export const useStore = create((set) => ({
  temperatureUnit: "fahrenheit",
  aqiType: "us",
  currentLocation: navigator.geolocation.getCurrentPosition((position) => ({
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  })),
  weaterData: null,
  aqiData: null,
  setTemperatureUnit: (temperatureUnit) => set(() => ({ temperatureUnit })),
  setAqiType: (aqiType) => set(() => ({ aqiType })),
  fetchWeatherData: () => set(() => null),
  fetchAqiData: () => set(() => null),
}));
