import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class FeedbackScreen extends React.Component {
  increaseLikes = () => {
    db.collection('Likes').add({
      Name: this.state.name + ' Has Liked Your app',
      Likes: this.state.likes + 1,
      Date: firebase.firestore.Timestamp.now().toDate(),
    });
    alert('Thank You For Submitting Your Feedback');
  }
  constructor(props) {
    super(props);
    this.state = {
      feedbackBox: '',
      name: '',
      email: '',
      likes: '0',
      dislikes: '0',
    };
  }
  showReason1 = () => {
    alert(
      'In this screen, you can give me some feedback or opinion. In the first field, you can write your feedback or opinion and if I will love your opinion so I will definitely use your idea in the app. In the second field, you have to write your email so that if I will love your opinion, then I can inform you that I will use your idea in the app.If you want, you can skip it. In the third field, you have to write your name. None of your personal data used by the app will be misused or exported somewhere. Hope you will love the app.'
    );
  };
  submitFeedback = () => {
    db.collection('Feedback').add({
      feedbackBox: this.state.feedbackBox,
      name: this.state.name,
      email: this.state.email,
      date: firebase.firestore.Timestamp.now().toDate(),
    });
    this.setState({
      feedbackBox: '',
      name: '',
      email: '',
    });
    alert('Thank you for submitting your feedback.');
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue', border: 'dashed' }}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}> Barter System App </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showReason1}>
          <Image
            style={styles.imageIcon}
            source={{
              uri:
                'http://www.netanimations.net/Animated-gif-spinning-question-mark-picture-moving.gif',
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.feedbackBox}
          placeholder="Write your feedback or opinion here."
          placeholderTextColor="black"
          value={this.state.feedbackBox}
          onChangeText={(text) => this.setState({ feedbackBox: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write your e-mail id here."
          placeholderTextColor="black"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write your name here."
          placeholderTextColor="black"
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <TouchableOpacity onPress={this.increaseLikes,this.submitFeedback}>
          <Image
            style={styles.likeButton}
            source={require('../assets/like.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    flex: 1,
    backgroundColor: 'blue',
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
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  feedbackBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'lightblue',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 25,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'lightblue',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  imageIcon: {
    width: 25,
    height: 45,
    marginLeft: 300,
    marginTop: -47,
  },
  likeButton: {
    width: 70,
    height: 70,
    marginTop: 10,
    alignSelf: "center"
  },
});