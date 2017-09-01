import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './Header';
import Footer from './Footer';

import Radium, { StyleRoot } from 'radium';

class App extends Component {
 
  getStyles() {
    const styles = {
      root: { 

      }
    };
    return styles;
  }

  render() {
    const styles = this.getStyles();
    return (
        <div style={styles.root}>
          <Header />
          { this.props.children }
          <Footer />
        </div>
    );
  }
}



export default App;
