import React from "react";
import styled from "styled-components";

const Header = (props) => {
    const clickHendler=()=>{
        props.onCloseForma()
    }
    const locaut= "Locaut"
    const login= "Login"
  return (
    <>
      <HeaderStyle>
        <button onClick={clickHendler}>{props.isloading ? locaut : login}</button>
      </HeaderStyle>
    </>
  );
};

export default Header;

const HeaderStyle = styled.header`
  height: 100%;
  height: 60px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
