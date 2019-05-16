import React, { Component } from 'react';
import axios from 'axios';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      isLoaded: false
     }
  }

  componentDidMount() {
    axios.get('/wp-json/wp/v2/books')
    .then(res => this.setState({ books: res.data, isLoaded: true}))
    .catch(err => console.log(err));
  }

  render() { 
    return (
      <h1>Books</h1>
     );
  }
}
 
export default Books;