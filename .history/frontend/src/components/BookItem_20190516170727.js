import React, { Component } from 'react';
import axios from 'axios';

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { title, excerpt } = this.props.book;
    return ( 
    <div>
      <h2>
      {title.rendered}
<div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
      </h2>
    </div>
     );
  }
}
 
export default BookItem;