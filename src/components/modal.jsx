import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div
            className="modal"
            style={{ display: this.props.visible ? "flex" : "none" }}
          >
            <p>Picture</p>
            <input type="text" name="picture" onChange={this.props.changeInput} value={this.props.picture}/>
            <p>Name</p>
            <input type="text" name="name" onChange={this.props.changeInput} value={this.props.name}/>
            <p>Email</p>
            <input type="text" name="email" onChange={this.props.changeInput} value={this.props.email}/>
            <p>Enrollment Number</p>
            <input
              type="text"
              name="enrollmentNumber"
              onChange={this.props.changeInput}
              value={this.props.enrollmentNumber}
            />
            <div>
              <input
                type="button"
                onClick={() => {
                    this.props.newStudent();
                    this.props.close();
                }}
                value="Add"
              />
              <input type="button" onClick={this.props.close} value="Close" />
            </div>
          </div>
        
        )
    }
}
// const mapDispatchToProps = dispatch => ({
//   newStudent: payload => {
//       dispatch(addStudent(payload))
//   }
// })
// export default connect(null, mapDispatchToProps)(Modal)