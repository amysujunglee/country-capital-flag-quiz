import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [country, setCountry] = useState(null);

  const fetchData = () => {
    const url = 'https://countriesnow.space/api/v0.1/countries/capital';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountry(data.data[0]); // Update the state with the first country data
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = (country) => {
    if (!country) return <></>;
    return (
      <>
        <p>Country Name: {country?.name}</p>
        <p>Capital: {country?.capital}</p>
        <p>Flag:</p>
      </>
    );
  };

  return (
    <main className="">
      <h1>Country / Capital / Flag Quiz</h1>
      {displayData(country)} {/* Properly invoking displayData */}
    </main>
  );
}

export default App;
