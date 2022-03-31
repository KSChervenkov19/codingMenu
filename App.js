import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
    const editSite = `
    let selector = document.querySelector(".footer");

    let footerText = "<div id='child'>ㅤㅤ© 2020 - Have fun eating :)</div>"
    selector.innerHTML = footerText;
    true;
    `;
    return(
      <WebView
        source={{ uri: "https://menu.codingburgas.bg" }}
        style={{ marginTop: 20 }}
        onLoad={() => {
          return (
            <View>
              <Text>Loading...</Text>
            </View>
          );
        }}
        injectedJavaScript={editSite}
      />
    );
};

export default App;
