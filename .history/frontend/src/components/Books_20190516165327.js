import React, { Component } from 'react';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      isLoaded: false
     }
  }
  render() { 
    return (
      <h1>Books</h1>
     );
  }
}
 
export default Books;