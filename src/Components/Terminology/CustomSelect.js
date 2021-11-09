import React from 'react'
import Select from 'react-select';


function CustomSelect({ onChange, options, value, className }) {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    };
    
    const customStyles = {
        control: base => ({
        ...base,
        background: "#2f2f2f",
        height: 52,
        minHeight: 52,
        
        }),

        singleValue: provided => ({
        ...provided,
        color: 'white'
        }),
    };

    return (
        <div className={className}>
        <Select
            styles={customStyles}
            value={defaultValue(options, value)}
            onChange={value => {
                onChange(value)

            }} options={options} />
    </div>
    )
}

export default CustomSelect
