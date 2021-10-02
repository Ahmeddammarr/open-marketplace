import React from 'react';
//import {render,waitFor} from '@testing-library/react-native';
import {Text} from 'react-native'
import App from '../src/App';
import {render,waitFor} from '@testing-library/react-native';
test('examples of some things', async () => {
  const childs = await waitFor(() => render(<App/>))
  expect(childs).toBeTruthy();
 
})