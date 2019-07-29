import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { getUserInfo } from '../selectors/selector';
import { login } from '../actions/actionCreator';
import { bindActionCreators } from 'redux';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedIn: true
        };
    }
    onChange(event) {
        if(event.target.name === `email`) {
            this.setState({
                email: event.target.value,
            });
        } else {
            this.setState({
                password: event.target.value,
            });
        }
    }
    async onFormSubmit (event) {
        // console.log(getStore());
        event.persist();
        const info = await getUserInfo(this.state);
        if(info) {
            this.props.login(info);
            this.setState({
                email: '',
                password: '',
                loggedIn: true
            })
            this.props.route.history.push('/');
            // console.log(getStore());
        } else {
            this.setState({
                email: '',
                password: '',
                loggedIn: false
            })
        }
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={(e) => this.onFormSubmit(e)}>
                <TextField
                    name="email" 
                    type="text"
                    value={this.state.email} 
                    onChange={(e) => this.onChange(e)}
                    label="Email"
                    margin="normal"
                />
                <br/>
                <TextField
                    name="password"  
                    value={this.state.password} 
                    onChange={(e) => this.onChange(e)}
                    label="Password"
                    type="password"
                    margin="normal"
                />
                <br/>
                <Button variant="contained" color="primary" onClick={(e) => this.onFormSubmit(e)}>
                    Login
                </Button>
                <Button variant="contained" color="primary" onClick={(e) => this.onFormSubmit(e)}>
                    Reset
                </Button>
            </form>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginForm)
