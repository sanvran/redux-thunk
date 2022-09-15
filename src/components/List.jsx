import React, { useRef } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const List = ({ items, removeItem, removeAll }) => {

   /* let itemDrag = useRef()
   let itemDragOver = useRef()
   function dragStartHandle(e, index) {
      itemDrag = index
   }; */

   return (
      <>
         <DragDropContext>
            <div className="card mt-3">
               <div className="card-body">
                  <h5 className="card-title">Todo item list</h5>
                  <ul className="list-group">
                     {
                        items.length < 1 ? 'No taks found' :
                           items.map((elem, index) => {
                              return (
                                 <li key={elem.id} className="list-group-item d-flex justify-content-between" >
                                    {elem.title}
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(elem.id)} >Delete</button>
                                 </li>
                              )
                           })

                     }
                     {items.length > 0 ? <button onClick={removeAll} className="btn btn-danger btn-sm mt-5">Clear All</button> : ''}
                  </ul>
               </div>
               {/* table data */}
               <table class="table">
                  <thead>
                     <tr>
                        <th>Sno.</th>
                        <th>Item</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <Droppable droppableId='tbody'>
                     {
                        (provided, snapshot) => (
                           <tbody ref={provided.innerRef} {...provided.droppableProps} >
                              {
                                 items.map((item, ind) => (
                                    <Draggable draggableId={ind} >
                                       {
                                          (provider) => (
                                             <tr {...provider.draggableProps} ref={provider.innerRef}>
                                                <td>{ind + 1}</td>
                                                <td>{item.title}</td>
                                                <td>
                                                <td {...provider.dragHandleProps}> = </td>
                                                   {/* <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)} >Delete</button> */}
                                                </td>
                                             </tr>
                                          )
                                       }
                                    </Draggable>
                                 ))
                              }

                           </tbody>
                        )
                     }
                  </Droppable>

               </table>
               {/* table data */}
            </div>
         </DragDropContext>
      </>
   )
}

export default List