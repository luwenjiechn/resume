import React, { Component } from "react";
// import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";

class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="My AppBar" />
      </MuiThemeProvider>
    );
  }
}

export default Layout;
