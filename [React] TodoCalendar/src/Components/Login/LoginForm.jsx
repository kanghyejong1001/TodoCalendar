const LoginForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit & onSubmit()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input 
                type="text" 
                name="name" 
                placeholder="ID"
                onChange={}
            />
            <input 
                type="password" 
                name="password" 
                placeholder="password"
                onChange={}
            />
            <button type="submit">Login</button>
        </form>

    )

}

export default LoginForm