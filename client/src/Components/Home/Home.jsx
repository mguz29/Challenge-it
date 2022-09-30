import React from 'react'
import IndividualIntervalsExample from '../Carrousel/Carrousel'
import Newsletter from '../Newsletter/Newsletter'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div> 
      <IndividualIntervalsExample/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
