import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

function Layout({children}:Props) {
  return (
    <div>Layout</div>
  )
}

export default Layout