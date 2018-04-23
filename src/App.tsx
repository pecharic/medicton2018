import * as React from 'react';
import {  Route } from 'react-router-dom';
import {Home, UserLayout, Admin} from './pages/index';

export default  class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Route exact path="/" component={Home}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/dashboard" component={UserLayout}/>
            </div>
        );
    }
}
