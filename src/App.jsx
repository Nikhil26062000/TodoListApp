import React, { useState } from 'react';
import './index.css';
import Todo from './Todo';


const App = () => {

    const [value, setValue] = useState();
    const [finalValue,setFinalValue] = useState([]);
  
    

    const gettingValue = (event) => {
      setValue(event.target.value);
    }

    const fetch = () => {
        
       setFinalValue( (oldArray) => {
        return [...oldArray,value];

       } 
       
       );
      

   
    console.log(finalValue);
    setValue(" "); 
    }

    const deleteItems =(id) => {
        console.log("deleteItems Sucessfully "+id);

        setFinalValue((oldArray)=>{
           return oldArray.filter((arrEle,index)=>{
                return id!== index; 
            })
        })

    }

    return(
        <>
            <div className="container">
                <h3>Todo List App</h3>
                <br />
                <div className="inputSpace">
                    <input type="text" placeholder='Add a Text' 
                     value={value}
                     onChange={gettingValue}/>
                    <button onClick={fetch}>Add</button> 
                </div><br />
                <hr />
                {finalValue.map((val,index)=>{
                    return <Todo 
                    id={index}
                    key={index}
                    value={val}
                    onSelect={deleteItems}
                    />;
                })}
              
             
            </div>
        </>
    );

};

export default App;