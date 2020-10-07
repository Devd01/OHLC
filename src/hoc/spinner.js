import React from 'react';
// A ready to use spinner can be used here instead of Loading text
const spinner = (props) => {
    return (props.loading?
        <div style={{textAlign:"center"}}>Loading..</div>
        :
        <div>
           {props.children}
        </div>
        
    );
};

export default spinner;