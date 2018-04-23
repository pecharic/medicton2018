import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

interface SignInProps {
    changeMode(visible: boolean): any;
}

export class Register extends React.Component<SignInProps, {}> {
    constructor(props: SignInProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Registrovat se</h2>
                <div style={{ fontSize:'0.7em', color: '#0061ff',cursor: 'pointer'}} onClick={this.props.changeMode(true)}>Přihlásit se</div>

                <TextField
                    hintText="Jmeno"
                    floatingLabelText="Jmeno"
                    type="text"
                    name="Username"
                    style={{width:'100%'}}
                    //onChange={this.handleChange.bind(this)}
                />
                <br/>
                <TextField
                    hintText="E-mail"
                    floatingLabelText="E-mail"
                    type="text"
                    name="Username"
                    style={{width:'100%'}}
                    //onChange={this.handleChange.bind(this)}
                />
                <br/>
                <TextField
                    hintText="Telefon"
                    floatingLabelText="Telefon"
                    type="text"
                    name="Username"
                    style={{width:'100%'}}
                    //onChange={this.handleChange.bind(this)}
                />
                <br/>
                <RaisedButton style={{marginTop:'20px', width:'100%'}} label="Registrovat se" primary={true} /*onClick={this.handleSubmit.bind(this)}*/     />

            </div>
        )
            ;
    }
}