import { FC } from 'react'
import { IBook } from '../../interfaces/interfaces'
import styles from './BookCard.module.scss'
import { Link } from 'react-router-dom'

interface BookCardProps {
  book: IBook
}

const BookCard: FC<BookCardProps> = ({ book }) => {
  console.log(book.volumeInfo.categories)
  return (
    <Link to={`/book/${book.id}`} className={styles.card}>
      <img
        className={styles.image}
        src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
        alt='book preview'
      />
      <p className={styles.category}>{book.volumeInfo.categories}</p>
      <h3 className={styles.title}>{book.volumeInfo.title}</h3>
      <p className={styles.author}>{book.volumeInfo.authors}</p>
    </Link>
  )
}
export default BookCard
