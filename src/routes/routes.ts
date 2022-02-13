import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    to: string;
    children?: Route[];
};

const LazyPages1 = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPages1'));
const LazyPages2 = lazy(()=> import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPages2'));
const LazyPages3 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPages3'));


export const routes: Route[] = [
    {
        path:'/lazy1',
        Component: LazyPages1,
        name: 'LazyPage-1',
        to:'/lazy1'
    },
    {
        path:'/lazy2',
        Component: LazyPages2,
        name: 'LazyPage-2',
        to:'/lazy2'
    },
    {
        path:'/lazy3',
        Component: LazyPages3,
        name: 'LazyPage-3',
        to:'/lazy3'
    },
]