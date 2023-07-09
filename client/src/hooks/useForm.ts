import { useState } from 'react'
import type { FormEvent } from 'react'

type ValidationType = Record<string, (value: string) => string | undefined>
type OnSubmitType = (data: FormData) => void

const useForm = (validations: ValidationType) => {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (name: string, value: string) => {
    const validation = validations[name]
    if (validation !== undefined) {
      const messageError = validation(value)
      setErrors(prev => ({ ...prev, [name]: messageError ?? '' }))
    }
  }

  const handleSubmit = (onSubmit: OnSubmitType) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    onSubmit(formData)
  }

  return { errors, validate, handleSubmit }
}

export default useForm
