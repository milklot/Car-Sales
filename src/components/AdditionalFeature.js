import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
       <button
        className="button"
        onClick={() => {
          props.removeFeature(props.feature)
        }}
      >X</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
