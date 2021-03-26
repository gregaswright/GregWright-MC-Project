import React from 'react'
import CourseContainer from './Container/CourseContainer'

class App extends React.Component {

    state = {
      coursesArray: [],
      classesClicked: false,
      savedClicked: false
    }

    componentDidMount() {
      fetch('http://localhost:3000/courses')
      .then(response => response.json())
      .then(data => this.setState({ coursesArray: data}));
    }


    render() {
        
        return(
            <div>
              <div>
                <CourseContainer coursesArray={this.state.coursesArray} />
              </div>
            </div>           
        )
    }
}

export default App
