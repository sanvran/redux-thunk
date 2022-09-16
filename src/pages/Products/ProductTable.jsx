import { useState } from "react";
import userdata from "../../data/temp.json";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ProductTable = () => {
   const [users, setUsers] = useState(userdata.data);

  const handleDragEnd = (e) => {
    if (!e.destination) return;
     let tempData = Array.from(users);
    let [source_data] = tempData.splice(e.source.index, 1);
     tempData.splice(e.destination.index, 0, source_data);
     setUsers(tempData);
     console.log("user items===>",users)
  };
  return (
   <div className="App mt-4">
   <DragDropContext onDragEnd={handleDragEnd}>
     <table className="table borderd">
       <thead>
         <tr>
           <th />
           <th>Username</th>
           <th>Age</th>
           <th>Gender</th>
         </tr>
       </thead>
       <Droppable droppableId="droppable-1">
         {(provider) => (
           <tbody
             className="text-capitalize"
             ref={provider.innerRef}
             {...provider.droppableProps}
           >
             {users?.map((user, index) => (
               <Draggable
                 key={user.name}
                 draggableId={user.name}
                 index={index}
               >
                 {(provider) => (
                   <tr {...provider.draggableProps} ref={provider.innerRef}>
                     <td {...provider.dragHandleProps}> = </td>
                     <td>{user.name}</td>
                     <td>{user.age}</td>
                     <td>{user.gender}</td>
                   </tr>
                 )}
               </Draggable>
             ))}
             {provider.placeholder}
           </tbody>
         )}
       </Droppable>
     </table>
   </DragDropContext>
 </div>
  )
}

export default ProductTable