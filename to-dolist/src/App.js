import React, { useState } from "react";
// import "./ListItems";
import ListItems from "./ListItems";
const App = () => {
    const [inputList,setInputList] = useState("");
    const [Items,setItems] = useState([]);

    const itemEvents = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems)=>{
            return[...oldItems,inputList];
        })
        setInputList("");
    };

    const deleteItems = (id) =>{
        // console.log('deleted');
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDoList</h1>
                    <br />
                    <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvents} />
                    <button onClick={listOfItems}> + </button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {Items.map((itemval,index)=>{
                            return <ListItems key={index} id={index} text={itemval} onSelect = {deleteItems}/>
                        })}
                    </ol>
                </div>

            </div>
        </>
    )
};

export default App;