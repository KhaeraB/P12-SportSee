// import reacr
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
// import perso
import yoga from '../../assets/yoga.svg'
import swim from '../../assets/swim.svg'
import bike from '../../assets/bike.svg'
import bodybuilding from '../../assets/bodybuilding.svg'
import "./style.scss"

/**
 * @component
 * @description Render of the Footer
 * @function footer
 * @param {*}
 * @returns {jsx}
 */
function Footer()
{
    return (
        <aside className='d-flex justify-content-center align-items-center flex-column'>
            <Container className='blockIcons aside'>
                <Link to="/">
                    <img className='icons' src={yoga} alt="icon yoga" /> 
                </Link>
                <Link to="/">
                    <img className='icons' src={swim} alt="icon swim" /> 
                </Link>
                <Link to="/">
                    <img className='icons' src={bike} alt="icon bike" /> 
                </Link>
                <Link to="/">
                    <img className='icons' src={bodybuilding} alt="icon bodybuilding" /> 
                </Link>

                <div className="copyright">Copiryght, SportSee 2020</div>
            </Container>
        </aside>
    )
}

export default Footer