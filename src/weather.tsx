import ReactWeather, { useOpenWeather } from 'react-open-weather';

export const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '6adc7e3a987774872754a0288dd45899',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};