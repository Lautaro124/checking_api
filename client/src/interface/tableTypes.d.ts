export interface DataTypeProp {
  id: string
  cells: string[]
  typeCell: TypeCell
}
export type TypeCell = 'text' | 'number' | 'date' | 'select' | 'checkbox'

export type ColumTypeProp = Array<{
  id: string
  label: string
}>
