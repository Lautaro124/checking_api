export type InputTypeProp = 'line' | 'box'

export interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error: string
  inputType?: InputTypeProp
}
