import PropTypes from "prop-types";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HeaderStyled, ContainerLogoStyled, TextStyled } from "./styles";

export function Header({ backPage }) {
  return (
    <HeaderStyled backPage={backPage}>
      <ContainerLogoStyled>
        <AiOutlineFileSearch  size={55} color="#95C11F" />
        <TextStyled>
          Meu processo
        </TextStyled>
      </ContainerLogoStyled>
      <Link to="/">
        <IoMdArrowRoundBack size={16}/>
        SAIR
      </Link>
    </HeaderStyled>
  );
}

Header.defaultProps = {
  backPage: false,
};

Header.propTypes = {
  backPage: PropTypes.bool,
};

export default Header;
