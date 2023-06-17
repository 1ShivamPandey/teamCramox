import React, {Component} from 'react';
import {Touchable, View} from 'react-native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Search from '../../screens/Search';
import Register from '../../screens/Register';
import Product from '../../screens/Product';
import Login from '../../screens/Login';
import Logout from '../../screens/Logout';
import Checkout from '../../screens/Cart/Checkout';
import Paymentsuccess from '../../screens/Cart/Paymentsuccess';
import Map from '../../screens/Map/Map';
import Home2 from '../../screens/Authsystem/Home2';
import Login2 from '../../screens/Authsystem/Login2';
import Authcheck from '../../screens/Authsystem/Authcheck';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../../screens/splash';
import Coupon from '../../screens/CouponStore/Coupon';
const Stacks = createStackNavigator();
const Stacks2 = createStackNavigator();

const Stack = () => {
  const [UserIsSignedIn, SetUserIsSignedIn] = React.useState(false);

  const isUserLogined = async () => {
    const logined = await AsyncStorage.getItem('itemList');
    if (logined) {
      SetUserIsSignedIn(true);
    }
  };

  React.useEffect(() => {
    isUserLogined();
  }, []);
  // if (UserIsSignedIn.isLoading) {
  //   return <Home />;
  // }

  // const Rendermenu = () => {
  //   if (UserIsSignedIn === true) {
  //     return (
  //       <>
  //         <Stacks.Navigator>
  //           {/* {UserIsSignedIn === true ? (
  //   <Stacks.Screen
  //     name="Home"
  //     component={Home}
  //     options={{headerShown: false}}
  //   />
  // ) : (
  //   <Stacks.Screen
  //     name="Login"
  //     component={Login}
  //     options={{headerShown: false}}
  //   />
  // )} */}

  //           {/* <Stacks.Screen
  //   name="Authcheck"
  //   component={Authcheck}
  //   options={{headerShown: false}}
  // />

  // <Stacks.Screen
  //   name="Home"
  //   component={Home}
  //   options={{headerShown: false}}
  // />

  // <Stacks.Screen
  //   name="Login"
  //   component={Login}
  //   options={{headerShown: false}}
  // /> */}
  //           <Stacks.Screen
  //             name="Home"
  //             component={Home}
  //             options={{headerShown: false}}
  //           />

  //           <Stacks.Screen
  //             name="Search"
  //             component={Search}
  //             options={{headerShown: false}}
  //           />
  //           <Stacks.Screen
  //             name="Profile"
  //             component={Profile}
  //             options={{headerShown: false}}
  //           />
  //           <Stacks.Screen
  //             name="Register"
  //             component={Register}
  //             options={{headerShown: false}}
  //           />
  //           <Stacks.Screen
  //             name="Product"
  //             component={Product}
  //             options={{headerShown: false}}
  //           />
  //           {/* <Stacks.Screen
  //             name="Home"
  //            component={Home}
  //             options={{headerShown: false}}
  //         /> */}

  //           <Stacks.Screen
  //             name="Logout"
  //             component={Logout}
  //             options={{headerShown: false}}
  //           />
  //           <Stacks.Screen
  //             name="Checkout"
  //             component={Checkout}
  //             // options={{headerShown: false}}
  //             options={{
  //               headerStyle: {
  //                 backgroundColor: 'black',
  //                 elevation: 100,
  //               },
  //               headerTintColor: 'white',
  //             }}
  //           />
  //           <Stacks.Screen
  //             name="Paymentsuccess"
  //             component={Paymentsuccess}
  //             options={{headerShown: false}}
  //             // options={{
  //             //   headerStyle: {
  //             //     backgroundColor: 'white',
  //             //     elevation: 100,
  //             //   },
  //             //   headerTintColor: 'white',

  //             // }}
  //           />

  //           <Stacks.Screen
  //             name="Map"
  //             component={Map}
  //             options={{headerShown: false}}
  //           />

  //           <Stacks.Screen
  //             name="Coupon"
  //             component={Coupon}
  //             options={{
  //               headerStyle: {
  //                 backgroundColor: 'black',
  //                 elevation: 100,
  //               },
  //               headerTintColor: 'white',
  //             }}
  //             // options={{headerShown: false}}
  //           />
  //         </Stacks.Navigator>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Stacks.Navigator>
  //           <Stacks.Screen
  //             name="Login"
  //             component={Login}
  //             options={{headerShown: false}}
  //           />

  //           <Stacks.Screen
  //             name="Home"
  //             component={Home}
  //             options={{headerShown: false}}
  //           />

  //           <Stacks.Screen
  //             name="Search"
  //             component={Search}
  //             options={{headerShown: false}}
  //           />

  //           <Stacks.Screen
  //             name="Profile"
  //             component={Profile}
  //             options={{headerShown: false}}
  //           />
  //           <Stacks.Screen
  //             name="Register"
  //             component={Register}
  //             options={{headerShown: false}}
  //           />
  //           <Stacks.Screen
  //             name="Product"
  //             component={Product}
  //             options={{headerShown: false}}
  //           />
  //           {/* <Stacks.Screen
  //            name="Home"
  //            component={Home}
  //           options={{headerShown: false}}
  //          /> */}

  //           <Stacks.Screen
  //             name="Logout"
  //             component={Logout}
  //             options={{headerShown: false}}
  //           />
  //           <Stacks.Screen
  //             name="Checkout"
  //             component={Checkout}
  //             // options={{headerShown: false}}
  //             options={{
  //               headerStyle: {
  //                 backgroundColor: 'black',
  //                 elevation: 100,
  //               },
  //               headerTintColor: 'white',
  //             }}
  //           />
  //           <Stacks.Screen
  //             name="Paymentsuccess"
  //             component={Paymentsuccess}
  //             options={{headerShown: false}}
  //             // options={{
  //             //   headerStyle: {
  //             //     backgroundColor: 'white',
  //             //     elevation: 100,
  //             //   },
  //             //   headerTintColor: 'white',

  //             // }}
  //           />

  //           <Stacks.Screen
  //             name="Map"
  //             component={Map}
  //             options={{headerShown: false}}
  //           />

  //           <Stacks.Screen
  //             name="Coupon"
  //             component={Coupon}
  //             options={{
  //               headerStyle: {
  //                 backgroundColor: 'black',
  //                 elevation: 100,
  //               },
  //               headerTintColor: 'white',
  //             }}
  //             // options={{headerShown: false}}
  //           />
  //         </Stacks.Navigator>
  //       </>
  //     );
  //   }
  // };

  return (
    // <>
    // <Rendermenu/>
    // </>

    //   <Stacks.Navigator>
    //   {/* {UserIsSignedIn === true ? (
    //     <Stacks.Screen
    //       name="Home"
    //       component={Home}
    //       options={{headerShown: false}}
    //     />
    //   ) : (
    //     <Stacks.Screen
    //       name="Login"
    //       component={Login}
    //       options={{headerShown: false}}
    //     />
    //   )} */}

    //   {/* <Stacks.Screen
    //     name="Authcheck"
    //     component={Authcheck}
    //     options={{headerShown: false}}
    //   />

    //   <Stacks.Screen
    //     name="Home"
    //     component={Home}
    //     options={{headerShown: false}}
    //   />

    //   <Stacks.Screen
    //     name="Login"
    //     component={Login}
    //     options={{headerShown: false}}
    //   /> */}
    //    <Stacks.Screen
    //     name="Home"
    //     component={Home}
    //     options={{headerShown: false}}
    //   />

    //   <Stacks.Screen
    //     name="Login"
    //     component={Login}
    //     options={{headerShown: false}}
    //   />

    //   <Stacks.Screen
    //     name="Search"
    //     component={Search}
    //     options={{headerShown: false}}
    //   />
    //   <Stacks.Screen
    //     name="Profile"
    //     component={Profile}
    //     options={{headerShown: false}}
    //   />
    //   <Stacks.Screen
    //     name="Register"
    //     component={Register}
    //     options={{headerShown: false}}
    //   />
    //   <Stacks.Screen
    //     name="Product"
    //     component={Product}
    //     options={{headerShown: false}}
    //   />
    //   {/* <Stacks.Screen
    //     name="Home"
    //     component={Home}
    //     options={{headerShown: false}}
    //   /> */}

    //   <Stacks.Screen
    //     name="Logout"
    //     component={Logout}
    //     options={{headerShown: false}}
    //   />
    //   <Stacks.Screen
    //     name="Checkout"
    //     component={Checkout}
    //     // options={{headerShown: false}}
    //     options={{
    //       headerStyle: {
    //         backgroundColor: 'black',
    //         elevation: 100,
    //       },
    //       headerTintColor: 'white',
    //     }}
    //   />
    //   <Stacks.Screen
    //     name="Paymentsuccess"
    //     component={Paymentsuccess}
    //     options={{headerShown: false}}
    //     // options={{
    //     //   headerStyle: {
    //     //     backgroundColor: 'white',
    //     //     elevation: 100,
    //     //   },
    //     //   headerTintColor: 'white',

    //     // }}
    //   />

    //   <Stacks.Screen
    //     name="Map"
    //     component={Map}
    //     options={{headerShown: false}}
    //   />

    //     <Stacks.Screen
    //     name="Coupon"
    //     component={Coupon}
    //     options={{
    //       headerStyle: {
    //         backgroundColor: 'black',
    //         elevation: 100,
    //       },
    //       headerTintColor: 'white',
    //     }}
    //     // options={{headerShown: false}}
    //   />
    // </Stacks.Navigator>

    //   <>
    //     {UserIsSignedIn === true ? (
    //       <Stacks.Navigator>
    //         {/* {UserIsSignedIn === true ? (
    //   <Stacks.Screen
    //     name="Home"
    //     component={Home}
    //     options={{headerShown: false}}
    //   />
    // ) : (
    //   <Stacks.Screen
    //     name="Login"
    //     component={Login}
    //     options={{headerShown: false}}
    //   />
    // )} */}

    //         {/* <Stacks.Screen
    //   name="Authcheck"
    //   component={Authcheck}
    //   options={{headerShown: false}}
    // />

    // <Stacks.Screen
    //   name="Home"
    //   component={Home}
    //   options={{headerShown: false}}
    // />

    // <Stacks.Screen
    //   name="Login"
    //   component={Login}
    //   options={{headerShown: false}}
    // /> */}
    //         <Stacks.Screen
    //           name="Home"
    //           component={Home}
    //           options={{headerShown: false}}
    //         />

    //         <Stacks.Screen
    //           name="Login"
    //           component={Login}
    //           options={{headerShown: false}}
    //         />

    //         <Stacks.Screen
    //           name="Search"
    //           component={Search}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Profile"
    //           component={Profile}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Register"
    //           component={Register}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Product"
    //           component={Product}
    //           options={{headerShown: false}}
    //         />
    //         {/* <Stacks.Screen
    //   name="Home"
    //   component={Home}
    //   options={{headerShown: false}}
    // /> */}

    //         <Stacks.Screen
    //           name="Logout"
    //           component={Logout}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Checkout"
    //           component={Checkout}
    //           // options={{headerShown: false}}
    //           options={{
    //             headerStyle: {
    //               backgroundColor: 'black',
    //               elevation: 100,
    //             },
    //             headerTintColor: 'white',
    //           }}
    //         />
    //         <Stacks.Screen
    //           name="Paymentsuccess"
    //           component={Paymentsuccess}
    //           options={{headerShown: false}}
    //           // options={{
    //           //   headerStyle: {
    //           //     backgroundColor: 'white',
    //           //     elevation: 100,
    //           //   },
    //           //   headerTintColor: 'white',

    //           // }}
    //         />

    //         <Stacks.Screen
    //           name="Map"
    //           component={Map}
    //           options={{headerShown: false}}
    //         />

    //         <Stacks.Screen
    //           name="Coupon"
    //           component={Coupon}
    //           options={{
    //             headerStyle: {
    //               backgroundColor: 'black',
    //               elevation: 100,
    //             },
    //             headerTintColor: 'white',
    //           }}
    //           // options={{headerShown: false}}
    //         />
    //       </Stacks.Navigator>
    //     ) : (
    //       <Stacks.Navigator>
    //         {/* {UserIsSignedIn === true ? (
    //   <Stacks.Screen
    //     name="Home"
    //     component={Home}
    //     options={{headerShown: false}}
    //   />
    // ) : (
    //   <Stacks.Screen
    //     name="Login"
    //     component={Login}
    //     options={{headerShown: false}}
    //   />
    // )} */}

    //         {/* <Stacks.Screen
    //   name="Authcheck"
    //   component={Authcheck}
    //   options={{headerShown: false}}
    // />

    // <Stacks.Screen
    //   name="Home"
    //   component={Home}
    //   options={{headerShown: false}}
    // />

    // <Stacks.Screen
    //   name="Login"
    //   component={Login}
    //   options={{headerShown: false}}
    // /> */}
    //         {/* <Stacks.Screen
    //           name="Home"
    //           component={Home}
    //           options={{headerShown: false}}
    //         /> */}

    //         <Stacks.Screen
    //           name="Login"
    //           component={Login}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Home"
    //           component={Home}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Search"
    //           component={Search}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Profile"
    //           component={Profile}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Register"
    //           component={Register}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Product"
    //           component={Product}
    //           options={{headerShown: false}}
    //         />
    //         {/* <Stacks.Screen
    //   name="Home"
    //   component={Home}
    //   options={{headerShown: false}}
    // /> */}

    //         <Stacks.Screen
    //           name="Logout"
    //           component={Logout}
    //           options={{headerShown: false}}
    //         />
    //         <Stacks.Screen
    //           name="Checkout"
    //           component={Checkout}
    //           // options={{headerShown: false}}
    //           options={{
    //             headerStyle: {
    //               backgroundColor: 'black',
    //               elevation: 100,
    //             },
    //             headerTintColor: 'white',
    //           }}
    //         />
    //         <Stacks.Screen
    //           name="Paymentsuccess"
    //           component={Paymentsuccess}
    //           options={{headerShown: false}}
    //           // options={{
    //           //   headerStyle: {
    //           //     backgroundColor: 'white',
    //           //     elevation: 100,
    //           //   },
    //           //   headerTintColor: 'white',

    //           // }}
    //         />

    //         <Stacks.Screen
    //           name="Map"
    //           component={Map}
    //           options={{headerShown: false}}
    //         />

    //         <Stacks.Screen
    //           name="Coupon"
    //           component={Coupon}
    //           options={{
    //             headerStyle: {
    //               backgroundColor: 'black',
    //               elevation: 100,
    //             },
    //             headerTintColor: 'white',
    //           }}
    //           // options={{headerShown: false}}
    //         />
    //       </Stacks.Navigator>
    //     )}
    //   </>

    <Stacks.Navigator>
      {/* {UserIsSignedIn === true ? (
        <Stacks.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      ) : (
        <Stacks.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      )} */}

      {/* <Stacks.Screen
name="Authcheck"
component={Authcheck}
options={{headerShown: false}}
/>

<Stacks.Screen
name="Home"
component={Home}
options={{headerShown: false}}
/>

<Stacks.Screen
name="Login"
component={Login}
options={{headerShown: false}}
/> */}
      {/* <Stacks.Screen
  name="Home"
  component={Home}
  options={{headerShown: false}}
/> */}

      <Stacks.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stacks.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stacks.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stacks.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stacks.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stacks.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
      {/* <Stacks.Screen
name="Home"
component={Home}
options={{headerShown: false}}
/> */}

      <Stacks.Screen
        name="Logout"
        component={Logout}
        options={{headerShown: false}}
      />
      <Stacks.Screen
        name="Checkout"
        component={Checkout}
        // options={{headerShown: false}}
        options={{
          headerStyle: {
            backgroundColor: 'black',
            elevation: 100,
          },
          headerTintColor: 'white',
        }}
      />
      <Stacks.Screen
        name="Paymentsuccess"
        component={Paymentsuccess}
        options={{headerShown: false}}
        // options={{
        //   headerStyle: {
        //     backgroundColor: 'white',
        //     elevation: 100,
        //   },
        //   headerTintColor: 'white',

        // }}
      />

      <Stacks.Screen
        name="Map"
        component={Map}
        options={{headerShown: false}}
      />

      <Stacks.Screen
        name="Coupon"
        component={Coupon}
        options={{
          headerStyle: {
            backgroundColor: 'black',
            elevation: 100,
          },
          headerTintColor: 'white',
        }}
        // options={{headerShown: false}}
      />
    </Stacks.Navigator>
  );
};
export default Stack;
