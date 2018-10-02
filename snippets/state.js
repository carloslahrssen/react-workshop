var CowClicker = React.createClass({
    getInitialState: function() {
      return {
        clicks: 0
      };
    },
  
    onCowClick: function(evt) {
      this.setState({
        clicks: this.state.clicks + 1
      });
    },
  
    render: function() {
      return (
        <div>
          <div>Clicks: {this.state.clicks}</div>
          <img
            src="cow.png"
            onClick={this.onCowClick}
            className="cow"
          />
          <p>Click the cow</p>
        </div>
      );
    }
  });
  
  ReactDOM.render(
    <CowClicker />,
    document.getElementById('container')
  );