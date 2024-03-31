import React from 'react';
import JoinBoard from '../components/JoinBoard/JoinBoard';
import NewArrival from '../components/NewArrival/NewArrival';
import AboutBoard from '../components/AboutBoard/AboutBoard';
import HomeContainer from '../components/HomeContainer/HomeContainer';

const IndexView = (props: any) => {
    const { books, totalBooksCount } = props;

    return (
        <div>
            <div className='bg-white'>

                {/* Home Container contains the home design. */}
                <HomeContainer />

                {/* About Board contains the about card of the books. */}
                <AboutBoard totalBooksCount={totalBooksCount} />

                {/* New Arrivals contains the newly arrived books card. */}
                <NewArrival books={books} />

                {/* Join Board contains the Join Us container. */}
                <JoinBoard />

            </div>
        </div>
    );
};

export default IndexView;
