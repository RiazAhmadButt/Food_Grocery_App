import {Card} from '../cards/Card';
import {SuperSave} from '../productsCard Details/FruitAndVegitableDetail';
import '../vegitable&fruites/Vegitable.css';

export const SupersaverUp = () => {
    return (
        <>
            <div className='vegitableFruites'>
                <div className='head'>
                    <div className='topTitle'>
                        <span className='title'>Supersaver <span style={{color: '#54B22C'}}> Up to 50% off</span></span>
                    </div>
                    <div className='viewAll'>
                        <span>View All {'>'} </span>
                    </div>
                </div>
                <hr />
                <div className='fruiteCards'>
                    {
                       SuperSave.map((item, index)=>(
                        <Card key={index} item={item} className="cards-layout" />
                       )) 
                    }
                </div>
            </div>

        </>
    )
}
