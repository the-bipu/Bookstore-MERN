import React from 'react'
import BooksBoard from '../components/BooksBoard/BooksBoard';
import BooksContainer from '../components/BooksContainer/BooksContainer';

const BooksView = (props: any) => {
    const { loading, setLoading, books, setBooks } = props;

    return (
        <div className='gradientLinear'>

            {/* Books Board contains the main page for Books. */}
            <BooksBoard />

            {/* Books Containe contains the cards of Books. */}
            <BooksContainer books={books} />

        </div>
    )
}

export default BooksView