"use client"

import Link from 'next/link';
import { Button } from 'react-bootstrap';
import CardCenter from '@/components/CardCenter';
import "./index.scss"
import Input from '@/components/Input';

export default function Login() {

    return (
        <CardCenter>

            <div className="mb-md-5 mt-md-4 pb-5">

                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Por favor, insira seu email e senha!</p>

                <Input
                    value={""}
                    label="Email"
                    onChange={() => console.log('teste')} />


                <div className="form-outline form-white mb-4 input-sign">
                    <label className="form-label"> Senha </label>
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                    {/*  for="typePasswordX" */}
                </div>

                <p className="small mb-5 pb-lg-2"><Link className="text-white-50" href="/forgot-password">Esqueceu sua senha?</Link></p>

                <Button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={() => alert("Login")}>
                    Entrar
                </Button>

                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                </div>

            </div>

            <div>
                <p className="mb-0">Ainda não tem uma conta? <Link href="/sign-in" className="text-white-50 fw-bold">Cadastrar</Link>
                </p>
            </div>
        </CardCenter >
    )
} 