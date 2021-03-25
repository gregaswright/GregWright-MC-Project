import React from 'react'
import CourseContainer from './Container/CourseContainer'

class App extends React.Component {

    state = {
      coursesArray: []
    }

    componentDidMount() {
      fetch('http://localhost:3000/courses')
      .then(response => response.json())
      .then(data => this.setState({ coursesArray: data}));
    }

    render() {
        console.log(this.state.coursesArray)
        return(
            <div>
              <button>Classes</button>
              <button>Saved Classes</button>
              <div>
                <CourseContainer coursesArray={this.state.coursesArray}/>
              </div>
            </div>           
        )
    }
}

export default App
