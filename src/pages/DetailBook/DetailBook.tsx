import { FC, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import axios from '../../services/apiService'
import { getBook } from '../../store/slices/booksSlice'
import styles from './DetailBook.module.scss'

const DetailBook: FC = () => {
  const disptach = useAppDispatch()
  const { id } = useParams()

  const book = useAppSelector(state => state.books.book)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await axios.get(`volumes/${id}`)
        disptach(getBook(data))
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBook()
  }, [])

  console.log(book)

  return (
    <div className='container'>
      <Link to={'/'} className={styles.btn}>
        Go Back
      </Link>
      <div className={styles.detail}>
        <img className={styles.img} src={book?.volumeInfo.imageLinks?.thumbnail} alt='' />
        <div className={styles.info}>
          <p className={styles.category}>{book?.volumeInfo.categories}</p>
          <p className={styles.title}>{book?.volumeInfo.title}</p>
          <p className={styles.authors}>{book?.volumeInfo.authors}</p>
          <p className={styles.description}>{book?.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  )
}
export default DetailBook
