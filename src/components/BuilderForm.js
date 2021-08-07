import React from 'react'
import PartSelector from './PartSelector'

const BuilderForm = (props) => {

  const wheelOptions = props.parts

  return (
    <div>
      <form>
        <PartSelector partOptions={wheelOptions} />
      </form>
    </div>
  )
}

export default BuilderForm
