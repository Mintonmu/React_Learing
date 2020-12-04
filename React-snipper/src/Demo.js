import React, { Component, Fragment } from "react";
import "./style.css";
import Item from "./Item";
export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: " ",
      list: ["图书", "视频"],
    };
  }

  inputChange(e) {
    this.setState({ inputValue: this.input.value });
    console.log(e.target.value);
  }
  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      },
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
  }

  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({ list: list });
    console.log(index);
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="input">增加服务</label>
          <input
            id="input"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          {this.state.list.map((item, index) => {
            return (
              <Fragment>
                <Item
                  key={index + item}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                  list={this.state.list}
                />
              </Fragment>
            );
            {
              /*
                    <li
                key={index + item}
                onClick={this.deleteItem.bind(this, index)}
                // dangerouslySetInnerHTML={{ __html: item }}   解析HTML标签
              >
                {item}
              </li>

                */
            }
          })}
        </ul>
      </Fragment>
    );
  }
}
