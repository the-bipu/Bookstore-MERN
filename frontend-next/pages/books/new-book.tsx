import axios from 'axios';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const AddBooks = () => {
    const { register, handleSubmit, reset } = useForm();
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();

    const onSubmit = (data: any) => {
        axios
            .post('https://bookstorm-rsmvx03awqentulqskokde6yg.vercel.app/books/add', data)
            .then(() => {
                enqueueSnackbar("Book created Successfully", { variant: 'success' });
                reset();
                router.push('/');
            })
            .catch((error) => {
                enqueueSnackbar("Error", { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className='bg-[#5956E9] w-full h-auto min-h-screen flex flex-col items-center justify-center'>
            <form className='flex flex-col rounded-xl md:w-4/12 w-96 px-16 py-8 bg-white' onSubmit={handleSubmit(onSubmit)}>
                <h1 className=' text-lg font-medium text-[#565656]'>Create New Books!</h1>
                <div className='my-4 flex h-auto flex-col items-start justify-center'>
                    <label className='text-base text-[#565656] font-normal'>Title</label>
                    <input type="text" {...register('title')} className='w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656] bg-transparent' />
                </div>
                <div className='my-4 flex h-auto flex-col items-start justify-center'>
                    <label className='text-base text-[#565656] font-normal'>Author</label>
                    <input type="text" {...register('author')} className='w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656] bg-transparent' />
                </div>
                <div className='my-4 flex h-auto flex-col items-start justify-center'>
                    <label className='text-base text-[#565656] font-normal'>Drive Link</label>
                    <input type="text" {...register('driveLink')} className='w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656] bg-transparent' />
                </div>
                <div className='my-4 flex h-auto flex-col items-start justify-center'>
                    <label className='text-base text-[#565656] font-normal'>Image Link</label>
                    <input type="text" {...register('imgLink')} className='w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656] bg-transparent' />
                </div>
                <div className='my-4 flex h-auto flex-col items-start justify-center'>
                    <label className='text-base text-[#565656] font-normal'>Publish Year</label>
                    <input type="text" {...register('publishyear')} className='w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656] bg-transparent' />
                </div>
                <div className='flex items-center justify-center w-full h-auto mt-2'>
                    <button type='submit' className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddBooks;
