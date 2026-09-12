interface FormFieldProps {
  id: string
  label?: string
  type?: 'text' | 'email' | 'password' | 'textarea'
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
  rows?: number
}

function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  rows = 4,
}: FormFieldProps) {
  const controlClass = `form-control${error ? ' is-invalid' : ''}`

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          id={id}
          className={controlClass}
          rows={rows}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={controlClass}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
        />
      )}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default FormField
