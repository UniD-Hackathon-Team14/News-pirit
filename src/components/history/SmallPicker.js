import React from "react";
import styled from "styled-components";
// for picker
import Select, { components } from "react-select";
import btn_arrow from "../../assets/icons/btn-select-arrow.svg";

const SmallPicker = ({
  options,
  placeholder,
  isMulti,
  isSearchable,
  inputData,
  setInputData,
  setInputChage,
  style,
}) => {
  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "8rem",
      height: "4.15rem",
      border: "none",
      borderRadius: "0.3rem",
      fontSize: "1.2rem",
      fontWeight: "bold",
      letterSpacing: "-0.035rem",
      color: "#191919",
      boxShadow: "none",
      ...style,
      ":hover": {
        ...style,
        border: "none",
      },
    }),

    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
      ...style,
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: 0,
      width: "6rem",
      zIndex: "5",
      fontSize: "1.2rem",
      marginBottom: "2rem",
      ...style,
    }),
  };

  const IndicatorsContainer = (props) => {
    return (
      <div style={{}}>
        <components.IndicatorsContainer {...props} className="needsclick" />
      </div>
    );
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator
        {...props}
        className="needsclick"
        getStyles={(styles) => ({ ...styles })}
      >
        <img
          src={btn_arrow}
          onContextMenu={(e) => {
            e.preventDefault();
            return false;
          }}
          onDragStart={() => {
            return false;
          }}
          style={{ WebkitTouchCallout: "none", marginTop: "0.2rem" }}
        />
      </components.DropdownIndicator>
    );
  };

  return (
    <>
      <Select
        className="Picker"
        styles={customStyles}
        components={{
          DropdownIndicator,
          IndicatorsContainer,
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: "0.3rem",
          colors: {
            ...theme.colors,
            primary: "#767676",
          },
        })}
        options={options}
        placeholder={placeholder}
        isMulti={isMulti}
        isSearchable={isSearchable}
        closeMenuOnSelect={true}
        closeMenuOnScroll={true}
        value={inputData}
        onInputChange={setInputChage}
        onChange={setInputData}
      />
    </>
  );
};

export default SmallPicker;
