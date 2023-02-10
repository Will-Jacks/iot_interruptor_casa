import './header.css';
import logo from "../../Favico/android-chrome-192x192.png"
export default function Header() {
    return(
        <div>
            <div className="header-container">
                <img src={logo} alt="Logo" className='img-header' />
            </div>
            <h1 className='titulo-principal'>Interruptor Inteligente</h1>
        </div>

    )
}