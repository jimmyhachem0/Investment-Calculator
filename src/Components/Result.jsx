import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result({ input }) {
  let resultsData = calculateInvestmentResults(input);
  console.log(resultsData);

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (year)</th>
          <th>Total Interest</th>
          <th>Invensted Capital</th>
        </tr>
      </thead>

      <tbody>
        {resultsData.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(yearData.interest * 2)}</td>
              <td>{yearData.year * 9}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
