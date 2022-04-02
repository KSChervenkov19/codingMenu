import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import * as Notifications from "expo-notifications";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const editSite = `
    let selector = document.querySelector(".footer");
    let footerText = "<div id='child'>ㅤㅤ© 2020 - Have fun eating :)</div>"
    selector.innerHTML = footerText;
    true;
    `;

  return (
    <>
      {!loaded && (
        <SafeAreaView style={styles.loadingTextView}>
          <Text style={styles.loadingText}>
            Loading...
          </Text>
        </SafeAreaView>
      )}

      <WebView
        source={{ uri: "https://menu.codingburgas.bg" }}
        style={{ marginTop: 20 }}
        onLoadEnd={() => {
          setLoaded(true);
        }}
        onLoadStart={() => {
          setLoaded(false);
        }}
        injectedJavaScript={editSite}
      />
    </>
  );
};

const styles = StyleSheet.create({
  loadingTextView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#000000",
    textTransform: "uppercase",
    marginTop: "80%",
  },
});

export default App;
