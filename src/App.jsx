import './app.css';
import Button from "./Components/Buttons/Buttons.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {

  return(
    <div className="App">
      <Header />
        <div className="container-buttons">
          <Button/>
        </div>
    </div>
  )
}

export default App;