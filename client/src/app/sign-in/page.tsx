"use client"
import CardCenter from "@/components/CardCenter";
import Input from "@/components/Input";
import { useState } from "react";

export default function SingIn(){

    const [value, setValue] = useState("")

    return (
        <CardCenter> 
            <Input label="Email" onChange={(e)=>{console.log('r',e.target.value)}} value={""}/>
            <Input hiddenValue={true} value={value} label="Senha" onChange={(e)=>setValue(e.target.value)}/>
            <Input hiddenValue={false} value={value} label="Confirmar Senha" onChange={(e)=>setValue(e.target.value)}/>
        </CardCenter>
    )
}  