import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h5 style={styles.title}>You're a Wizard Harry</h5>
      </div>);
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    marginTop: 32
  }
};

export default App;