import UserInput from './UserInput';

export default function User({ onChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <UserInput
          labelText='Initial Investment'
          valueValue={userInput.initialInvestment}
          onChangeValue={(event) =>
            onChange('initialInvestment', event.target.value)
          }
        />
        <UserInput
          labelText='Anual Investment'
          valueValue={userInput.annualInvestment}
          onChangeValue={(event) =>
            onChange('anualInvestment', event.target.value)
          }
        />
      </div>
      <div className='input-group'>
        <UserInput
          labelText='Expected Return'
          valueValue={userInput.expectedReturn}
          onChangeValue={(event) =>
            onChange('expectedReturn', event.target.value)
          }
        />
        <UserInput
          labelText='Duration'
          valueValue={userInput.duration}
          onChangeValue={(event) => onChange('duration', event.target.value)}
        />
      </div>
    </section>
  );
}
