import React from 'react'
import Course from '../Component/Course'
import Favorite from '../Component/Favorite'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Modal from 'react-bootstrap/Modal'

class CourseContainer extends React.Component {

    state = {
        favoriteArray: [],
        savedClicked: false
    }


    collectFavorites = (favoriteObj) => {
        this.setState({ favoriteArray:[...this.state.favoriteArray, favoriteObj]})
    }

    renderCourses = () => {
        return this.props.coursesArray.map(courseObj => <Course key={courseObj.id} courseObj={courseObj} collectFavorites={this.collectFavorites} removeFromFavorite={this.removeFromFavorite}/>)
    }

    renderFavorites = () => {
        return this.state.favoriteArray.map(favoriteObj => <Favorite key={favoriteObj.id} favoriteObj={favoriteObj} removeFromFavorite={this.removeFromFavorite}/>)
    }

    savedClickedHandler = () => {
        this.setState({ savedClicked: !this.state.savedClicked})
      }

    removeFromFavorite = (favoriteId) => {
        let copiedFavoriteArray = [...this.state.favoriteArray]
        let index = copiedFavoriteArray.findIndex(favoriteObj => favoriteObj.id === favoriteId)
        copiedFavoriteArray.splice(index, 1)
        this.setState({favoriteArray: copiedFavoriteArray})
    }

    render() {
        return(
            <div>
                <div>
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Masterclass</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="secondary" onClick={this.savedClickedHandler}>Saved Classes: {this.state.favoriteArray.length}</Button>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
                <CardGroup>
                    {this.renderCourses()}
                </CardGroup>
                <Modal show={this.state.savedClicked} onHide={this.savedClickedHandler}>
                    <Modal.Header closeButton>
                    <Modal.Title>Saved Classes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.renderFavorites()}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.savedClickedHandler}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>           
        )
    }
}

export default CourseContainer