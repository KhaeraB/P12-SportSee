// import react
import React from 'react'
import { Link } from "react-router-dom"

// import perso
import "./style.scss"

// datas
import { USER_MAIN_DATA }  from "../../mock/data"
import './style.scss'; 
/**
 * Render of Home page
 * @function Home
 * @param {*}
 * @returns {jsx}
 */
 export default function Home()
{
    return (
        <div className="content">

            <h1>Accueil</h1> 
            <h3>Choisisez un profil : </h3>
            <div className='link'>

                {
                    USER_MAIN_DATA.map(user => (
                        <Link to={`/profil/${user.id}`} key={user.id} >
                            Voir le profil de <span> {user.userInfos.firstName}</span>
                        </Link>
                    ))
                }

            </div>

        </div>
    )
}
