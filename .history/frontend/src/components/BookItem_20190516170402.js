import React, { Component } from 'react';

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { title } = this.props.book;
    return ( 
    <div>
      <h2>
      {title.rendered}
      </h2>
    </div>
     );
  }
}
 
export default BookItem;