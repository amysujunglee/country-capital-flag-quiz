import './App.css';

function App() {

  const fetchData = () => {
    const url = 'https://countriesnow.space/api/v0.1/countries/capital'
    fetch(url)
      .then(res => res.json())
      .then(data => { displayData(data.data[0]); })
  }

  const displayData = (country) => {
    if (!country) <div></div>
    console.log('display data', country)
    return (
      <>
        <p>Country Name: {country?.name}</p>
        <p>Capital:</p>
        <p>Flag:</p>
      </>
    )
  }

  fetchData()

  return (
    <main className="">
      <h1>Country / Capital / Flag Quiz</h1>
      {displayData()}
    </main>
  );
}

export default App;
