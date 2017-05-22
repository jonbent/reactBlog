import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

export default class Post extends Component {
  render(){
    return(
      <div className='row'>
        <div className='col s8 left'>
          {this.props.post.title}
        </div>
        <div className='col s4 right'>
          {this.props.post.title}
        </div>
        <div className='col s12'>
          {this.props.post.description}
        </div>


      </div>
    )
  }
}
