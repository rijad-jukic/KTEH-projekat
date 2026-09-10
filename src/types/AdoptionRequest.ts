export interface AdoptionRequest {
  id: string
  petId: number
  applicantName: string
  email: string
  phone?: string
  message: string
  submittedAt: string
}
