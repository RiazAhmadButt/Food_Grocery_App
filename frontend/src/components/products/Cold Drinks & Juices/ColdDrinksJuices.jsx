import {Card} from '../cards/Card';
import {ColdDrinks} from '../productsCard Details/FruitAndVegitableDetail';
import '../vegitable&fruites/Vegitable.css';

export const ColdDrinksJuices = () => {
    return (
        <>
            <div className='vegitableFruites'>
                <div className='head'>
                    <div className='topTitle'>
                        <span className='title'>Cold Drinks & Juices</span>
                    </div>
                    <div className='viewAll'>
                        <span>View All {'>'} </span>
                    </div>
                </div>
                <hr />
                <div className='fruiteCards'>
                    {
                       ColdDrinks.map((item, index)=>(
                        <Card key={index} item={item} className="cards-layout" />
                       )) 
                    }
                </div>
            </div>

        </>
    )
}
