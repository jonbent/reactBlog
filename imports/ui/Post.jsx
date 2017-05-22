import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

export default class Post extends Component {
  render(){
    return(
      <ul className='row'>
        <li className='collection with-header'>
          <h5>
            <div className='left'>
              {this.props.post.title}
            </div>
          </h5>
          <div className='right'>
            {this.props.post.createdAt.toDateString()}
          </div>
        </li>
        <li className='collection-item'>
          {this.props.post.description}
        </li>


      </ul>
    )
  }
}
