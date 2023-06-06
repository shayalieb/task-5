import { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button, Alert, ScrollView } from "react-native";

const App = () => {
  const [text, setText] = useState('');

  //Alert function for when the button is pressed
  const alertMyText = () => {
    Alert.alert(text)
  }

  return (
    //Setting the text input state
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder='type something here'
      />
      <Text style={styles.textDisplay}>You wrote: {text}</Text>
      <Button
        onPress={() => {
          alertMyText();
        }}
        title="Press Me"
      />
      <ScrollView>
        <Text style={{ fontSize: 25 }}>This text is bigger than your text, on min you have to scroll to view!</Text>
      </ScrollView>
    </View>
  );
}
//Styling the text input with StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '88%',
    borderWidth: 1,
    height: 50,
    padding: 10,
  },
  textDisplay: {
    height: 50,
    lineHeight: 50
  },
});

export default App;