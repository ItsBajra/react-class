import React, { Component } from 'react';
class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component did update');
    }
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className='mt-20 mb-20 bg-gray-300 w-1/4 h-36 items-center text-center rounded-md'>
        <h1 className='mt-5 text-xl'>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount} className='mt-2 mb-5 bg-green-300 w-28 h-10 rounded-xl ease-in-out duration-500 hover:w-32 hover:h-11'>Increment</button>
      </div>
    );
  }
}
export default LifecycleComponent;