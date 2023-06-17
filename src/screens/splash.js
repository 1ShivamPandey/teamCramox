import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import splashImage from '../assets/Icons/bottomNav/Home.png';
import Tabs from '../components/Navigation/bottomNavigation/Tabs';
import {ScrollView} from 'react-native-gesture-handler';
//import Stack from '../components/Navigation/Stack';
//import Login from './Login';
//import { useNavigation } from '@react-navigation/native';

export class Splash extends Component {
  // constructor(props) {
  //   super(props);

  //   setTimeout(() => {
  //     {
  //       this.props.navigation.navigate('Login');
  //     }
  //   }, 5000);
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     {
  //       history.push('./Login');
  //     }
  //   }, 5000);
  // }

  // componentDidMount(){
  //     let tID = setTimeout(function () {
  //         window.location.href = "https://www.encodedna.com/javascript/operators/default.htm";
  //         window.clearTimeout(tID);		// clear time out.
  //     }, 5000);
  // }

  // componentDidMount(){
  // //  const navigation = useNavigation();
  // setTimeout(() => {
  //   {
  //     this.props.navigation.navigate('Login');
  //   }
  // }, 5000);
  // }
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }

  render() {
    setTimeout(() => {
      this.setState({timePassed: true});
    }, 2500);
    if (this.state.timePassed) {
      return <Tabs />;
    }

    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View>
          <Image style={styles.splashImage} source={splashImage} />
          <Text style={styles.splashText}>ᴄʀᴀᴍᴏx</Text>
          <Text style={{textAlign:'center'}}>ᴍᴏꜱᴛ ᴄᴜʀᴀᴛᴇᴅ ᴄʟᴜʙ !</Text>

        </View>
      </ScrollView>
    );
  }
}
export default Splash;

const styles = StyleSheet.create({
  //   backgroundColor: {
  //     backgroundColor: 'purple',
  //     flexDirection:'column',
  // align
  //   },
  splashImage: {
    marginTop: 270,
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
    letterSpacing:5,
    fontWeight:"400",
    
  },
});
