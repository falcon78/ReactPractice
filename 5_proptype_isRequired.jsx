const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

//Note: As of React v15.5.0, PropTypes is imported independently from React, like this:
//import React, { PropTypes } from 'react';
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}
