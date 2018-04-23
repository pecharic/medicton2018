import * as React from 'react';
import {SignIn, Register} from './components';
import {observer} from "mobx-react";
import homeStore from '../../stores/home';

@observer
export class Home extends React.Component<{}, {}> {
    private changeModeClickHandler = (visible: boolean) => () => homeStore.setVisible(visible);

    render() {
        return (

            <div style={{display:'flex',height: '100vh'}}>
                    <div style={{
                        width:'65%',
                        backgroundSize:'cover',
                        backgroundPosition:'center top',
                        boxShadow:'inset 0 0 0 1000px rgba(20, 5, 30,0.8)',
                        backgroundImage:"url(https://pixabay.com/get/e83db30d2cf1063ed1534705fb094e91eb77ead51cac104497f4c479a0e5b2ba/the-device-1822457_1920.jpg)"}}>
                            <div style={{ fontFamily:'Ubuntu, sans-serif',paddingLeft:'15%',paddingTop:'15%', paddingRight:'15%', fontSize:'3.8em', color:'#b4d0e7'}}>Portál pro správu zdtravotnických zařízení</div>
                        <div style={{ fontFamily:'Ubuntu, sans-serif',paddingLeft:'15%',paddingTop:'1%', paddingRight:'15%', fontSize:'1.5em', color:'#b4d0e7'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div style={{width:'35%',height: '100vh',display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <div style={{
                            display: 'flex',
                            height:'100vh',
                            justifyContent: 'center',
                            flexDirection:'column',
                            paddingLeft: '15%',
                            paddingRight: '25%',
                            borderLeft: '1px solid #ccc',
                        }}>
                            {homeStore.visible && <SignIn changeMode={this.changeModeClickHandler}/>}
                            {!homeStore.visible && <Register changeMode={this.changeModeClickHandler}/>}
                            <div style={{
                                width:'170px',
                                marginTop: '25px',
                                height:'40px',
                                backgroundSize:'cover',
                                backgroundImage:"url(https://shop.medicton.com/img/logo-1.jpg?1520600426)"}}></div>
                        </div>
                    </div>
            </div>
        )
            ;
    }
}