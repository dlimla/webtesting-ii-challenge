import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'jest-dom/extend-expect';
import {render, fireEvent} from 'react-testing-library'
// import waitForExpect from 'wait-for-expect';
// import { isMainThread } from 'worker_threads';


//skipped
describe('the app', () => {

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

  it('should run the strike button', () => {
    const { getByText } = render(<App/>);
    const button = getByText(/strike/i);
    fireEvent.click(button);
    getByText(/\d/i);
  })

  it('should run the ball button', () => {
    const { getByText } = render(<App/>);
    const button = getByText(/ball/i);
    fireEvent.click(button);
    getByText(/\d/i);
  })

  
  it('should run the foul button', () => {
    const { getByText } = render(<App/>);
    const button = getByText(/foul/i);
    fireEvent.click(button);
    getByText(/\d/i);
  })
  
  it('should run the hit button', () => {
    const { getByText } = render(<App/>);
    const button = getByText(/hit/i);
    fireEvent.click(button);
    getByText(/\d/i);
  })
})
  
  