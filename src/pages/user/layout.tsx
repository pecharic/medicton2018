import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import {Dashboard} from '../user/dashboard/index';
import {Equipment} from './equipment/index';
import './style.css';

@observer
export class UserLayout extends React.Component<{}, {}>
{



    render() {
        return (
            <div style={{display:'flex'}}>

                <div style={{width:'20%',  background:'#F7F9FA', height:'100vh', paddingLeft:'25px', paddingTop:'10px'}}>
                    <div style={{
                        width:'170px',
                        marginTop: '20px',
                        height:'40px',
                        backgroundSize:'cover',
                        backgroundImage:"url(http://medicton.com/assets/img/logo.png)"}}></div>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        paddingTop:'17px',
                        paddingLeft:'10px',
                        fontFamily: 'Montserrat, sans-serif'
                    }}>
                    <div ><Link  className="link" to="/dashboard/equipment">Equipment</Link></div>
                        <div><Link className="link" to="/dashboard">Dashboard</Link></div>
                    </div>
                </div>
                <div style={{width:'80%', margin:'3%'}}>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/dashboard/equipment" component={Equipment} />
                </div>
            </div>
        );
    }
}

