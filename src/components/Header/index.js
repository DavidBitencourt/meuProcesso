import PropTypes from "prop-types";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./styles";

export function Header({ backPage }) {
  return (
    <HeaderStyled backPage={backPage}>
      <AiOutlineFileSearch />
      <Link to="/">
        <IoMdArrowRoundBack size={16}/>
        SAIR
      </Link>
    </HeaderStyled>
  );
}

Header.defaultProps = {
  backPage: true,
};

Header.propTypes = {
  backPage: PropTypes.bool,
};

export default Header;
