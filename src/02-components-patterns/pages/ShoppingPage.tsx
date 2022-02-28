import { ProductCard, ProductButtons, ProductImage, ProductTitle} from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
                {
                    <ProductCard 
                    className='bg-dark text-white'
                    key={ product.id }
                    product={ product }
                    initialValues={{
                        count: 4,
                        maxCount: 8,
                    }}
                    >
                        {
                            ({reset, count, isMaxCountReached, maxCount, increaseBy})=>(

                                <>
                                    <ProductImage className='image-border' style={{ boxShadow: '10px 10px 10px rgb(0,0,0,0.2)'}}/>
                                    <ProductTitle className='text-white'/>
                                    <ProductButtons className='custom-buttons'/>

                                    <button onClick={ reset }>Reset</button>
                                    <button onClick={()=> increaseBy(-2)}>-2</button>
                                    {
                                        ( !isMaxCountReached && <button onClick={()=> increaseBy(2)}>+2</button>)
                                    }
                                    
                                    <br />
                                    <span>count:{count}- maxCount:{ maxCount }</span>
                                </>

                            )
                        }
                    </ProductCard>
                }
        </div>
    )
}

