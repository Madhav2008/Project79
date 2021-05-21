import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

export default class WelcomeScreen extends React.Component {
  showReason1 = () => {
    alert(
      'This is a barter system app. So, in the age of the internet, everyone is connected with each other using internet and it is easy to share information with everyone. What if we could share our physical belongings just as easily as we share information! So, I am making a Barter System App in which till now I have created some tabs in which users can request or donate some item or they can give me feedback. Click on different tabs to see the app. In the second tab, you can exchange some item with someone who is requesting something. In the thirs field, you can request for some item. In the last field, you can give me some opinion or feedback or review. Hope you will love the app. - Charvi Kashyap'
    );
  };
  render() {
    return (
     <View style={{ flex: 1, backgroundColor: 'blue', border: 'dashed' }}>
        <Text style={styles.header}>
          <u>
            <b> Barter System App </b>
          </u>
        </Text>
        <TouchableOpacity onPress={this.showReason1}>
          <Image
            style={styles.imageIcon}
            source={{
              uri:
                'http://www.netanimations.net/Animated-gif-spinning-question-mark-picture-moving.gif',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.intro}>
          In the age of the internet, everyone is connected with each other
          using internet and it is easy to share information with everyone. What
          if we could share our physical belongings just as easily as we share
          information! So, I am making a Barter System App in which till now I
          have created some tabs in which users can request or donate some item
          or they can give me feedback. Click on different tabs to see the app.
          Don't forgot to give me the feedback.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allData: {
    backgroundColor: 'blue',
    flex: 1,
  },
  header: {
    fontFamily: 'Footlight Mt Light',
    fontSize: 30,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'gold',
    margin: 5,
    border: 'dashed',
  },
  intro: {
    backgroundColor: 'gold',
    fontFamily: 'Footlight Mt Light',
    marginTop: 30,
    margin: 10,
    padding: 5,
    fontSize: 20,
    border: 'dashed',
  },
  imageIcon: {
    width: 25,
    height: 45,
    marginLeft: 300,
    marginTop: -47,
  },
});