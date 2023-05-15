/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {CartContextProvider} from "./src/Utils/Context/cartContext";


function  Index(){

    return (
        <CartContextProvider>
        <App/>
        </CartContextProvider>
    )
}


AppRegistry.registerComponent(appName,() => Index);
