import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images.length > 0 && (
          <p>Found: {this.state.images.length} images</p>
        )}
      </div>
    );
  }
}

export default App;
