import { useState } from "react"
import { EmailForm } from "../components/EmailForm"
import { EmailSentForm } from "../components/EmailSentForm"


const RecoveryPassword = () =>{
    const [email , setEmail] = useState('')
    
    if(email){
        return(<EmailSentForm email={email}/>)
    } 
    return(
        <>
            <EmailForm setEmail={setEmail}/>
        </>
    )
}


export default RecoveryPassword