import React from 'react';

function Myselect({options, defaultValue}) {
    return (
        <>
            <hr style={{ margin: '15px 0px' }} />
            <div>
                <select>
                    <option disabled value=''>{defaultValue}</option>
                    {options.map(option =>
                        <option value={option.value}>
                            {option.name}
                        </option>)}
                </select>
            </div>
        </>
     );
}

export default Myselect;