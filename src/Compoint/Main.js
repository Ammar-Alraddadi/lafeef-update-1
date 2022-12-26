import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import reactLogo from "./React-icon.png"

export default function Main(){
    return (
      
        <main class> 
      
      <div className= "border">
        <h4>Project Dashoard</h4>
      </div>


    <div id="container">
    <div id="ff">
    

    <div id="firstC">
      <h1>Shareholder Comments</h1>
      <div className="Bored">
         User1: <br></br> <br></br> 
         User2: 
         </div>
        <Button className="Button-tow" > Chat </Button>
        <Button className="Button-tow" > Vote </Button>
        </div>
      
      <div id="secondC">
       
        <div className="circal"> 60 <br></br><span>Investor</span></div>
        
        <br></br>
        
        <p className="h3" >BestTarget <br></br> <span>$1000</span></p>
        <p className="h2">Raised <br></br><span>$2000</span></p>
      </div>
    </div>
    

    <div id="ss">

    <Card >
      <Card.Img className="img-card" src="https://images.pexels.com/photos/7887847/pexels-photo-7887847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title className="Card-Title">Name of Project</Card.Title>
        <Card.Subtitle className="Card-Subtitle"> Description <br></br> By Lerom City</Card.Subtitle>
        <Card.Text className=" text-card">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptas quam ipsam neque modi!<br></br> Necessitatibus earum fugit,
         provident explicabo laudantium <br></br> sunt officia nihil eum impedit iure commodi sapiente, eaque itaque.
        </Card.Text>
       
      </Card.Body>
      <div className= "border-Main">
        <h4></h4>
      </div>
    </Card>

    </div>
    
    {/* <div className="card-tow">
    <Card >
      <Card.Body className="body">
      <Card.Title className="Card-Title">Name of Project</Card.Title>
      <div>
        <div className="Bored">
         User1: <br></br> <br></br> User2: </div>
        <div className="circal">60 <br></br><span>Investor</span></div>
        </div>
        <h3 className="h3" >Best Target <br></br> <span>$1000</span></h3>

        <h3 className="h3">Raised <br></br><span>$2000</span></h3>
        
        
        <Button className="Button-tow" >Chat</Button>
        <Button className="Button-tow" >Vote</Button>
       
       
        
      </Card.Body>
    </Card>
    </div>


    <div className="card-one">
      <Card >
      <Card.Img className="img-card" src="https://images.pexels.com/photos/7887847/pexels-photo-7887847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title className="Card-Title">Name of Project</Card.Title>
        <Card.Subtitle className="Card-Subtitle"> Description <br></br> By Lerom City</Card.Subtitle>
        <Card.Text className=" text-card">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptas quam ipsam neque modi!<br></br> Necessitatibus earum fugit,
         provident explicabo laudantium <br></br> sunt officia nihil eum impedit iure commodi sapiente, eaque itaque.
        </Card.Text>
       
      </Card.Body>
      <div className= "border-Main">
        <h4></h4>
      </div>
    </Card>
    </div> */}


    </div>
    


    

        </main>
    )
}