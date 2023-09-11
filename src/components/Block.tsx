import React from "react"

interface BlockProps {
    value?: string | null 
}

const Block = (props: BlockProps) => {
  return (
    <div className='block'>{props.value}</div>
  )
}

export default Block