import { useContext } from "react";
import { productContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export const ProductImage = ( {img}:{img?: string} )=>{

    const { product } = useContext(productContext);

    return(
        <img className={ styles.productImg } src={ (img) ? img : (product.img)? product.img : noImage } alt="Product img" />
    )
};