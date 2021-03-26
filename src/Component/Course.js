import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Course extends React.Component {

    state = {
        addButtonClicked: false
    }

    addClickHandler = () => {
        this.setState({ addButtonClicked: !this.state.addButtonClicked})
        {this.state.addButtonClicked ? this.props.removeFromFavorite(this.props.courseObj.id) : this.props.collectFavorites(this.props.courseObj)}
    }

    render() {
        return(
            <div>
                <div>
                    <Card bg="dark" text="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.courseObj.instructor_image_url} alt={this.props.courseObj.instructor_name} />
                    <Card.Body>
                        <Card.Title>{this.props.courseObj.instructor_name}</Card.Title>
                        <Card.Text>
                        {this.props.courseObj.title}
                        </Card.Text>
                        <Card.Text>
                        {this.props.courseObj.description}
                        </Card.Text>
                        <Card.Text>
                        Class Rating: {this.props.courseObj.rating}
                        </Card.Text>
                        <Button variant="primary" onClick={this.addClickHandler}>{this.state.addButtonClicked ? "Added" : "Add"}</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>        
        )
    }
}

export default Course