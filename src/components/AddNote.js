import React from 'react'

class AddNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            note:"",
            description:""
        }
    }

    handleNoteChange=(e)=>{
        this.setState({note:e.target.value});
       
    }
    handleDescriptionChange=(e)=>{
        this.setState({description:e.target.value});
    }
    handleAdd=(e)=>{
        e.preventDefault();
        this.props.onAddButtonClick(this.state.note,this.state.description);
       
    }

    render(){
        return(
            <div>
                <h1>Add Note</h1>
                <form>
                    <input type="text" placeholder="Enter Note" value={this.state.note} onChange={this.handleNoteChange}/>
                    <input type="text" placeholder="Enter Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    <button onClick={this.handleAdd}>Add</button>
                </form>
            </div>
        )
    }
}

export default AddNote