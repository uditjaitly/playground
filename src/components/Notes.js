import React from 'react'
import AddNote from './AddNote.js'
import Note from './Note.js'
import uuid from 'react-uuid'
class Notes extends React.Component{

    constructor(props){
        super(props);
        this.state={
            notes:[]
        }
    }
    onAdd=(note,description)=>{
        this.setState({notes:this.state.notes.concat({note:note, description:description, id:uuid()})});
        console.log(this.state);
    }
    
    handleDelete=(id)=>{
        this.setState({notes:this.state.notes.filter((note)=>{
            return note.id!==id;
        })})
        console.log(id);
    }
    render(){
    return(
            <div>
                <AddNote onAddButtonClick={this.onAdd}/>
                {this.state.notes.map((entry)=>{
                    return (<Note note={entry.note} description={entry.description} key={entry.id} id={entry.id} onDelete={this.handleDelete}/>)

                })}
                
            </div>

        )
    }
}

export default Notes;