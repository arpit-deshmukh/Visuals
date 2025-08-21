import axios, { HttpStatusCode } from "axios"
import { useNavigate } from "react-router-dom";

import { createContext, useContext,useState } from "react";


export const AuthContext  = createContext({});

const client = axios.create({
    baseURL:"http://localhost:8080/api/v1/users"
})

export const AuthProvider = ({children}) =>{

    // const authContext = useContext(AuthContext);

    const[userData,setUserData] = useState({});

    

    const handleRegister = async(name,username,password)=>{
        try{
            let request = await client.post("/register",{
                name: name,
                username:username,
                password:password
            })
            if(request.status === HttpStatusCode.Created){
                return request.data.message;
                router("/");

            }
        }catch(e){
            throw e;

        }
    }
    const handleLogin = async(username,password)=>{
        try{
            let request = await client.post("/login",{
                username:username,
                password:password
            });
            if(request.status === HttpStatusCode.Ok){
                localStorage.setItem("token",request.data.token);
                router("/");
            }
        }catch(e){
            throw e;
        }   
    }

    const router = useNavigate();
    const data = {
        userData,
        setUserData,
        handleRegister,
        handleLogin
    }
        


    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}