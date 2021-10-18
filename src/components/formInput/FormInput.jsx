import './FormInput.scss'

export default function FormInput({ handleChange, label, value, ...otherProps }) {
  return (
    <div className="FormInput">
      <input 
        className="input"
        onChange={handleChange}
        {...otherProps}
      />
      {
        label ? 
        <label className={`${ (value !== '') ? 'shrink' : ''} formInputLabel`}>
          {label}
        </label>
        : null
      }
    </div>
  )
}
