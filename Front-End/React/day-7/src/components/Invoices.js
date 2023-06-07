import React from 'react'
import { INVOICE } from '../mock/invoices'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Invoices() {
  return (
    <div className='d-flex'>
      <div className='d-flex flex-column'>
        {INVOICE.map((invoice) => {
          return <NavLink key={invoice.number} style={(param) => {
            const { isActive } = param
            console.log(param)
            if (isActive) {
              return {
                backgroundColor: 'yellow',
                color: 'red'
              }
            }
          }} to={`/invoices/${invoice.number}`}>{invoice.name}</NavLink>
        })}
      </div>
      {/* //used to render child components depending on path */}
      <Outlet />
    </div>

  )
}
