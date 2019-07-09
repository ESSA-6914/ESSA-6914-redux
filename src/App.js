import React, { Component } from 'react';
import './App.css';
import StudentCard from './components/studentCard';
import SearchAppBar from './components/navBar';
import AddStudent from './components/addStudent';
import Modal from './components/modal';
import { connect } from "react-redux";



class App extends Component {
  state = {
    students: this.props.students,
    searchValue: '',
    picture: '',
    name: '',
    email: '',
    enrollmentNumber: '',
    visible: false
  };

  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  newStudent = () => {
    this.setState({
      students: [
        ...this.state.students,
        {
          picture: this.state.picture,
          name: this.state.name,
          email: this.state.email,
          enrollmentNumber: this.state.enrollmentNumber
        }
      ]
    });
  };
  clear = () => {
    this.setState({
      picture: '',
      name: '',
      email: '',
      enrollmentNumber: ''
    });
  };
  addOne = () => {
    this.setState({
      visible: true
    });
  };
  close = e => {
    this.setState({
      visible: false
    });
    this.clear();
  };
  render() {
    console.log(this.state.visible);
    return (
      <div className="App">
        <header className="App-header">
          <SearchAppBar
          />
        </header>
        <main>
          <div className="students-display">
            <h2 className="students-title">Students List</h2>
            <div className="students-list">
              {this.props.students
                .map((el, i) => (
                  <StudentCard
                    student={el}
                    key={i}
                  />
                ))}
              <AddStudent addOne={this.addOne} />
              <Modal
                changeInput={this.changeInput}
                newStudent={this.newStudent}
                visible={this.state.visible}
                close={this.close}
                picture={this.state.picture}
                name={this.state.name}
                email={this.state.email}
                enrollmentNumber={this.state.enrollmentNumber}
              />
            </div>
            <h2 className="students-title">Present Students</h2>
          </div>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  students: state.studentListReducer.filter(el =>
    el.name.toLowerCase().includes(state.searchReducer.toLowerCase())
  )
});
export default connect(
  mapStateToProps
)(App);;
