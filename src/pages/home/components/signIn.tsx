import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class SignIn extends React.Component<{}, {}>{
    constructor(props:any){
        super(props);
    }
    render() {
        return (
            <div>

                <TextField
                    hintText="E-mail"
                    floatingLabelText="E-mail"
                    type="text"
                    name="Username"
                    //onChange={this.handleChange.bind(this)}
                />
                <br />
                <TextField
                    hintText="Heslo"
                    floatingLabelText="Heslo"
                    type="password"
                    name="Password"
                    //onChange={this.handleChange.bind(this)}
                />
                <br/>
                <RaisedButton label="Přihlásit se" primary={true} /*onClick={this.handleSubmit.bind(this)}*/     />
            </div>
        )
            ;
    }
}