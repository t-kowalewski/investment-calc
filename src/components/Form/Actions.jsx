const Actions = ({ resetFormHandler }) => {
  return (
    <p className='actions'>
      <button type='reset' className='buttonAlt' onClick={resetFormHandler}>
        Reset
      </button>
      <button type='submit' className='button'>
        Calculate
      </button>
    </p>
  );
};

export default Actions;
