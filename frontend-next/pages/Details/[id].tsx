import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// import Spinner from './components/Spinner';

type Book = {
    _id: string;
    title: string;
    author: string;
    publishyear: string;
    createAt: string;
    updateAt: string;
};

const ShowBook = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            setLoading(true);
            axios
                .get(`https://ebookstore-backend.up.railway.app/books/details/${id}`)
                .then((response) => {
                    setBook(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }
    }, [id]);

    return (
        <div className='p-4'>
            <h1 className='text-3xl my-4'>Show Book</h1>
            {loading ? (
                // <Spinner />
                ''
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <div className='text-xl mr-4 text-gray-500'>Id</div>
                        <span>{book?._id}</span>
                    </div>
                    <div className='my-4'>
                        <div className='text-xl mr-4 text-gray-500'>Title</div>
                        <span>{book?.title}</span>
                    </div>
                    <div className='my-4'>
                        <div className='text-xl mr-4 text-gray-500'>Author</div>
                        <span>{book?.author}</span>
                    </div>
                    <div className='my-4'>
                        <div className='text-xl mr-4 text-gray-500'>Publish Year</div>
                        <span>{book?.publishyear}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowBook