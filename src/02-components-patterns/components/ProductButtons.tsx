import { CSSProperties, useCallback, useContext } from "react";
import { productContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface PropsButtons {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style}: PropsButtons)=> {

    const { counter, increaseBy, maxCount } = useContext(productContext);

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    );

    return (

        <div 
            className={ `${ styles.buttonsContainer } ${ className }` }
            style={ style }
        >

            <button 
                className={ styles.buttonMinus }
                onClick={()=> increaseBy(-1)}
            > - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button 
                className={ `${styles.buttonAdd} ${ isMaxReached() && styles.disable }`}
                disabled={ isMaxReached() ? true : false }
                onClick={()=> increaseBy(1)}
            > + </button>

        </div>
    )
};