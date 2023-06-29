'use client'
import { type InputTypeProp } from '~/interface/inputType'
import React, { useState } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styleProp?: InputTypeProp
  error?: string
  validate?: (value: string) => string | undefined
}

const Input = ({ styleProp, error, validate, ...restOfProps }: InputProps) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  const className = styleProp === 'line'
    ? 'border-b-2 border-blue-500 border-opacity-50 focus:border-blue-500 focus:ring-0 focus:border-opacity-100 focus:outline-none'
    : 'border-2 border-blue-500 border-opacity-50 focus:border-blue-500 focus:ring-0 focus:border-opacity-100 focus:outline-none'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (validate != null) {
      const validationError = validate(value)
      setErrorMessage(validationError)
    }

    restOfProps.onChange?.(event)
  }

  return (
    <div>
      <input className={className} {...restOfProps} onChange={handleChange} />
      {(errorMessage != null) && <p className="text-red-500">{errorMessage}</p>}
    </div>
  )
}

export default Input
