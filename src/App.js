import { useState } from "react";

import Description from "./Components/Description/Description";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import './App.css';
import AddNewItem from "./Components/AddNewItem/AddNewItem";

const RECIPE_LIST = [
  {title: "Samosa", steps:"prepare filling, shape meda and fry", ingredients:"potato, onion, garlic", id:"s1"}
];

function App() {
  // I need to add a delete button beneath each recipe
  const [recipeList, setRecipeList] = useState(RECIPE_LIST);
  const [showAdd, setShowAdd] = useState(true);
  const [presentName, setPresentName] = useState('');

  function newRecipeHandler(newRecipe){
    setRecipeList((prevList) => {
      return [newRecipe, ...prevList]
    });
  }

  function addNewHandler() {
    setShowAdd(true);
  };

  function recipeIdHandler(event) {
    setShowAdd(false);
    setPresentName(event.toString());
  };
  
  const descriptionElement = recipeList.filter(recipe => {
    return recipe.title.toString() === presentName; 
  });

  let content = (
    <AddNewItem onAddNew={newRecipeHandler}></AddNewItem>
  );

  if(showAdd===false){
    content = (
      <Description recipe={descriptionElement}></Description>
    );
  }

  return (
    <div>
      <Header></Header>
      <div className="content">
        <Sidebar onRecipeClick={recipeIdHandler} onAddNewClick={addNewHandler} recipeList={recipeList}></Sidebar>
        {content}
      </div>
    </div>
  );
}

export default App;
