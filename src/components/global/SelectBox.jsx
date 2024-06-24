import React, { useState } from "react";
import Select from "react-select";

const SelectBox = ({ option, selectedOption, setSelectedOption, name }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
    };
    return (
        <div>
            <Select
                // defaultValue={selectedOption}
                onChange={handleChange}
                options={option}
                name={name}
                value={selectedOption[name]}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? "" : "lightgray",
                        padding: "8px",
                    }),
                }}
            />
        </div>
    );
};

export default SelectBox;
