import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Questionaire = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Questionaire</h1>
      <button onClick={() => navigate(-1)}> Back! </button>
      <button onClick={() => navigate("/JobBoard")}> Next! </button>
    </div>
  )
}

export default Questionaire
