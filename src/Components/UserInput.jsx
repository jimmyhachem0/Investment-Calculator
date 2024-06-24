export default function UserInput({ labelText, onChangeValue, valueValue }) {
  return (
    <p>
      <label htmlFor=''>{labelText}</label>
      <input
        type='number'
        required
        value={valueValue}
        onChange={onChangeValue}
      />
    </p>
  );
}
