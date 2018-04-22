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

                <TextField
                    hintText="Jmeno"
                    floatingLabelText="Jmeno"
                    type="text"
                    name="Username"
                    //onChange={this.handleChange.bind(this)}
                />
                <br/>
                <TextField
                    hintText="E-mail"
                    floatingLabelText="E-mail"
                    type="text"
                    name="Username"
                    //onChange={this.handleChange.bind(this)}
                />
                <TextField
                    hintText="Telefon"
                    floatingLabelText="Telefon"
                    type="text"
                    name="Username"
                    //onChange={this.handleChange.bind(this)}
                />
                <br/>
                <RaisedButton label="Registrovat se" primary={true} /*onClick={this.handleSubmit.bind(this)}*/     />
                <RaisedButton label="Chci se prihlasit mam ucet" onClick={this.props.changeMode(true)}/>
            </div>
        )
            ;
    }
}