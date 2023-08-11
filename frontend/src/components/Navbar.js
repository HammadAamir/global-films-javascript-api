import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({user, setLoginUser}) => {
    const history = useNavigate()
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Film Container</h1>
                </Link>
                {user && 
                    <div style={{float: 'right'}} >
                        <h4 style={{display: 'inline', marginRight: '20px'}}>{user.name}</h4>
                        <button className="logout-button" onClick={()=>{
                            setLoginUser(null)
                            history("/")
                        }}>Logout</button>    
                    </div>
                }
            </div>
        </header>
    )
}

export default Navbar;