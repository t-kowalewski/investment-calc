import InputGroup from './InputGroup';
import Actions from './Actions';

const Form = ({ calculateHandler }) => {
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  const resetFormHandler = () => {
    console.log('Reset');
  };

  return (
    <form className='form' onSubmit={submitFormHandler}>
      <InputGroup
        labelNames={['current-savings', 'yearly-contribution']}
        labelTexts={['Current Savings ($)', 'Yearly Savings ($)']}
      />

      <InputGroup
        labelNames={['expected-return', 'duration']}
        labelTexts={[
          'Expected Interest (%, per year)',
          'Investment Duration (years)',
        ]}
      />

      <Actions resetFormHandler={resetFormHandler} />
    </form>
  );
};

export default Form;
