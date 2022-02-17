import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export interface PropsImage {
    className?: string;
    img?: string; 
    style?: CSSProperties;
}

export const ProductImage = ( {img, className, style }: PropsImage )=>{

    const { product } = useContext(productContext);

    return(
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            src={ (img) ? img : (product.img)? product.img : noImage } 
            alt="Product img"
            style={ style }
        />
    )
};