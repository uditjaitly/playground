import React from 'react'

class Note extends React.Component{
    handleDelete=()=>{
       
        this.props.onDelete(this.props.id);
    }
    render(){
        return(
            <div>
                <p>Note:{this.props.note}</p>
                <p>Description:{this.props.description}</p>
                <button onClick={this.handleDelete}>x</button>
                <br/>
            </div>
        )
    }
}
export default Note