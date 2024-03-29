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

    function register(){
        return {}
    }

    return (
        <CardCenter> 
            <Input label="Email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            <Input isPassword={true} value={firstPassword} label="Senha" onChange={(e)=>setFirstPassword(e.target.value)}/>
            <Input isPassword={true} value={secondPassword} label="Confirmar Senha" onChange={(e)=>setSecondPassword(e.target.value)}/>
            <Button className="primary" onClick={()=> setVisibillityPwd(!visibillityPwd)}> Cadastrar </Button>
        </CardCenter>
    )
}  