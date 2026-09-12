import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormField from '../components/FormField'
import { useAuth } from '../hooks/useAuth'

interface FormValues {
  username: string
  password: string
}

const initialValues: FormValues = { username: '', password: '' }

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [formError, setFormError] = useState('')

  const updateField = (field: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setFormError('')

    const result = login(values.username.trim(), values.password)
    if (!result.success) {
      setFormError(result.error ?? 'Prijava nije uspela.')
      return
    }

    navigate('/profil')
  }

  return (
    <div className="auth-split-bg">
      <div className="card shadow" style={{ maxWidth: 420, width: '100%' }}>
        <div className="card-body p-4">
          <h1 className="h3 text-center mb-1">Dobrodošli nazad</h1>
          <p className="text-secondary text-center mb-4">
            Prijavite se pomoću vašeg korisničkog imena i lozinke za nastavak.
          </p>
          {formError && <div className="alert alert-danger py-2">{formError}</div>}
          <form onSubmit={handleSubmit} noValidate>
            <FormField
              id="username"
              label="Korisničko ime"
              value={values.username}
              onChange={updateField('username')}
              placeholder="Unesi svoje korisničko ime"
            />
            <FormField
              id="password"
              label="Lozinka"
              type="password"
              value={values.password}
              onChange={updateField('password')}
              placeholder="Lozinka"
            />
            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary rounded-pill">
                Prijavi se
              </button>
            </div>
          </form>
          <p className="text-center text-secondary mt-3 mb-0">
            Nemaš nalog? <Link to="/register">Registruj se</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
