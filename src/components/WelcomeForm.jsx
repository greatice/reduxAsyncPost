import React, {Component} from 'react';
import {getWelcomeAsync ,addWelcomeAsync} from '../actions/welcomeActions';

class WelcomeForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            content:'',
        }
    }

    // onWelcomeFormSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.dispatch(addWelcome(this.state.author, this.state.content));
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addWelcomeAsync(this.state.author,this.state.content))
                  .then(()=>this.props.dispatch(getWelcomeAsync())).then(()=>console.log())
      }

    onAuthorChange = (e) => {
        this.setState({author:e.target.value});
    }

    onContentChange = (e) => {
        this.setState({content:e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Author:
                    <input type="text" name="author" value={this.state.author} onChange={this.onAuthorChange}/>
                </label>
                <label>
                    Content:
                    <input type="text" name="content" value={this.state.content} onChange={this.onContentChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default WelcomeForm;