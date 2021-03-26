import React from 'react'
import Course from '../Component/Course'
import Favorite from '../Component/Favorite'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'

class CourseContainer extends React.Component {

    state = {
        favoriteArray: [],
        savedClicked: false,
        sortByFavoritesClicked: false
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


    // this is not working but I felt close
    sortByFavorites = () => {
        let filteredArray = this.state.favoriteArray.filter(course => this.props.coursesArray.includes(course))
        return filteredArray.map(courseObj => <Course key={courseObj.id} courseObj={courseObj} collectFavorites={this.collectFavorites} removeFromFavorite={this.removeFromFavorite}/>)
    }

    sortByFavoritesCLickHandler = () => {
        this.setState({ sortByFavoritesClicked: !this.state.sortByFavoritesClicked})
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
        console.log(this.sortByFavorites())
        return(
            <div>
                <div>
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Masterclass</Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link onClick={this.sortByFavoritesCLickHandler}>Sort by Favorites</Nav.Link>
                    </Nav.Item>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="secondary" onClick={this.savedClickedHandler}>Saved Classes: {this.state.favoriteArray.length}</Button>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
                <CardGroup>
                    {this.sortByFavoritesClicked ? this.sortByFavorites() : this.renderCourses()}
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