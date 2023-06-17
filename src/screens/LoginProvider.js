import {createContext, useContext, useState} from 'react';
import {View, Text} from 'react-native';
const LoginContext = createContext();

const LoginProvider = ({children}) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [UserIsSignedIn, SetUserIsSignedIn] = React.useState(false);
  
  React.useEffect(() => {
    isUserLogined();
  }, []);

  const isUserLogined = async () => {
    const logined = await AsyncStorage.getItem('itemList');
    if (logined) {
      SetUserIsSignedIn(true);
    }
  };

  return (
    <LoginContext.Provider value={{UserIsSignedIn, SetUserIsSignedIn}}>
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);
export default LoginProvider;
