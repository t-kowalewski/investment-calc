const Input = ({ labelName, labelText, value, setUserInput }) => {
  const updateInputHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [labelName]: e.target.value,
      };
    });
  };

  return (
    <p>
      <label htmlFor={labelName}>{labelText}</label>
      <input
        type='number'
        id={labelName}
        value={value}
        onChange={updateInputHandler}
      />
    </p>
  );
};

export default Input;
