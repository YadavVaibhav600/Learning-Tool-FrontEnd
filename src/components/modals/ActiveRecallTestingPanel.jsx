// this file contains the testing component which will appear 

import React , {useState} from react; 


const ActiveRecallTestingPanel = ({StartSession , CloseSession, SessionTopic , SessionSubTopic ,QuestionType, checkAnswer , nextquestion , onClose , currentQuestion}) =>{
    
// function description 
// onclose() > a function , which will trigger , when user will press close 
// it will be used in conditional rendering of this component , will be linked to parent container 
// defining the constants state as of now....., will make the window completely disappear 

    const [answer , setAnswer] = useState("");











    return(
        <div>
             {/* header section */}
             <div>
                <span>
            <h2>{SessionTopic} {SessionSubTopic}</h2>
            <button onClick={() => onclose()}>*</button>
                </span>
            </div> 

            {/* content section */}
            <div>

            </div>


            <div>

            </div>






                
               
            
    

             {/* navigation section */}
             <p></p>


             {/* progress section */}



        </div>
    )







}







// exporting the component 
export default ActiveRecallTestingPanel; 