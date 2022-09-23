import React, { useState } from 'react'

const Dropdown = () => {
   const [selectVal, setSelectVal] = useState()
   // handle onChangle of select
   const handleOnChangeDP = (e) => {
      setSelectVal(e.target.value);
   };
   return (
      <>
         <div className='container'>
            <form className="form w-100">
               <h3>Dropdown selected: {selectVal}</h3>
               <select className='form-control mb-5' defaultValue={'DEFAULT'} value={selectVal} onChange={handleOnChangeDP}>
                  <option defaultValue={'DEFAULT'} disabled>Please select</option>
                  <option value='Java'>Java</option>
                  <option value='JS'>JS</option>
                  <option value='Apple'>Apple</option>
               </select>
            </form>
         </div>

      </>

   )
}

export default Dropdown