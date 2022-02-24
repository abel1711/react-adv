import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    className?: string;
    onChange?: ( args: onChangeArgs )=> void;
    product: Product;
    style?: CSSProperties;
    value?: number;
};

export const ProductCard = ({ children, product, className, style, onChange, value }:ProductCardProps) => {

    const { counter, increaseBy } = useProduct( { onChange, product, value } );

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
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

