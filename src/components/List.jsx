import React, { useEffect, useRef, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ProductTable from '../pages/Products/ProductTable'
import Checkbox from './Form/Checkbox/Checkbox'
import Dropdown from './Select/Dropdown'

const List = ({ items, setNewItem, removeItem, removeAll }) => {

   const [itemList, setItemList] = useState([])
   const [isChecks, setIsChecks] = useState(false)



   const handleDragEnd = (e) => {
      if (!e.destination) return;
      // let tempData = Array.from(items);
      let tempItem = [...items];
      let [source_data] = tempItem.splice(e.source.index, 1);
      tempItem.splice(e.destination.index, 0, source_data);
      setNewItem(tempItem);
      // console.log("user items===>", items)
      // console.log("ondrag items===>", e)

   };

   // handle on change checks
   const handleSelectCheck = (e, id) => {
      const { value, checked, name } = e.target;
      // let newItem = { title: value, isChecked: checked }
      // console.log('Log------->', `${value} is ${checked}`, '& Name', name);
      let tempItems = items.map((data) => (
         data.title === name ? { ...data, isCorrect: checked } : data
      ));
      setNewItem(tempItems)
      console.log("temp items==========>", tempItems);

      // if (checked) {
      //    setIsChecks(!checked)
      //    setItemList([...itemList, newItem])
      //    console.log(itemList,'Onchange item' , 'isChecks', isChecks);
      // } else {
      //    setIsChecks(false)
      //    console.log("ischecks", isChecks)
      //    let delItem = itemList.filter((elem) => {
      //       return elem.id !== id
      //    }) 
      //    console.log("title===>", id, delItem)
      //    setItemList(delItem)
      // }

   };


   return (
      <>

         <div className="card mt-3">
            <div className="card-body">
               <h5 className="card-title">Todo item list</h5>
               <ul className="list-group">
                  {
                     items?.length < 1 ? 'No taks found' :
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
                        <th>Select</th>
                        <th>Drag</th>
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
                                          <td>
                                             <input
                                                type="checkbox"
                                                name={item.title}
                                                checked={item?.isCorrect || false}
                                                onChange={handleSelectCheck}
                                             />
                                          </td>
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
         <Dropdown />
         <h2>Select all and checkbox</h2>
         <Checkbox />
      </>
   )
}

export default List