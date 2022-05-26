import React from 'react';

const Radio = ({ question, options, onChange, value, id, active }) => {
  console.log(active);
  return (
    <fieldset>
      <legend>{question}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
