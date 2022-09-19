// import logo from './logo.svg';
// import './App.css';
import Caterogy from "./components/Caterogy";
import Pages from "./pages/Pages";
import{BrowserRouter}from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
// import {GiknifeFork}from 'react-icons/gi'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        {/* <GiknifeFork/> */}
        <Logo to ={"/"} >logo </Logo>
      </Nav>
      <Search />
      <Caterogy/>
      <Pages /> 
</BrowserRouter>
      
   </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size:1.3rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
 padding:4rem 0rem;
//  display:flex;
//  justify-content:center;
//  align-items:center;
//  svg{
//   font-size:2rem;
//  }
`

export default App;
