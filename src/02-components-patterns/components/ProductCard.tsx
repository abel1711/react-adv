import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface ProductCardProps {
    // children?: ReactElement | ReactElement[];
    children: ( args : ProductCardHandlers )=> JSX.Element;
    className?: string;
    onChange?: ( args: onChangeArgs )=> void;
    product: Product;
    style?: CSSProperties;
    value?: number;
    initialValues?: InitialValues;
};

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }:ProductCardProps) => {
    
    const { counter, increaseBy, maxCount, reset, isMaxCountReached } = useProduct( { onChange, product, value, initialValues } );

    return (
        
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style= { style }
            >
                { children({
                    count: counter,
                    isMaxCountReached,
                    maxCount,
                    product,
                    increaseBy,
                    reset
                }) }
            </div>
        </Provider>
    )
};

