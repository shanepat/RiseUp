import React from 'react'
import { useNavigate } from 'react-router-dom'

import './JobBoard.css'
import icon from '../riseup1.png'

export const JobBoard = () => {
  const navigate = useNavigate();
  return (
    <div id="body">
      <br></br>
      <div id="wrapper" data-aos="zoom-in-up" data-aos-delay="100">
        <br />
        <img id="icon" src={icon} />
      </div>
      <div id="center">
      <h1 class="jobboardt">JobBoard</h1>
        <h1 id="title"> Jobs Waiting For You </h1>
        
       
            <div class="job-posting">
                
                <h1>Construction Worker</h1>
               
                  <p>
                  Palmer Construction Services LLC, Lansing MI 48911
Ayers Basement Systems, Lansing MI
Industrial Service, MI 48879
                  </p>
                  <p>
                  Companies with construction worker job openings :
description: A construction worker is responsible for assisting skilled tradespeople and construction managers in the construction of buildings, roads, bridges, and other structures. Some of the main responsibilities of a construction site worker include: Assisting in the preparation of construction sites, including clearing and grading the land and digging trenches.
                  </p>
                
                <button class="continue"> Apply </button>
                </div>

                <div class="job-posting">
                
                <h1>Pet Sitter</h1>
               
                  <p>
                  2 Peas In A Pod Pet Care, Lansing, MI 48917
Prancing Poodle Pet Care & Dog Walking Services, 
Best Friends Pet Hotel, MI 48906
                  </p>
                  <p>
                  A pet sitter is responsible for providing care and attention to pets while their owners are away. This may include feeding, grooming, walking, administering medication, and providing companionship. Some of the main responsibilities of a pet sitter include visiting clients' homes to care for their pets, which may include dogs, cats, birds, and other small animals.
                  </p>
                
                <button class="continue"> Apply </button>
                </div>

                <div class="job-posting">
                
                <h1>Phlebotomist</h1>
               
                  <p>
                  Ross Medical Education Center, MI 48917
                  </p>
                  <p>
                  A Phlebotomist is a healthcare professional who is responsible for drawing blood from patients for various medical tests, procedures and blood donation. Some of the main responsibilities of a Phlebotomist include:
</p><p>
Identifying the patient and explaining the procedure to them and verifying the patient's information and ensuring that the correct test is being performed
                  </p>
                
                <button class="continue"> Apply </button>
                </div>
                <div class="job-posting">
                
                <h1>Plant Caretaker,</h1>
               
                  <p>
                  Right at Home, MI 48823
The Plant Professionals, MI 48906
Lansing Gardens
                  </p>
                  <p>
                  A plant caretaker, also known as a horticulturist or gardener, is responsible for the care and maintenance of plants in a specific area or location. Some of the main responsibilities of a plant caretaker include:

Planting, pruning, and cultivating various types of plants, flowers, shrubs, and trees
Watering, fertilizing, and pest control
Identifying and diagnosing plant disorders and diseases
Maintaining the landscaping and appearance of the area
</p><p>

                  </p>
                
                <button class="continue"> Apply </button>
                </div>
            
  
      <button class="continue" onClick={() => navigate(-1)}> Back! </button>
    </div>
    </div>
   
  )
}

export default JobBoard
