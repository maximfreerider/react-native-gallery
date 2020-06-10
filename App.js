/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/store';
import ListOfPhotos from './component/ListOfPhotos';


const store = ConfigureStore()

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
          <ListOfPhotos />
      </Provider>
    </>
  );
}

export default App;
