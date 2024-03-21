import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [imgLink, setImgLink] = useState('');
    const [publishyear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            imgLink,
            publishyear,
        };
        setLoading(true);
        axios
            .post('https://ebookstore-backend.vercel.app/books', data)
            // .post('http://localhost:5555/books', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Book created Successfully", { variant: 'success'});
                router.push('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error", { variant: 'error'});
                console.log(error);
            });
    };
  return (
    <div className='p-4'>
        <h1 className='text-3xl my-4'>Create Book</h1>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Image Link</label>
                <input type="text" value={imgLink} onChange={(e) => setImgLink(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
                <input type="text" value={publishyear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>
            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>Save</button>
        </div>
    </div>
  )
}

export default AddBook