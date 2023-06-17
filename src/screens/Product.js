import {application, response} from 'express';
import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';
import icon from '../assets/Icons/bottomNav/Profile_Icon2.png';
export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  // componentDidMount(){
  //   async function apicall ()  {
  //   const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //   console.log(data)
  //   console.warn(data)
  //   return data;
  // }}

  componentDidMount() {
    this.apicall();
  }

  async apicall() {
    let jsonapi = await (await fetch('https://jsonplaceholder.typicode.com/todos/1/')).json()
    // let secondjsonapi = await jsonapi.json();
    // console.log(secondjsonapi.goldGrms);
    this.setState({data: jsonapi});
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //        .then(response => response.json())
  //        .then(json => console.log(json.id))

  //        // .then((responseJson)=>{
  //        //   alert(responseJson)
  //        // })
  //        .then(json => {
  //          this.setState({ data: json});
  //        });
  //    }
  render() {
    // const apbcn = async () => {
    //   fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    //     .then(json => this.setState({data: json}));
    // };

    // let a = apbcn();
    // a.then(data => console.log(data));

    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{margin: 5, flexDirection: 'row'}}>
            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>

            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>

            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>

            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Image
                source={icon}
                style={{height: 50, width: 50, flexDirection: 'row'}}></Image>
              <Text>Founder</Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: 'black',
            margin: 20,
            height: 200,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              paddingLeft: 100,
              paddingBottom: 50,
            }}>
            Net worth
          </Text>
        </View>
        <Text style={{color: 'black'}}>{this.state.data.id}</Text>
        <Text style={{color: 'red'}}>{this.state.data.title}</Text>
      </View>
    );
  }
}
