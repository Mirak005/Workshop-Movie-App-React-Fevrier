import React from "react";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class AddMovie extends React.Component {
  state = {
    modalIsOpen: false,
    newMovie: {
      title: "",
      year: "",
      image: "",
      rate: ""
    }
  };

  openModal = () => this.setState({ modalIsOpen: true });
  closeModal = () => this.setState({ modalIsOpen: false });

  handleAdd = e =>
    this.setState({
      newMovie: { ...this.state.newMovie, [e.target.name]: e.target.value }
    });
  handelAddMovie = e => {
    e.preventDefault();

    if (Object.values(this.state.newMovie).indexOf("") === -1) {
      this.props.addMovie(this.state.newMovie);
      this.setState({
        modalIsOpen: false,
        newMovie: {
          title: "",
          year: "",
          image: "",
          rate: ""
        }
      });
    } else alert("Enter a valid info");
  };

  render() {
    console.log("my add function", this.props.addMovie);

    return (
      <div>
        <button className="Add-btn" onClick={this.openModal}>
          Add Movie
        </button>
        <Modal
          className="add-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <h2>Add A Movie</h2>
          <form onSubmit={this.handelAddMovie}>
            <label>Movie Name</label>
            <input
             onChange={this.handleAdd} 
             type="text"
              name="title" 
              />
            <label>Movie Rate</label>
            <input
              onChange={this.handleAdd}
              type="number"
              max="5"
              name="rate"
            />
            <label>Movie Release Year</label>
            <input 
            onChange={this.handleAdd} 
            type="text"
             name="year" />
            <label>Movie Image</label>
            <input
             onChange={this.handleAdd}
             type="url"
              name="image" />

            <div className="form-btn-container">
              <button className="btn btn-modal">Add Movie</button>
              <button className="btn btn-modal" onClick={this.closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;
