import React, { Component } from 'react';
import fetch from 'node-fetch';
import LoremIpsum from 'lorem-ipsum';
import UserGrid from './components/UserGrid';
import FeaturedPersonCardRow from './components/FeaturedPersonCardRow';
import logo from './fff.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      featuredUserIndexes: [0, 1, 2]
    };
  }

  componentDidMount() {
    // Get random users
    fetch('https://randomuser.me/api/?results=30&nat=us', {
      dataType: 'json',
    })
    .then(result => result.json())
    .then(result => {
      result.results = result.results.map(u => { u.bio = LoremIpsum({
        count: 2,
        sentenceLowerBound: 10,
        sentenceUpperBound: 10
    }); return u; })
      this.setState({users: result.results});
    });
  }

  showMoreUserInfo(index) {
    console.log(index);
    let shortenedList = this.state.featuredUserIndexes;

    // If user is already selected, do nothing
    if(this.state.featuredUserIndexes[0] === index)
      return;

    this.setState({
      featuredUserIndexes: [
        index,
        ...shortenedList,
      ]
    }, () => {
      // Continue to next featured user card
      this.slider.slickNext();
    })
  }

  setSliderRef(ref) {
    this.slider = ref;
  }

  render() {
    return (
      <div className="App">
        {(this.state.users.length < 1) ? (
          <p>Loading...</p>
        ) :
        <div>
          <header className="App-header">
            <FeaturedPersonCardRow setSlider={this.setSliderRef.bind(this)} users={this.state.users} featuredUsers={this.state.featuredUserIndexes} />
          </header>
          <UserGrid users={this.state.users} showMoreUserInfo={this.showMoreUserInfo.bind(this)}/>
        </div>
        }
      </div>
    );
  }
}

export default App;
