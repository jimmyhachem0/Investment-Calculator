import InvesmentCalculatorLogo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id='header'>
      <img src={InvesmentCalculatorLogo} alt='' />
      <h1>Invesment Calculator</h1>
    </header>
  );
}
