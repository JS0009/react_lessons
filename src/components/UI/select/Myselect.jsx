import React from 'react';

const Myselect = ({ options, defaultValue, value, onChange }) => {
    console.log(value)
    return (
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <hr style={{ margin: '15px 0px' }}/>
                
                        <option disabled value=''>{defaultValue}</option>
                        {options.map(option =>
                        <option key={option.value} value={option.value}>
                                {option.name}
                            </option>
                        )}
            </select>
        
     )
}

export default Myselect;