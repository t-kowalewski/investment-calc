const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Result = ({ data }) => {
  return (
    <table className='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Total Savings</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => {
          const {
            year,
            yearlyInterest,
            savingsEndOfYear,
            yearlyContribution,
            totalInvestedCapital,
          } = item;

          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(totalInvestedCapital)}</td>
              <td>{formatter.format(yearlyInterest)}</td>
              <td>{formatter.format(yearlyContribution)}</td>
              <td>{formatter.format(savingsEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
