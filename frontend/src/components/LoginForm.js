const { useState } = require("react")
const { Form, Link } = require("react-router-dom")
const {useNavigate} = require("react-router-dom")

const LoginForm = ({setLoginUser}) => {

    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            email, password
        }

        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if(!response.ok){
            setErr(json.error)
        }
        if (response.ok){
            setErr(null)
            setLoginUser(json.user)
            alert('Login Successfull!')
            history("/")
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email:</label>
            <input 
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
            />

            <label>Password:</label>
            <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} 
            />
            <p><Link to="/register">click here</Link> to register.</p>
        <button>Login</button>
        {err && <div className="error">{err}</div>}
        </form>
    )
}

export default LoginForm