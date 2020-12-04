import React, { Component } from "react";
import PropTypes from "prop-types";
// react是单项数据流的传递的数据都是只读的
class Item extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.deleteItem(this.props.index);
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.avname}提供{this.props.content}
      </li>
    );
  }
}
Item.propTypes = {
  avname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  delete: PropTypes.func,
};
Item.defaultProps = {
  avname: "宋丹丹",
};

export default Item;
