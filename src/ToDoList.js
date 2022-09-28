import React from "react";

const ToDOLists = (props) =>{

    
   
        
    
    
    return (
        <>
        <table className="TodoTable">
            <tbody>
                <tr className="Task-style">
                    <td> {props.text} </td>
                    <td>
                        <input type="button" className="Editbtn" value="Edit" />
                    </td>
                    <td>
                        <input type="button" className="Deletebtn" value="Delete" 
                        onClick = {() => {
                            props.onSelect(props.id);
                        }} />
                    </td>
                </tr>
            </tbody>

        </table>
            
            
        </>
    );
};

export default ToDOLists;