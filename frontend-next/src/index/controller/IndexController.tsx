import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const IndexController = (props?: any) => {
    const {
        children,
        ...rest
    } = props;

    const [loading, setLoading] = useState<boolean>(false);
    const [books, setBooks] = useState([]);
    const [totalBooksCount, setTotalBooksCount] = useState(0);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://bookstorm-rsmvx03awqentulqskokde6yg.vercel.app/books/all')
            .then((response) => {
                setTotalBooksCount(response.data.data.length);
                setBooks(response.data.data.slice(0, 3));
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
        totalBooksCount,
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

export { IndexController };
