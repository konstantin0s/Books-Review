import React, { Component } from 'react'
import axios from 'axios';

class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      book: {},
      isLoaded: false
     }
  }

  componentDidMount() {
  axios.get(`/wp-json/wp/v2/books/${this.props.match.params.id}`)
  .then(res => this.setState({
    book: res.data,
    isLoaded: true
  }))
  .catch(err => console.log(err));
  }

  render() { 
    const { book, isLoaded } = this.state;
    
    return ( 
      <h1>Book PAge</h1>
     );
  }
}
 
export default BookPage;