import * as React from 'react';
import { SignIn } from './components/index';



export class Home extends React.Component<{}, {}>{

    render() {
        return (
            <div>
                <h1>home</h1>
                <br />
                <SignIn/>
            </div>
        )
            ;
    }
}