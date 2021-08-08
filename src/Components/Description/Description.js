import './Description.css'

function Description(props) {
    function deleteButtonHandler(event) {
        props.onDelete(event.target.value.toString());
        return;
    }
    return(
        <div className="description">
            <div className="description__title">{props.recipe[0].title}</div>
            <div className="description__steps">
                <div className="description__subtitle">Steps</div>
                {props.recipe[0].steps}
            </div>
            <div className="description__ingredients">
                <div className="description__subtitle">Ingredients</div>
                {props.recipe[0].ingredients}
            </div>
            <button value={props.recipe[0].title} onClick={deleteButtonHandler} className="description__delete-button">Delete</button>
        </div>
    );
}

export default Description;