import PropTypes from "prop-types";
import React from "react";
import { BoxInputStyled, CssTextField } from "./styles";
export function Input({
  width,
  label,
  name,
  height,
  value,
  onChange,
  disabled,
  placeholder
}) {
  const handleChange = (event) => {
    onChange({
      [name]: event.target.value,
    });
  };

  return (
      <BoxInputStyled width={width} height={height}>
        <CssTextField
          placeholder={placeholder}
          label={label}
          name={name}
          margin="normal"
          disabled={disabled}
          value={value}
          onChange={handleChange}
          key={name}
        />
      </BoxInputStyled>
  );
}

Input.defaultProps = {
  height: null,
  value: "",
  errorMessage: null,
  placeholder: null,
  valueSent: false
};

Input.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  height: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
