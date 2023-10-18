const InputField = ({
  type,
  name,
  label,
  value,
  onChange,
  required = true,
  autoFocus = false,
  onBlur = null,
  isValid = true,
}) => (
  <div className='input-box'>
    <input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      required={required}
      className={!isValid ? 'validate' : null}
      autoFocus={autoFocus}
      onBlur={onBlur}
    />
    <label>{label}:</label>
  </div>
)

export default InputField
