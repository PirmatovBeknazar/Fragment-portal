import { useState } from 'react';
import './App.css';
import Forma from './Components/Forma';
import Header from './Components/Header';
import styled from 'styled-components';

function App() {
  const [isForm, setIsForm]= useState(false)

  const showForma=()=>{
    setIsForm(true)
  }
  const closeForma=()=>{
    setIsForm(false)
  }
  return (
    <div className="App">
      <Header isloading={isForm} onCloseForma={closeForma} onShowForma={showForma}/>
      <ButtonStyle onClick={showForma}>Forma</ButtonStyle>
      {isForm && <Forma/>}
    </div>
  );
}

export default App;
const ButtonStyle = styled.button`
margin-top: 25%;
`
