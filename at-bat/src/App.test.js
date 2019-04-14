import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'jest-dom/extend-expect';
import {render} from 'react-testing-library'
import waitForExpect from 'wait-for-expect';
// import { isMainThread } from 'worker_threads';


//skipped
xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//app rendering without crashing
it('renders without crashing', () => {
  render(<App />);
})


//test to see if APP.JS renders "hello world" properly
it('displays hello world', () => {
  const { getByText } = render(<App/>);
  const text = getByText(/Hello Batters!!!/i)
  //in order to use this expect we need to expand on it with jest-dom
  expect(text).toBeInTheDocument();
})


