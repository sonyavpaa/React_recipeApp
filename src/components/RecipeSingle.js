import { React, Component } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

class RecipeSingle extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        this.setState({ data: response });
      });
  }

  render() {
    return (
      <div className="recipesingle">
        <h3>{this.props.params.pokesingle}</h3>
        <img
          src={
            this.state.data.sprites?.versions["generation-v"]["black-white"]
              .animated.front_default
          }
        ></img>
        <ul>
          {this.state.data.types?.map((type) => {
            return <li key={type?.type?.name}>{type?.type?.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default RecipeSingle;
