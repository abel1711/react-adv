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
                                    <ProductImage />
                                    <ProductTitle />
                                    <ProductButtons />

                                </>

                            )
                        }
                    </ProductCard>
                }
        </div>
    )
}

