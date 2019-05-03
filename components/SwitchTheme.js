import React from  'react';
import { Consumer } from '../src/ThemeContext';

class SwitchTheme extends React.Component {
  render () {
    return (
      <Consumer>
        {context => (
          <button onClick={context.handleTheme} >Switch Theme</button>
        )}
      </Consumer>
    )
  }
}
export default SwitchTheme;