import React, { useRef, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ProductTable from '../pages/Products/ProductTable'

const List = ({ items, setNewItem, removeItem, removeAll }) => {

   /* let itemDrag = useRef()
   let itemDragOver = useRef()
   function dragStartHandle(e, index) {
      itemDrag = index
   }; */

   const handleDragEnd = (e) => {
      if (!e.destination) return;
      // let tempData = Array.from(items);
      let tempItem = [...items];
      let [source_data] = tempItem.splice(e.source.index, 1);
      tempItem.splice(e.destination.index, 0, source_data);
      setNewItem(tempItem);
      console.log("user items===>", items)
      console.log("ondrag items===>", e)

   };

   return (
      <>

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
            <DragDropContext onDragEnd={handleDragEnd}>
               <table className="table">
                  <thead>
                     <tr>
                        <th>Sno.</th>
                        <th>Item</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <Droppable droppableId='tbody'>
                     {
                        (provider) => (
                           <tbody ref={provider.innerRef} {...provider.droppableProps} >
                              {items.map((item, ind) => (
                                 <Draggable key={item.id} draggableId={item.title} index={ind} >
                                    {(provider) => (
                                       <tr {...provider.draggableProps} ref={provider.innerRef} >
                                          <td {...provider.dragHandleProps} > = </td>
                                          {/* <td>{ind + 1}</td> */}
                                          <td>{item.title}</td>
                                          <td>
                                             <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)} >Delete</button>
                                          </td>
                                       </tr>
                                    )}
                                 </Draggable>
                              ))}
                              {provider.placeholder}
                           </tbody>
                        )
                     }
                  </Droppable>

               </table>
            </DragDropContext>
            {/* table data */}
         </div>

         {/* d2 */}
         <ProductTable />
      </>
   )
}

export default List