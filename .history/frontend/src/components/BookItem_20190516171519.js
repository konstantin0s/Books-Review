import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      imgUrl: '',
      author: '',
      isLoaded: false
     }
  }

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { featured_media, author } = this.props.book;
    const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

    Promise.all([getImageUrl, getAuthor])
    .then(res => {
      this.setState({
imgUrl: res[0].data.media_details.sizes.full.source_url,
author: res[1].data.name,
isLoaded: true
      })
    })
  }

  render() { 
    const { title, excerpt } = this.props.book;
    const { author, imgUrl, isLoaded} = this.state;
    
    if (isLoaded) {
      return ( 
        <div>
          <h2>
          {title.rendered}
    <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
          </h2>
        </div>
         );
    }
    return null;

  }
}
 
export default BookItem;