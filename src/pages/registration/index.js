const RegistrationPage = ({config}) => {
    return (
        <>
            <br />
            <form className="container">
                <div className="form-floating mb-3">
                   
                    <input type="text" className="form-control" id="firstName" name="name.first" required />
                    <label for="firstName" className="form-label">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="lastName" name="name.last" required />
                    <label for="lastName" className="form-label">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="username" name="username" required />
                    <label for="username" className="form-label">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="tel" className="form-control" id="telephone" name="telephone" required />
                    <label for="telephone" className="form-label">Telephone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" name="email" required />
                    <label for="email" className="form-label">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="apiKey" name="api.key" required />
                    <label for="apiKey" className="form-label">API Key</label>
                </div>
                <button type="submit" className="btn btn-primary">Register Device</button>
            </form>
        </>
    )
}

export default RegistrationPage;