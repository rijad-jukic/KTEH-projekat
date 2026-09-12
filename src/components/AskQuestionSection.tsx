import { useState, type FormEvent } from 'react'
import { ContactMessageStore } from '../models/ContactMessageStore'
import type { ContactMessage } from '../types/ContactMessage'
import FormField from './FormField'
import Modal from './Modal'

const messageStore = new ContactMessageStore()

function AskQuestionSection() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!message.trim()) {
      setError('Unesi poruku pre slanja.')
      return
    }

    const contactMessage: ContactMessage = {
      id: crypto.randomUUID(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    }
    messageStore.add(contactMessage)

    setMessage('')
    setError('')
    setShowConfirmation(true)
  }

  return (
    <section className="py-5 bg-white">
      <div className="container col-lg-8">
        <h2 className="h3 text-center mb-2">Postavi pitanje</h2>
        <p className="text-secondary text-center mb-4">
          Ako imaš bilo kakvo pitanje, nedoumicu ili trebaš pomoć oko usvajanja
          ljubimca, slobodno nam se javi. Tu smo da ti pomognemo da pronađeš svog
          novog najboljeg prijatelja.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <FormField
            id="contact-message"
            type="textarea"
            rows={5}
            value={message}
            onChange={setMessage}
            placeholder="Tvoja poruka..."
            error={error}
          />
          <div className="text-center">
            <button type="submit" className="btn btn-primary rounded-pill px-4">
              Pošalji
            </button>
          </div>
        </form>
      </div>

      <Modal
        show={showConfirmation}
        title="Poruka je poslata!"
        onClose={() => setShowConfirmation(false)}
      >
        <p className="mb-0">Hvala na poruci — javićemo ti se u najkraćem roku.</p>
      </Modal>
    </section>
  )
}

export default AskQuestionSection
