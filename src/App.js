// import logo from './logo.svg';
// import './App.css';
import Caterogy from "./components/Caterogy";
import Pages from "./pages/Pages";
import{BrowserRouter}from 'react-router-dom';
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
      <Caterogy/>
      <Pages /> 
</BrowserRouter>
      
   </div>
  );
}

export default App;
