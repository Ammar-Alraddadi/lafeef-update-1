import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles.css"

export default function Main(){
    return (
      
        <main class> 
      <div className="Main-card">
     

     <div className="roow">
      
    <div className="card-tow">
    <Card >
      <Card.Body>
      <Card.Img  className="img-card"  src="https://images.pexels.com/photos/7887847/pexels-photo-7887847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Text className=" text-card">
        Name of the Project
        </Card.Text>
        <Card.Subtitle className="Card-Subtitle">
        description: <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptas quam ipsam neque modi!<br></br> Necessitatibus earum fugit,
         provident explicabo laudantium sunt officia nihil eum impedit iure commodi sapiente, eaque itaque.
        </Card.Subtitle>
        <div className="boarder1"></div>
       
        
      </Card.Body>
    </Card>
    </div>
    </div>

   

    <div className="card-one">

      <div id="firstC">
      <h1 className="title">Shareholder Comments</h1>
      <div className="Bored">
         User1: <br></br> <br></br> 
         User2: 
         </div>
        <Button className="Button-tow" > Chat </Button>
        <Button className="Button-tow" > Vote </Button>
      </div>
      
      <div id="secondC">
       
        <div className="circal"> 60 <br></br><span>Investor</span></div>
        <br/>
        
        <p className="h3" >Best Target <br></br> <span>$1000</span></p>

        <p className="h2">Raised <br></br><span>$2000</span></p>
      </div>
        
        
        
        

    </div>

    


    </div>

        </main>
    )
}