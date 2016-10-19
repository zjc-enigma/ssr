import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class Test extends Component {
  render() {
    return(
        <div>
        <h2>hi</h2>
        <MuiThemeProvider>
        <RaisedButton label={"hehehe"} onClick={() => console.dir(this.props)}/>
        </MuiThemeProvider>
        </div>
    )
  }
}
export default Test
