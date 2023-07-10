import Input from './Input';
import styles from './InputGroup.module.css';

const { 'input-group': inputGroup } = styles;

const InputGroup = ({ labelNames, labelTexts, values, setUserInput }) => {
  return (
    <div className={inputGroup}>
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
