import { ProductCard, ProductButtons, ProductImage, ProductTitle} from '../components';

import '../styles/custom-styles.css';

const product = {
    id: '1',
    img:'./coffee-mug.png',
    title: 'Coffee Mug - Card'
};


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard 
                    className='bg-dark text-white'
                    product={ product } 
                >
                    <ProductCard.Image className='image-border'/>
                    <ProductCard.Title className='text-white'/>
                    <ProductCard.Buttons className='custom-buttons'/>
                </ProductCard>

                <ProductCard 
                    className='bg-dark text-white'
                    product={ product }
                >
                    <ProductImage className='image-border'/>
                    <ProductTitle className='text-white'/>
                    <ProductButtons className='custom-buttons'/>
                </ProductCard>

                <ProductCard 
                    product={ product }
                    style={{
                        backgroundColor: 'red'
                    }}
                >
                    <ProductImage 
                        style={{
                            borderRadius: '50%'
                        }} />
                    <ProductTitle 
                        style={{
                            color: 'white'
                        }}
                    />
                    <ProductButtons 
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    />
                </ProductCard>

            </div>
        </div>
    )
}
