"use client"
import CardCenter from "@/components/CardCenter";
import Input from "@/components/Input";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function SingIn(){

    const [email, setEmail] = useState("")
    const [firstPassword, setFirstPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
    const [visibillityPwd, setVisibillityPwd ] = useState(true)

    return (
        <CardCenter> 
            <Input label="Email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            <Input hiddenValue={visibillityPwd} value={firstPassword} label="Senha" onChange={(e)=>setFirstPassword(e.target.value)}/>
            <Input hiddenValue={visibillityPwd} value={secondPassword} label="Confirmar Senha" onChange={(e)=>setSecondPassword(e.target.value)}/>
            <Button onClick={()=> setVisibillityPwd(!visibillityPwd)}> Change visibillity </Button>
        </CardCenter>
    )
}  