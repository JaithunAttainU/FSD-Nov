import React from 'react'
import { useParams } from 'react-router-dom'
import { INVOICE } from '../mock/invoices'

function InvoiceDetails() {

  //used to get all dynamic values in route/path
  const params = useParams()
  console.log(params)
  //customer data
  const { invoiceID } = params
  const invoiceDetail = INVOICE.filter((invoice) => invoice.number.toString() === invoiceID ? true : false)

  return (
    <div>
      {invoiceDetail.length !== 0 ? (
        <>
          <h3>Invoice Details</h3>
          <div>Name: {invoiceDetail[0].name}</div>
          <div>Amount: {invoiceDetail[0].amount}</div>
          <div>Due Date: {invoiceDetail[0].due}</div>
        </>
      ) : <>Invalid Invoice ID</>
      }
    </div >
  )
}

export default InvoiceDetails