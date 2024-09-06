import React from 'react'

const Name = ({params,searchParams}:{params:{name:string},searchParams:{id:string}}) => {
  return (
    <div>my name is {params.name}</div>
  )
}

export default Name