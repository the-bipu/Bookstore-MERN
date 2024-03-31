'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BooksController = (props?: any) => {
    const {
        children,
        ...rest
    } = props;

    const [loading, setLoading] = useState<boolean>(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://ebookstore-backend.vercel.app/books/all')
            .then((response) => {
                setBooks(response.data.data);
                console.log(books);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const viewProps = {
        loading,
        setLoading,
        books,
        setBooks,
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...rest, ...viewProps });
        }

        return child;
    });

    return (
        <div>
            <Navbar />
            {childrenWithProps}
            <Footer />
        </div>
    );
};

export { BooksController };
