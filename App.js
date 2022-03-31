import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

class App extends Component {
  render() {
    const runFirst = `
    let selector = document.querySelector(".footer");

    let demo_1 = "<div id='child'>© 2020 - Have fun eating</div>"
    selector.innerHTML = demo_1;
      true;
    `;
    return(
      <WebView
        source={{ uri: "https://menu.codingburgas.bg" }}
        style={{ marginTop: 20 }}
        onMessage={(event) => {}}
        injectedJavaScript={runFirst}
      />
    );
  }
};

export default App;
