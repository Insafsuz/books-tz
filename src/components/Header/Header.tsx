import { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import axios from '../../services/apiService'
import { getBooks } from '../../store/slices/booksSlice'
import Select from '../Select/Select'
import styles from './Header.module.scss'

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')
  const [sorting, setSorting] = useState('relevance')
  const [categories, setCategories] = useState('all')

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios(
          `volumes?q=${search}${categories}&printType=books&orderBy=${sorting}&startIndex=0&maxResults=40`
        )
        dispatch(getBooks(data.items))
      } catch (error) {
        console.log(error)
      }
    }
    fetchBooks()
  }, [search, sorting, categories])

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__body}>
          <h1 className={styles.header__title}>Search for books</h1>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='input'
            type='text'
            placeholder='Find a book'
          />
          <div className={styles.header__row}>
            <Select
              name='Categories'
              value={categories}
              onChange={setCategories}
              options={[
                { value: 'all', label: 'All' },
                { value: 'art', label: 'Art' },
                { value: 'biography', label: 'Biography' },
                { value: 'computers', label: 'Computers' },
                { value: 'history', label: 'History' },
                { value: 'medical', label: 'Medical' },
                { value: 'poetry', label: 'Poetry' },
              ]}
            />
            <Select
              name='Sorting by'
              value={sorting}
              onChange={setSorting}
              options={[
                { value: 'relevance', label: 'Relevance' },
                { value: 'newest', label: 'Newest' },
              ]}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
