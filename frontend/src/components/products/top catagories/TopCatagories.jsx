import React from 'react';
import './TopCatagories.css';

const data = [
    { image: '../../../../public/assets/image 34.jpg', title: 'Category 1' },
    { image: '../../../../public/assets/image 33.jpg', title: 'Category 2' },
    { image: '../../../../public/assets/image 35.jpg', title: 'Category 3' },
    { image: '../../../../public/assets/image 36.jpg', title: 'Category 3' },
    { image: '../../../../public/assets/image 37.jpg', title: 'Category 3' },
    { image: '../../../../public/assets/image 37.jpg', title: 'Category 3' },
    { image: '../../../../public/assets/image 37.jpg', title: 'Category 3' },
    // Add more card data as needed
];

export const TopCatagories = () => {
    return (
        <>
            <div className='vegitableFruites'>
                <div className='head'>
                    <div className='topTitle'>
                        <span className='title'>Shop From <span style={{ color: '#54B22C' }}>Top Categories</span></span>
                    </div>
                </div>
                <hr />
                <div className='catagoryCard'>
                    {data.map((card, index) => (
                        <div className='catagory-cardBody' key={index}>
                            <div className='img-layout'>
                                <img src={card.image} alt={`Category ${index + 1}`} className='catagoryImg' />
                            </div>
                            <div className="title-layout">
                                <span className='card-title'>{card.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};


