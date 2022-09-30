import React, { useRef }from 'react'
import IndividualIntervalsExample from '../Carrousel/Carrousel'
import Newsletter from '../Newsletter/Newsletter'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'
import Collage from '../Collage/Collage'

export default function Home() {

  const scroll0 = useRef()
  const scroll1 = useRef()
  const scroll2 = useRef()
  const scroll3 = useRef()
  const scroll4 = useRef()
  const scroll5 = useRef()
  return (
    <div>
      <IndividualIntervalsExample />
      <Products />
      <Collage />
      <Newsletter />
      <Footer />
    </div>
  )
}
