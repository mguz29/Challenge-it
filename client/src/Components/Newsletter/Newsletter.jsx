import React, { useState } from 'react'
import img from "../../Img/flecha-correcta.png"
import Swal from 'sweetalert2'

export default function Newsletter() {

  const [input, setInput] = useState({
    email: ""
  })
  console.log(input.email)
  const [errors, setErrors] = useState({});

  const validate = (input) => {
    let errors = {};

    if (!input.email) {
      errors.email = "A Email is required";
    } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)) {
      errors.email = "EMAIL IS INVALID";
    }
    return errors;
  }



  console.log(errors)
  function handleChange(e) {
    if (e.target.name === "email") {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && input.email){
      Swal.fire({
        icon: 'success',
        title: 'Suscrito',
        showConfirmButton: false,
        timer: 1500
      })
    setInput({
      email: ""
    })
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Completa el formulario correctamente!',
    })
  }
    // dispatch(postPokemon(input))
    // history.push('/Home')
    console.log(input)
  }

  return (
    <div className='Newsletter-Conatiner'>
      <p className='NewsletterP'>NEWSLETTER</p>
      <div className='Suscribete'>
        <h1>SUSCRIBETE</h1>
        <p className='NewsletterPd'>Y enterate de todas las novedades</p>
      </div>

<div className='DivFormulario'>

        <form className='Formulario' onSubmit={e => handleSubmit(e)}>
          <div>
            <input
              className='inputEmail'
              placeholder='  Ingresa tu email'
              type='text'
              value={input.email}
              name="email"
              onChange={e => handleChange(e)}
            />
          </div>

          <button type='submit' className='ButtonSubmit'> <img src={img} alt='Not Found' /> </button>
        </form>
        {errors.email && <p className="error">{errors.email}</p>}
</div>

    </div>
  )
}
