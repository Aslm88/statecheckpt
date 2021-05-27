import React from "react";
import "./App.css";

const styleObject = {
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 5px 10px 2px rgba(0.0.0.25)",
};
const styleButton = {
  width: "300px",
  height: "40px",
  borderRadius: "10px",
  color: "white",
  border: "none",
  fontWeight: "bold",
  backgroundColor: "blue",
};
const styleProfile = {
  display:"bloc",
  color: "blue",
  textAlign: "center",
  textTransform: "capitalize",
  letterSpacing: "3px",
  fontWeight: "bold",
};
class App extends React.Component {
  state = {
    fullName: "Jhon Doe",
    bio: "developement",
    imgSrc:
      "https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg",
    profession: "Front End Web Developper",
    isShown: false,
    date: "",
    tick: "",
    timerID: "",
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <div>
          {this.state.isShown && (
            <div style={styleObject}>
              <img src={this.state.imgSrc} alt="" />
              <div style={styleProfile}>
                <div> fullName: {this.state.fullName}</div>
                <div> bio: {this.state.bio} </div>

                <div>Profession : {this.state.profession}</div>
              </div>
            </div>
          )}
          <div>
            <h2> {this.state.date.toLocaleTimeString()}.</h2>
          </div>
          <div>
            <button
              onClick={() => this.setState({ isShown: !this.state.isShown })}
              style={styleButton}
            >
              {this.state.isShown ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
