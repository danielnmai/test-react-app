import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import CustomTextInput from './components/custom_text_input';

const API_KEY = 'AIzaSyDxA9yCsd_QbTC_ZP02KNm5mtdq8B0QRiE';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'},  (videos) => {
      this.setState({ videos });
      console.log(videos);
    })
  }
  render(){
    return (
    <div>
      <SearchBar />
      {/* <VideoList videos = {this.state.videos}/> */}
      <CustomTextInput />
    </div>
  );
  }

}
ReactDOM.render(<App />, document.getElementById('root'));
