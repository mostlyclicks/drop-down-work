import React from 'react'
import PartSelector from './PartSelector'

const BuilderForm = (props) => {
  console.log(props)
  const wheelOptions = props.parts

  return (
    <div>
      <form>
        <PartSelector partOptions={wheelOptions} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BuilderForm
