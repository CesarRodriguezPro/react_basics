import React from 'react';

function InputItem(pronts){
    return (
        <input type={pronts.type} placeholder={pronts.placeholder}/>
    );
}

export default InputItem;
