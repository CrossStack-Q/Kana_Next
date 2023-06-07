import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function template({children}: Props) {
  return (
    
    <div>{children}</div>
  )
}

export default template