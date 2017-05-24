import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  button: {
    margin:12,
  }
}

export default class Post extends Component {

  showEditForm() {
    this.props.showEditForm();
  }

  render(){
    const post = this.props.post;
    return(
      <ul className='collection with-header'>
        <li className='collection-item'>
          <div className='row'>
            <div className='col s8 left'>
              <h5>
                {post.title}
              </h5>
            </div>
            <div className='col s4 right'>
              {post.createdAt.toDateString()}
            </div>
            {this.props.post.owner === Meteor.userId() &&
              <div className='col s4 right'>
                <RaisedButton
                label='edit'
                labelPosition = 'before'
                style={styles.button}
                onClick={this.showEditForm.bind(this)}/>
              </div>
            } 
          </div>
        </li>
        <li className='collection-item'>
          <div className='row'>
            <div className='col s12'>
              {post.description}
            </div>
          </div>
        </li>
      </ul>
    )
  }
}
