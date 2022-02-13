import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
  } from 'react-router-dom';
  
import { Suspense } from 'react';

import { routes } from './routes';
  
import logo from '../logo.svg';
  
export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <Router>
                <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        {
                            routes.map( ({to, name})=>(
                                <li key={ to }>
                                    <NavLink to={ to } activeClassName="nav-active">{ name }</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
        
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    {
                        routes.map(({path, Component})=> (
                            <Route path={ path } key={ path } exact>
                                <Component />
                            </Route>
                        ))
                    }
                </Switch>
                    <Redirect to={routes[0].to} />
                </div>
            </Router>
        </Suspense>
    );
}