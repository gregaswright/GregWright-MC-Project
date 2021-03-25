import React from 'react'
import Course from '../Component/Course'

class CourseContainer extends React.Component {


    renderCourses = () => {
        return this.props.coursesArray.map(courseObj => <Course key={courseObj.id} courseObj={courseObj}/>)
    }

    render() {
        console.log(this.props.coursesArray)
        return(
            <div>
                {this.renderCourses()}
            </div>           
        )
    }
}

export default CourseContainer