import { FormControl, MenuItem, Select, withStyles } from "@material-ui/core";
import styled from "styled-components";

export const BoxSelectStyled = styled.div`
  width: ${({ width }) => width}%;
  height: 50px;
  margin: -25px 0 0 0;
`;

export const SelectLabel = styled.label`
  color: #707070;
`;

export const CssSelect = withStyles({
  root: {
    marginBottom: 0,
    color: "#000000",
    fontSize: "16px",
    borderRadius: "6px !important",
    padding: "1.1vh 2vh",
    paddingTop: "15px",
  },
})(Select);

export const CssForm = withStyles({
  root: {
    marginTop: "10px",
    backgroundColor: "#FFFFFF",
    borderRadius: "6px !important",
    textAlign: "left",
    width: "100%",
    height: "100%",
    border: `1px solid #828282`,
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
    "& .MuiSelect-select:focus": {
      backgroundColor: "#FAFAFA",
    },
    "& .MuiInput-root": {
      "&::before": {
        display: "none",
      },
      "&::after": {
        display: "none",
      },
    },
    "& svg": {
      color: "#000000",
    },
  },
})(FormControl);

export const CssMenuItem = withStyles({
  root: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontSize: "16px",
    "&.MuiListItem-gutters": {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    "&.Mui-selected": {
      color: "#000000",
    },
  },
})(MenuItem);
