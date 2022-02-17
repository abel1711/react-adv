import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties;
};

export const ProductCard = ({ children, product, className, style }:ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style= { style }
            >
                { children }
            </div>
        </Provider>
    )
};

