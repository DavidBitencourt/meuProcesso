import PropTypes from "prop-types";
import React from "react";
import loading from "../../assets/animations/loading.json";
import AnimationLottie from "../AnimationLottie";
import { LoadingBoxStyled, TextStyled } from "./styles";

function Loading({ show }) {
  return (
    <LoadingBoxStyled show={show}>
      <AnimationLottie
        height={120}
        width={120}
        animationData={loading}
        borderRadius={100}
      />
      <TextStyled>Procurando...</TextStyled>
    </LoadingBoxStyled>
  );
}

Loading.defaultProps = {
  show: false,
};

Loading.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Loading;
