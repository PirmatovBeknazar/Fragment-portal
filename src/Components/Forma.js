import React from 'react'
import styled from 'styled-components'

const Forma = () => {
  return (
    <div>
    
      <FormaStyle>
        <h1>Forma</h1>
      </FormaStyle>
    </div>
  )
}

export default Forma

const FormaStyle = styled.div`
width: 400px;

padding: 0px 30px 30px 30px;
border: 1px solid;
position: absolute;
background-color: bisque;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
`

