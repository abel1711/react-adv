import { lazy, LazyExoticComponent } from "react";
import { NoLazyload } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    to: string;
    children?: Route[];
};

// const LazyPages1 = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPages1'));
// const LazyPages2 = lazy(()=> import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPages2'));
// const LazyPages3 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPages3'));


export const routes: Route[] = [
    {
        path:'/no-lazyload',
        Component: NoLazyload,
        name: 'No-lazyload',
        to:'/no-lazyload'
    },
    {
        path:'/lazyload',
        Component: lazy( ()=> import(/*webpackChunkName: "LazyloadNested"*/'../01-lazyload/layout/LazyLayout')),
        name: 'Lazyload Nested',
        to:'/lazyload'
    },
]