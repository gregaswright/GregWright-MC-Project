import React from 'react'

class Favorite extends React.Component {


    removeClickHandler = () => {
        this.props.removeFromFavorite(this.props.favoriteObj.id)
    }

    render() {
        return(
            <div>
                <div>
                    <img src={this.props.favoriteObj.instructor_image_url} alt={this.props.favoriteObj.instructor_name}/>
                    <h2>{this.props.favoriteObj.instructor_name}</h2>
                    <h3>{this.props.favoriteObj.title}</h3>
                    <p>{this.props.favoriteObj.description}</p>
                </div>
                <div>
                    <button onClick={this.removeClickHandler}>Remove</button>
                    
                </div>
            </div>           
        )
    }
}

export default Favorite