import React, { Component, Fragment } from "react";

import { CSSTransition } from "react-transition-group";

export default class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    this.toToggle = this.toToggle.bind(this);
  }
  toToggle() {
    this.setState({ isShow: this.state.isShow ? false : true });
  }

  render() {
    return (
      //   <Fragment>
      //     <div className={this.state.isShow ? "show" : "hide"}>
      //       Boss级人物-孙悟空
      //     </div>
      //     <div>
      //       <button onClick={this.toToggle}>召唤Boss</button>
      //     </div>
      //   </Fragment>
      <Fragment>
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          //   unmountOnExit
        >
          <div>Boss级人物-孙悟空</div>
        </CSSTransition>

        <div>
          <button onClick={this.toToggle}>召唤Boss</button>
        </div>
      </Fragment>
    );
  }
}
