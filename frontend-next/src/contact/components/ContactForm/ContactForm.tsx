import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className='bg-white w-full h-auto flex items-center justify-center'>
            <div className='bg-white w-8/12 h-auto pt-40 pb-28'>
                <form className='flex items-center justify-center flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex w-1/2 h-auto flex-col items-start justify-center'>
                        <label htmlFor="fname" className='text-base font-light text-[#565656]'>First Name</label>
                        <input type="text" {...register('fname', { required: true })} className='w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656]' />
                        {errors.fname && <span className="text-red-500">First Name is required</span>}
                    </div>
                    <div className='flex w-1/2 h-auto flex-col items-start justify-center'>
                        <label htmlFor="lname" className='text-base font-light text-[#565656]'>Last Name</label>
                        <input type="text" {...register('lname', { required: true })} className='w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656]' />
                        {errors.lname && <span className="text-red-500">Last Name is required</span>}
                    </div>
                    <div className='flex w-1/2 h-auto flex-col items-start justify-center'>
                        <label htmlFor="email" className='text-base font-light text-[#565656]'>Email</label>
                        <input type="email" {...register('email', { required: true })} className='w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656]' />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className='flex w-1/2 h-auto flex-col items-start justify-center'>
                        <label htmlFor="message" className='text-base font-light text-[#565656]'>Message</label>
                        <textarea id="" cols={30} rows={10} {...register('message', { required: true })} className='w-full rounded-sm borderButtomLight text-base font-light text-[#565656]' />
                        {errors.message && <span className="text-red-500">Message is required</span>}
                    </div>
                    <button type="submit" className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
