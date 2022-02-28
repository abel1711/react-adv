import { ProductCardProps } from '../components/ProductCard';
import { PropsButtons } from '../components/ProductButtons';
import { PropsImage } from '../components/ProductImage';
import { PropsTitle } from '../components/ProductTitle';

export interface Product {
    id: string;
    img?: string;
    title: string;
};

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
};

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Buttons: (Props: PropsButtons) => JSX.Element;
    Image: (Props: PropsImage) => JSX.Element;
    Title: (Props: PropsTitle) => JSX.Element;
};

export interface onChangeArgs {
    count: number;
    product: Product;
};

export interface ProductInCart extends Product {
    count: number;
};

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number )=> void;
    reset: ()=> void;
}