import { FC } from 'react'
import { IOption } from '../../interfaces/interfaces'
import styles from './Select.module.scss'

interface SelectProps {
  options: IOption[]
  value?: string
  onChange: (value: string) => void
  name: string
}

const Select: FC<SelectProps> = ({ options, value, onChange, name }) => {
  return (
    <div className={styles.group}>
      <p className={styles.name}>{name}</p>
      <select value={value} onChange={e => onChange(e.target.value)} className={styles.select}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Select
