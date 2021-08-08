import { useState } from 'react';
import EditItem from '../EditItem/EditItem';
import './Description.css'

function Description(props) {
    const [title, setTitle] = useState(props.recipe[0].title);
    const [steps, setSteps] = useState(props.recipe[0].steps);
    const [ingredients, setIngredients] = useState(props.recipe[0].ingredients);
    const [edit, setEdit] = useState(false)

    function editItemHandler(afterEdit) {
        props.recipe[0].title = afterEdit.title;
        props.recipe[0].steps = afterEdit.steps;
        props.recipe[0].ingredients = afterEdit.ingredients;
    }

    function doneEditHandler() {
        setEdit(false);
    }

    function editButtonHandler() {
        setEdit(true);
    }

    function deleteButtonHandler(event) {
        props.onDelete(event.target.value.toString());
        return;
    }

    let description_content = (
        <div>
            <div className="description__title">{props.recipe[0].title}</div>
            <div className="description__steps">
                <div className="description__subtitle">Steps</div>
                {props.recipe[0].steps}
            </div>
            <div className="description__ingredients">
                <div className="description__subtitle">Ingredients</div>
                {props.recipe[0].ingredients}
            </div>
        </div>
    );

    if(edit===true) {
        description_content = (
            <EditItem onEdit={editItemHandler}></EditItem>
        );
    }

    return(
        <div className="description">
            {description_content}
            <div className="description__buttons-alignment">
                <button value={props.recipe[0].title} onClick={deleteButtonHandler} className="description__delete-button">Delete</button>
                <button onClick={editButtonHandler} className="description__delete-button">Edit</button>
                {edit===true ? <button className="description__delete-button" onClick={doneEditHandler} >Done</button> : ''}
            </div>
        </div>
    );
}

export default Description;