import React, { Component } from 'react';
import '../App.css';

class UserGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "",
      hover: ""
    }
  }

  getHoverState(index) {
    if(this.state.hover - 1 === index || this.state.hover + 1 === index){
      return "sibling";
    } else if(this.state.hover === index) {
      return "current";
    }
    return "";
  }

  onHover(index){
    this.setState({hover: index});
  }

  onMouseOut(){
    this.setState({hover: ""});
  }

  render() {
    var users = this.props.users.map((u, i) =>
      <img
        className={"User-grid-thumbnail " + this.getHoverState(i)}
        src={u.picture.medium}
        index={i}
        key={i}
        onClick={this.props.showMoreUserInfo.bind(this, i)}
        onMouseOver={this.onHover.bind(this, i)}
        />
    );
		return (
      <div className="User-grid" onMouseOut={this.onMouseOut.bind(this)}>
        {users}
      </div>
    );
  }
}

export default UserGrid;
