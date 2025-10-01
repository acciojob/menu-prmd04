import React from 'react'

export function Menu({items}) {
  return (
    <div className='menu-list'>
      {items.map((item =>(
        <div key={item.id} className='menu-item'
          data-test-id={`menu-item-${item.category.toLowerCase()}`}>
          <img src={item.image} alt={item.name}/>
          <div>
            <h3>{item.name}</h3>
            <p>{item.prise}</p>
          </div>
        </div>
      )))}
    </div>
   
  )
}
