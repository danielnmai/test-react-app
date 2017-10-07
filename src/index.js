import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDxA9yCsd_QbTC_ZP02KNm5mtdq8B0QRiE';
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
);
}
ReactDOM.render(<App />, document.getElementById('root'));
