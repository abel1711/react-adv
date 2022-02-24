import { ProductCard, ProductButtons, ProductImage, ProductTitle} from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {

   const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {   
                    products.map( product => (

                        <ProductCard 
                            className='bg-dark text-white'
                            key={ product.id }
                            product={ product }
                            value={ shoppingCart[product.id]?.count || 0 }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className='image-border' style={{ boxShadow: '10px 10px 10px rgb(0,0,0,0.2)'}}/>
                            <ProductTitle className='text-white'/>
                            <ProductButtons className='custom-buttons'/>
                        </ProductCard>

                    ))
                }
            </div>
            <div className='shopping-cart'>
                {
                    Object.entries( shoppingCart ).map(([ key, product ])=>(
                        <ProductCard 
                            key={ key }
                            className='bg-dark text-white'
                            product={ product }
                            style={{width: '100px'}}
                            value= { product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className='image-border' style={{ boxShadow: '10px 10px 10px rgb(0,0,0,0.2)'}}/>
                            <ProductButtons 
                                className='custom-buttons'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }

            </div>
        </div>
    )
}

