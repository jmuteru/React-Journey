import React from 'react';
import './styles.css'
function Styles(props) {
    let className = props.primary ? 'primary': ''
  return <div>
      <h1 className={`${className}  font-xl`}>Styles</h1>
  </div>;
}

export default Styles;
