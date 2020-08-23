import React from 'react';
import DisplayLinks from './DisplayLinks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };
  }

  UNSAFE_componentWillMount() {
    localStorage.getItem('links') &&
      this.setState({
        links: JSON.parse(localStorage.getItem('links')),
      });
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('links', JSON.stringify(nextState.links));
  }

  addLink() {
    let newLink = prompt('Enter the new URL');

    if (!newLink || newLink.length === 0) return;

    const newLinks = [...this.state.links, newLink];
    this.setState({ links: newLinks });
  }

  onRemoveLink = (link) => {
    const newLinks = this.state.links.filter((x) => x !== link);
    this.setState({ links: newLinks });
  };

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
          <button
            className="btn btn-primary"
            onClick={() => this.addLink()}
          >
            Add New Link
          </button>
          <hr />
          <DisplayLinks
            links={this.state.links}
            onRemove={this.onRemoveLink}
          />
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
