import {Card} from '../cards/Card';
import {Snacks} from '../productsCard Details/FruitAndVegitableDetail';
import '../vegitable&fruites/Vegitable.css';

export const SnacksMunchies = () => {
    return (
        <>
            <div className='vegitableFruites'>
                <div className='head'>
                    <div className='topTitle'>
                        <span className='title'>Snacks & Munchies</span>
                    </div>
                    <div className='viewAll'>
                        <span>View All {'>'} </span>
                    </div>
                </div>
                <hr />
                <div className='fruiteCards'>
                    {
                       Snacks.map((item, index)=>(
                        <Card key={index} item={item} className="cards-layout" />
                       )) 
                    }
                </div>
            </div>

        </>
    )
}
