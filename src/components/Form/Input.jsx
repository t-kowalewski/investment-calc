import { useState } from 'react';

const Input = ({ labelName, labelText }) => {
  // controlled input
  const [value, setValue] = useState('');
  console.log(value);

  const validateInputHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <p>
      <label htmlFor={labelName}>{labelText}</label>
      <input
        type='number'
        id={labelName}
        value={value}
        onChange={validateInputHandler}
      />
    </p>
  );
};

export default Input;
