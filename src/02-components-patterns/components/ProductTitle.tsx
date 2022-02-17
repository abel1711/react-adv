import { CSSProperties, useContext } from "react";
import { productContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface PropsTitle{
    className?: string;
    title?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: PropsTitle )=>{

    const { product } = useContext( productContext );

    return (
        <span 
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
        >
            { (title)? title : product.title }
        </span>
    )
};