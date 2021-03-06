import { TextField, withStyles } from "@material-ui/core";
import styled from "styled-components";

export const BoxInputStyled = styled.div`
  width: ${({ width }) => width}%;
  height: 50px;
  margin: 0; 
`;

export const CssTextField = withStyles({
  root: {
    marginBottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: `6px`,
    fontWeight: "bold",
    fontSize: "16px",
    border: `1px solid #828282`,
    paddingLeft: "2vh",
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",

    "& label + .MuiInput-formControl": {
      marginTop: "10px",
    },
    "& .MuiInputBase-input": {
      color: "#000000",
    },
    "& .MuiOutlinedInput-input": {
      padding: "8.5px 14px",
    },
    "& .MuiOutlinedInput-root": {
      height: "100%",
      "& fieldset": {
        borderColor: "transparent",
        boxShadow: "inset 2px 2px 2px rgba(0, 0, 0, 0.08)",
      },
      "&:hover fieldset": {
        borderColor: "red",
      },
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
      "&.Mui-disabled fieldset": {
        borderColor: "#4f4f4f",
      },
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none !important",
      borderColor: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none !important",
      borderColor: "none",
    },
    "& label": {
      color: "#707070",
      transform: "translate(14px, 15px) scale(1)",
    },
    "& label.MuiInputLabel-shrink": {
      transform: "translate(0px, -27px) scale(1)",
      color: "#707070",
    },
    "& legend": {
      width: "0px !important",
    },
  },
})(TextField);
