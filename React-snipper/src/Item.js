import React, { Component } from "react";
import PropTypes from "prop-types";
// react是单项数据流的传递的数据都是只读的
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // 组件第一次存在与DOM中，函数是不会被执行的
  // 如果已经存在于DOM中，函数才会被执行

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  componentWillReceiveProps() {
    console.log("Child - componentWillReceiveProps");
  }
  handleClick() {
    this.props.deleteItem(this.props.index);
  }

  componentWillUnmount() {
    //组件销毁调用
    console.log("Child - componentWillUnmount");
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
