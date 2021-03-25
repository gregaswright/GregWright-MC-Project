import React from 'react'

class Course extends React.Component {

    state = {
        addButtonClicked: false
    }

    addClickHandler = () => {
        this.setState({ addButtonClicked: !this.state.addButtonClicked})
    }

    render() {
        return(
            <div>
                <div>
                    <img src={this.props.courseObj.instructor_image_url} alt={this.props.courseObj.instructor_name}/>
                    <h2>{this.props.courseObj.instructor_name}</h2>
                    <h3>{this.props.courseObj.title}</h3>
                    <p>{this.props.courseObj.description}</p>
                </div>
                <div>
                    <button onClick={this.addClickHandler}>{this.state.addButtonClicked ? "Added" : "Add"}</button>
                </div>
            </div>        
        )
    }
}

export default Course