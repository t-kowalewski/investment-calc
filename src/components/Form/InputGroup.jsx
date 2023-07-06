import Input from './Input';

const InputGroup = ({ labelNames, labelTexts }) => {
  return (
    <div className='input-group'>
      <Input labelName={labelNames[0]} labelText={labelTexts[0]} />

      <Input labelName={labelNames[1]} labelText={labelTexts[1]} />
    </div>
  );
};

export default InputGroup;
