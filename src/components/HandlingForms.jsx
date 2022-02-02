import React, { Component } from "react";

export class HandlingForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      comments: "",
      topic: "React",
    };
  }
  handleName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleCommentsChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };
  handleSubmit = e =>{
      alert(`${this.state.username +" " +this.state.topic}`)
      e.preventDefault()
  }
  render() {
    return (
      // we are creating a controlled component!
      <form action=''onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleName}
            required
          />
        </div>

        <div>
          <label htmlFor=''>Comments</label>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            value={this.state.comments}
            onChange={this.handleCommentsChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor=''>Topic</label>
          <select
            name=''
            id=''
            value={this.state.topic}
            onChange={this.handleTopicChange}
          >
            <option value=''>Angular</option>
            <option value=''>React</option>
            <option value=''>Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default HandlingForms;
