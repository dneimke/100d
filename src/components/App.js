import React from 'react';
import CounterButton from './CounterButton';
import StarsDisplay from './StarsDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  UNSAFE_componentWillMount() {
    localStorage.getItem('count') &&
      this.setState({
        count: parseInt(
          JSON.parse(localStorage.getItem('count')),
          10
        ),
      });
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('count', JSON.stringify(nextState.count));
  }

  updateCount(val) {
    const { count } = this.state;
    this.setState({ count: count + val });
  }

  render() {
    return (
      <div className="wrapper">
        <header className="page-header">
          <div className="app-logo">Logo</div>
          <div className="app-menu">
            <span>Menu Item 1</span>
            <span>Menu Item 2</span>
            <span>Menu Item 3</span>
          </div>
          <div className="app-profile-link">Profile Link</div>
        </header>
        <div className="content">
          Add or remove items: {}
          <CounterButton
            value={1}
            setCount={(val) => this.updateCount(val)}
          />
          <CounterButton
            value={-1}
            setCount={(val) => this.updateCount(val)}
          />
          <hr />
          <StarsDisplay count={this.state.count} />
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
