import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Result from './components/Result/Result';
import { useState } from 'react';

function App() {
  const [resultData, setResultData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      const investedCapital = currentSavings - totalInterest;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: totalInterest,
        totalInvestedCapital: investedCapital,
      });
    }

    setResultData(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form calculateHandler={calculateHandler} setResultData={setResultData} />

      {resultData.length > 0 ? (
        <Result data={resultData} />
      ) : (
        <p className='fallback'>Please submit form to see result</p>
      )}
    </div>
  );
}

export default App;
