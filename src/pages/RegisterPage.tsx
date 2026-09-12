import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormField from '../components/FormField'
import { useAuth } from '../hooks/useAuth'

interface FormValues {
  username: string
  email: string
  password: string
}

const initialValues: FormValues = { username: '', email: '', password: '' }

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const [formError, setFormError] = useState('')

  const updateField = (field: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const validate = (): boolean => {
    const nextErrors: Partial<FormValues> = {}
    if (!values.username.trim()) {
      nextErrors.username = 'Unesi korisničko ime.'
    }
    if (!values.email.trim() || !isValidEmail(values.email)) {
      nextErrors.email = 'Unesi ispravnu email adresu.'
    }
    if (values.password.length < 4) {
      nextErrors.password = 'Lozinka mora imati bar 4 karaktera.'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setFormError('')
    if (!validate()) return

    const result = register({
      username: values.username.trim(),
      email: values.email.trim(),
      password: values.password,
    })

    if (!result.success) {
      setFormError(result.error ?? 'Registracija nije uspela.')
      return
    }

    navigate('/profil')
  }

  return (
    <div className="auth-split-bg">
      <div className="card shadow" style={{ maxWidth: 420, width: '100%' }}>
        <div className="card-body p-4">
          <h1 className="h3 text-center mb-1">Napravi svoj nalog</h1>
          <p className="text-secondary text-center mb-4">
            Registracija novih korisnika — popunite sve podatke za kreiranje vašeg naloga
            na našoj platformi.
          </p>
          {formError && <div className="alert alert-danger py-2">{formError}</div>}
          <form onSubmit={handleSubmit} noValidate>
            <FormField
              id="username"
              label="Korisničko ime"
              value={values.username}
              onChange={updateField('username')}
              placeholder="Unesi svoje korisničko ime"
              error={errors.username}
            />
            <FormField
              id="email"
              label="Email adresa"
              type="email"
              value={values.email}
              onChange={updateField('email')}
              placeholder="Email adresa"
              error={errors.email}
            />
            <FormField
              id="password"
              label="Lozinka"
              type="password"
              value={values.password}
              onChange={updateField('password')}
              placeholder="Lozinka"
              error={errors.password}
            />
            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary rounded-pill">
                Kreiraj nalog
              </button>
            </div>
          </form>
          <p className="text-center text-secondary mt-3 mb-0">
            Već imaš nalog? <Link to="/login">Prijavi se</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
