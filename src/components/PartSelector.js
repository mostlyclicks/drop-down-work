import React from 'react'

const PartSelector = (props) => {

  const partOptions = props.partOptions

  return (
    <div>
      <select>
        {partOptions.map((part) => {
          return (
            <option value={{make: part.make, price: part.price}}>{part.make} - ${part.price}</option>
          )
        })}
      </select>

    </div>
  )
}

export default PartSelector


        // <option value="part 1">Part 1</option>
        // <option value="part 2">Part 2</option>
        // <option value="part 3">Part 3</option>
        // <option value="part 4">Part 4</option>
        //{name: part.name, price: part.price}
