import Input from './Input';

const InputGroup = ({ labelNames, labelTexts, values, setUserInput }) => {
  return (
    <div className='input-group'>
      <Input
        labelName={labelNames[0]}
        labelText={labelTexts[0]}
        value={values[0]}
        setUserInput={setUserInput}
      />

      <Input
        labelName={labelNames[1]}
        labelText={labelTexts[1]}
        value={values[1]}
        setUserInput={setUserInput}
      />
    </div>
  );
};

export default InputGroup;
