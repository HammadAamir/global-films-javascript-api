const { useState } = require("react")
const { Form, Link } = require("react-router-dom")

const RegisterForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            name, email, password
        }

        const response = await fetch('/register', {
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
            alert('Registration Successfull!')
            window.location.href = '/';
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Register</h3>

            <label>Name:</label>
            <input 
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name} 
            />

            <label>Email:</label>
            <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
            />

            <label>Password:</label>
            <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} 
            />
            
            <p><Link to="/login">click here</Link> to login.</p>
        <button>Register</button>
        {err && <div className="error">{err}</div>}
        </form>
    )
}

export default RegisterForm