import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import _ from 'lodash';

import '../App.css';

class FeaturedPersonCard extends Component {

  render() {
    return (
      <Thumbnail className="Featured-card-image" src={this.props.user.picture.large} alt="242x200">
        <h3 className="Featured-card-name">{_.startCase(`${this.props.user.name.first} ${this.props.user.name.last}`)}</h3>
        <p className="Featured-card-bio">
          {this.props.user.bio}
        </p>
      </Thumbnail>
    );
  }
}

export default FeaturedPersonCard;
