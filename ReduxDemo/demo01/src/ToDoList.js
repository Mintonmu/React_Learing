import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from "./store";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);

    //! 这里state必须要订阅绑定，如果input有value没有绑定state就不会被更新
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);

    this.clikBtn = this.clikBtn.bind(this);
  }
  changeInputValue(e) {
    // console.log(e.target.value);
    const action = {
      type: "changeInput",
      value: e.target.value,
    };
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
  clikBtn() {
    // alert("heiehih");
    const action = {
      type: "additem",
    };
    store.dispatch(action);
  }
  deleteitem(index) {
    const action = {
      type: "deleteitem",
      index,
    };
    store.dispatch(action);
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "10px" }}
            onChange={this.changeInputValue}
          />
          <Button type="primary" onClick={this.clikBtn}>
            增加
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            //关键代码-----------start
            dataSource={this.state.list}
            //关键代码-----------end
            renderItem={(item, index) => (
              <List.Item onClick={this.deleteitem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
