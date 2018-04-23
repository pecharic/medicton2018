import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {LoginStore} from '../../../stores/login';
import {observer} from "mobx-react";
import CircularProgress from 'material-ui/CircularProgress';

interface SignInProps {
    changeMode(visible: false): any;
}

@observer
export class SignIn extends React.Component<SignInProps, {}> {
    constructor(props: SignInProps) {
        super(props);
    }

    public store: LoginStore = new LoginStore();
    handleOnChange = (e: React.FormEvent<HTMLInputElement>) => this.store[e.currentTarget.name] = e.currentTarget.value;

    render() {
        return (
                 <div>
                     <h2>Přihlási se</h2>
                     <div style={{ fontSize:'0.7em', color: '#0061ff',cursor: 'pointer'}}  onClick={this.props.changeMode(false)}>Chci se zaregistrovat</div>
                        <TextField
                            hintText="E-mail"
                            floatingLabelText="E-mail"
                            type="text"
                            name="Username"
                            style={{width:'100%'}}
                            errorText={this.store.LoginFailed && "Neplatné jméno"}
                            disabled={this.store.IsBusy}
                            onChange={this.handleOnChange}
                        />
                        <br/>
                        <TextField
                            hintText="Heslo"
                            floatingLabelText="Heslo"
                            type="password"
                            name="Password"
                            style={{width:'100%'}}
                            errorText={this.store.LoginFailed && "Neplatné heslo"}
                            disabled={this.store.IsBusy}
                            onChange={this.handleOnChange}
                        />

                        <br/>
                     <div>
                     {this.store.IsBusy
                         ? <div style={{display:'flex', justifyContent:'center'}}><CircularProgress size={40} thickness={5} style={{ marginTop: '20px' }} /></div>
                         : <div> < RaisedButton style={{marginTop:'20px', width:'100%'}} label="Přihlásit se" disabled={this.store.IsBusy} primary={true} onClick={this.store.Login}/>
                            </div>
                     }
                     </div>
                     <br/>
                    </div>




        )
            ;
    }
}