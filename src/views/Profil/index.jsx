import React from "react"
import { Container } from 'react-bootstrap'
import './style.scss'


function Profil(id){
    return (
        <Container className="content">
            <h1 id={id}> User</h1>
        </Container>
    )
}

export default  Profil