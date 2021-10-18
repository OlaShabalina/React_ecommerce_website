import './FormInput.scss'

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="FormInputGroup">
      <input 
        className="formInput"
        onChange={handleChange}
        {...otherProps}
      />
      {
        label ? 
        <label className={`${otherProps.value.length ? 'shrink' : ''} formInputLabel`}>
          {label}
        </label>
        : null
      }
    </div>
  )
}
