import InputGroup from './InputGroup';
import Actions from './Actions';
import { useState } from 'react';

const Form = ({ calculateHandler }) => {
  // controlled input
  const [userInput, setUserInput] = useState({
    'current-savings': '',
    'yearly-contribution': '',
    'expected-return': '',
    duration: '',
  });
  // console.log(userInput);

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log('Submitted');

    // calculateHandler(userInput)
  };

  const resetFormHandler = () => {
    setUserInput({
      'current-savings': '',
      'yearly-contribution': '',
      'expected-return': '',
      duration: '',
    });
    console.log('Reset');
  };

  return (
    <form className='form' onSubmit={submitFormHandler}>
      <InputGroup
        labelNames={['current-savings', 'yearly-contribution']}
        labelTexts={['Current Savings ($)', 'Yearly Savings ($)']}
        values={[
          userInput['current-savings'],
          userInput['yearly-contribution'],
        ]}
        setUserInput={setUserInput}
      />

      <InputGroup
        labelNames={['expected-return', 'duration']}
        labelTexts={[
          'Expected Interest (%, per year)',
          'Investment Duration (years)',
        ]}
        values={[userInput['expected-return'], userInput['duration']]}
        setUserInput={setUserInput}
      />

      <Actions resetFormHandler={resetFormHandler} />
    </form>
  );
};

export default Form;
