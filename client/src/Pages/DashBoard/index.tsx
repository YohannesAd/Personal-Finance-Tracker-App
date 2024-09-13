import { useUser } from "@clerk/clerk-react"
import { FinacialRecordForm } from "./finacial-record-form";
import { FinacialRecordList } from "./finicial-record-list";

export const Dashboard =() =>{
    const {user} = useUser();
    return (
        <div className="DashBoard-Container" >
            <h1> Welcome {user?.firstName}! Here Are your Finances</h1>
            <FinacialRecordForm />
            <FinacialRecordList />


        </div> 
        
    )
 
}