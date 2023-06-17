import {transform} from '@babel/core';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import profile_Icon from '../assets/Icons/bottomNav/Profile_Icon2.png';
import search_Icon from '../assets/Icons/bottomNav/search_Icon.png';
import unacademy from '../assets/Icons/bottomNav/unacademy.jpeg';
import cred from '../assets/Icons/bottomNav/cred.png';
import zepto from '../assets/Icons/bottomNav/zepto.jpg';
import Loan from '../assets/Icons/bottomNav/Loan.png';
import Invest from '../assets/Icons/bottomNav/Invest.png';
import RazorpayCheckout from 'react-native-razorpay';
import ProductLook from '../components/ProductLook';
import CartFotter from '../components/Global/Buttons/CartFotter';
import PlusMinusBtn from '../components/Global/Buttons/PlusMinusBtn';
import Container from '../components/Global/Container/Container';
export class Home extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     timePassed: false,
  //   };
  // }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     mydate:new Date(),
  //   };
  
  // }

  // componentDidMount(){
  // if (date < 12) {
  //   console.log('good morning')
  // } else if (date < 18) {
  //   console.log('good afternoon')
  // } else {
  //   console.log('good evening')
  // }
  // }

  // daytimer(){
  //   this.setState({
  //     date:{}
  //   })
  // }

  constructor(props) {
    super(props);

    var today = new Date(),
      time = today.getHours();

    var daytimer = function () {
      if (time < 12) {
        return 'Good morning 🌅';
      } else if (time < 18) {
        return 'Good afternoon 👏';
      } else {
        return 'Good evening 🌇';
      }
    };

    var timer = daytimer();
    this.state = {
      mydate: timer,
    };
  }

  render() {
    // setTimeout(() => {
    //   this.setState({timePassed: true});
    // }, 2000);
    // if (!this.state.timePassed) {
    //   return <Splash />;
    // }

    // timer(() => {
    //   this.setState(...this.state.mydate);
    // });
    // if (this.state.mydate < 12) {
    //   return 'good morning';
    // } else if (this.state.mydate < 18) {
    //   return 'good afternoon';
    // } else {
    //   return 'good evening';
    // }

    const {navigation} = this.props;

    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <StatusBar backgroundColor="black"></StatusBar>
        <View style={styles.backgroundColor}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={profile_Icon} style={styles.profile_Icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Image
                source={search_Icon}
                style={{margin: 10, height: 40, width: 40}}
              />
            </TouchableOpacity>
          </View>

          <Text style={{margin: 10, color: 'grey', fontSize: 20}}>
            {this.state.mydate} !
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Bro')}>
          <Text style={styles.tagline}>ᴡᴀɴɴᴀ ɪɴᴠᴇꜱᴛ ɪɴ ꜱᴛᴀʀᴛᴜᴘꜱ ?</Text>
          </TouchableOpacity>
          {/* <Text style={styles.tagline}>ᴡᴀɴɴᴀ ?</Text> */}

          <View style={styles.posterContainer}>
            <Text style={styles.posterContainerText}>
              𝕭𝖊 𝖙𝖍𝖊 𝖓𝖊𝖝𝖙 𝖆𝖓𝖌𝖑𝖊 𝖋𝖔𝖗 𝖙𝖍𝖊 𝖓𝖊𝖝𝖙 𝖘𝖙𝖆𝖗𝖙𝖚𝖕 🦄 !
            </Text>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.equityOffers}>
                <View
                  style={{
                    marginLeft: 2,
                    marginTop: 20,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    height: 30,
                    width: 70,
                    paddingTop: 5,
                    paddingLeft: 6,
                    paddingBottom: 1,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <Image style={{height: 20, width: 20}} source={Loan} />
                    <Text style={{color: 'black'}}>Debt</Text>
                  </View>
                </View>

                <View
                  style={{
                    marginLeft: 20,
                    marginTop: 20,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    height: 30,
                    width: 70,
                    paddingTop: 5,
                    paddingBottom: 1,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <Image style={{height: 20, width: 20}} source={Invest} />
                    <Text style={{color: 'black'}}>Equity</Text>
                  </View>
                </View>
              </View>
            </View>

            <View>
              <Image
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 50,
                  marginLeft: 180,
                }}
                source={cred}
              />
              <Image
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 50,
                  marginLeft: 210,
                }}
                source={zepto}
              />
              <Image
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 50,
                  marginLeft: 180,
                }}
                source={unacademy}
              />
            </View>
          </View>

          <TouchableOpacity style={{backgroundColor:'black',borderRadius:2,borderWidth:2,borderColor:'lightblue'}} onPress={()=>{navigation.navigate('Coupon')}}>
            <Text style={{color:'white'}}>Coupon Store</Text>
          </TouchableOpacity>

           <ProductLook name="shivam" title="2" />
          {/* <Container/> */}
          {/* <PlusMinusBtn/> */}

          {/* <CartFotter/> */}
        </View>
      </ScrollView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'black',
    flex: 1,
    alignSelf: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 20,
    marginTop: 200,
    marginLeft: 140,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile_Icon: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 100,
    margin: 10,
    height: 50,
  },
  tagline: {
    marginLeft: 10,
    color: '#F4F5FF',
    fontFamily: 'RoboMono',
    fontSize: 20,
  },
  posterContainer: {
    padding: 10,
    marginTop: 50,
    marginLeft: 40,
    marginRight: 50,
    backgroundColor: '#cf9378',
    height: 180,
    width: 280,
    borderRadius: 10,
  },
  posterContainerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  equityOffers: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: 30,
  },
});
