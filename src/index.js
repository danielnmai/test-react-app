import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDxA9yCsd_QbTC_ZP02KNm5mtdq8B0QRiE';
YTSearch({key: API_KEY, term: 'surfboards'},  (videos) => {
  this.setState({ videos });
})
class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };
  }
  render(){
    return (
    <div>
      <SearchBar />
    </div>
  );
  }

}
ReactDOM.render(<App />, document.getElementById('root'));
