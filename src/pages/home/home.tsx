import * as React from 'react';
import {SignIn, Register} from './components';
import {observer} from "mobx-react";
import homeStore from '../../stores/home';

@observer
export class Home extends React.Component<{}, {}> {
    private changeModeClickHandler = (visible: boolean) => () => homeStore.setVisible(visible);
    public array:string;
    componentDidMount() {
        this.setState({ isLoading: true });

        fetch("http://localhost:8088/medicton/faqs")
            .then(response => response.json())
            .then(data =>{this.array= data.json() });
    }
    render() {
        return (
            <div>
                <h1>home</h1>

                {homeStore.visible && <SignIn changeMode={this.changeModeClickHandler}/>}
                {!homeStore.visible && <Register changeMode={this.changeModeClickHandler}/>}



            </div>
        )
            ;
    }
}