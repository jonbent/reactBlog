import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import App from '../imports/ui/App'
import NewPost from '../imports/ui/NewPost'

injectTapEventPlugin();

Meteor.startup(() => {
  render((
    <div>
      <Router>
        <Route path='/new' component={NewPost} />
      </Router>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </div>
  ), document.getElementById('render-target'))

});
