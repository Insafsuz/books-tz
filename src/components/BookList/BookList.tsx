import { FC } from 'react'
import { useAppSelector } from '../../hooks'
import { IBook } from '../../interfaces/interfaces'
import BookCard from '../BookCard/BookCard'

interface BookListProps {}

const BookList: FC<BookListProps> = () => {
  const books = useAppSelector(state => state.books.books)

  return (
    <div className='container'>
      <p className='result'>Found {books.length} results</p>
      <div className='book-list'>
        {books && books.map((book: IBook) => <BookCard key={book.id} book={book} />)}
      </div>
      <button className='button'>Load More</button>
    </div>
  )
}
export default BookList
