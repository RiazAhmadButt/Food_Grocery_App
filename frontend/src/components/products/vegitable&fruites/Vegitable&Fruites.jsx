import {Card} from '../cards/Card';
import {VegitableAndFruites} from '../productsCard Details/FruitAndVegitableDetail';
import './Vegitable.css';

export const VegitableFruites = () => {
    return (
        <>
            <div className='vegitableFruites'>
                <div className='head'>
                    <div className='topTitle'>
                        <span className='title'>Vegetables & Fruits</span>
                    </div>
                    <div className='viewAll'>
                        <span>View All {'>'} </span>
                    </div>
                </div>
                <hr />
                <div className='fruiteCards'>
                    {
                       VegitableAndFruites.map((item, index)=>(
                        <Card key={index} item={item} className="cards-layout" />
                       )) 
                    }
                </div>
            </div>

        </>
    )
}
