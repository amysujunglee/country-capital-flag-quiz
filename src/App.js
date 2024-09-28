import './App.css';

function App() {

  const fetchData = () => {
    const url = 'https://countriesnow.space/api/v0.1/countries/capital'
    fetch(url)
      .then(res => res.json())
      .then(data => data)
  }

  fetchData()

  return (
    <main className="">
      <h1>Country / Capital / Flag Quiz</h1>
      <p>Country Name:</p>
      <p>Capital:</p>
      <p>Flag:</p>
    </main>
  );
}

export default App;
