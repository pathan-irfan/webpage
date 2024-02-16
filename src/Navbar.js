import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-primary-subtle border border-secondary">
  <div class="container-fluid">
    <a class="navbar-brand text-success" href="#" style={{marginLeft:"6%",fontSize:"20px"}}>Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active text-success" aria-current="page" href="#" style={{marginLeft:"380%",fontSize:"20px"}}>Product</a>
        <a class="nav-link text-success" href="#"style={{fontSize:"20px"}}>Features</a>
        <a class="nav-link text-success" href="#"style={{fontSize:"20px"}}>Saved</a>
        <a class="nav-link disabled text-success" aria-disabled="true" style={{fontSize:"20px"}}>Contact</a>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
