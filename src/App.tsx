import './App.css';
import data from "./json/data.json";

function App() {

  

  return (
    <div className="App">
      <p>{data.result[0].id}</p>
      <p>{data.result[0].name}</p>
      <p>{data.result[0].description}</p>
      <img src={`${window.location.origin}/img/${data.result[0].img1}`} />
    </div>
  );
}

export default App;
