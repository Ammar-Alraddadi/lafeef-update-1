import React from 'react';
import { Container } from 'react-bootstrap';


function BottomNav({t}){
    return(
        <div className='Bottom-nav'>
        
              <ul >
                    <li>
                        <a className="" href="#">
                        {t("Home")}
                        </a>
                    </li>
                    <li>
                    <a className="" href="#">
                        {t("Invest")}
                        </a>
                    </li>
                    <li>
                    <a className="" href="#">
                        {t("Raise")}
                        </a>
                    </li>
                    <li>
                    <a className="" href="#">
                        {t("Projects")}
                        </a>
                    </li>
                    <li>
                    <a className="" href="#">
                        {t("About")}
                        </a>
                    </li>
                </ul>
          
           
       </div>
            )
    }

export default BottomNav;