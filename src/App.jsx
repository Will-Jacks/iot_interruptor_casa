import Button from "./Components/Buttons/Buttons.jsx";
import Connection from "./Components/Connection/Connection.jsx";
import Header from "./Components/Header/Header.jsx";
import Input from "./Components/Input/Input.jsx";
import ExibeMsg from "./Components/Message/Message.jsx";


function App() {

  return(
    <div className="App">
      <Header />
      <Connection />
      <Button/>
      {/* <ExibeMsg /> */} 
      {/* <Input /> */}
    </div>
  )
}

export default App;