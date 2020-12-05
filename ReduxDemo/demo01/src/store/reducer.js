const defaultState = {
  inputValue: "Write Something",
  list: [
    "早8点开晨会，分配今天的开发工作",
    "早9点和项目经理作开发需求讨论会",
    "晚5:30对今日代码进行review",
  ],
};
export default (state = defaultState, action) => {
  // console.log(state, action);
  //! Reducer里只能接受state,不能改变state
  if (action.type === "changeInput") {
    let newstate = JSON.parse(JSON.stringify(state));
    newstate.inputValue = action.value;
    return newstate;
  }
  if (action.type === "additem") {
    let newstate = JSON.parse(JSON.stringify(state));
    newstate.list.push(newstate.inputValue);
    newstate.inputValue = "";
    return newstate;
  }
  if (action.type === "deleteitem") {
    let newstate = JSON.parse(JSON.stringify(state));
    newstate.list.splice(action.index, 1);
    return newstate;
  }
  return state;
};
