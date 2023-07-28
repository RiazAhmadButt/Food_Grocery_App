import './Card.css';

export const Card = ({ item }) => {

    return (
        <>
            <div className="card">
                <div className='cardBody'>
                    <div className='img-layout'>
                        <img src={item.image} alt="Product 1" />
                    </div>

                    <div className='tl'>
                        <div className="title-layout">
                            <span className='card-title'>{item.title}</span>
                        </div>
                    </div>
                    <div className="cardBottom">
                        <span className="price">{item.price}</span>
                        <span className="discount">{item.discount}</span>
                        <button className="add-button">ADD</button>
                    </div>

                </div>
            </div>
        </>
    )
}
