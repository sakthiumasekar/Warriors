import React, {usestate} from 'react'

function login() {
    const [username, setusername] = usestate
    const [password, setpassword] = usestate
    const [error, seterror] = usestate
    const [handlelogin] = usestate
    if (username === '' || password === '') {
        setError('Please enter both username and password');
        return;
    }
}
function newlogin(){
    const [username, setusername] = usestate
    const [password, setpassword] = usestate
    const [contactnumber, setcontactnumber] = usestate
    const [email, setemail] = usestate
    const [confirmpassword, setconfirmpassword] = usestate
}
  return (
    <div>
        classname ="loginpage"
        <h3>Login</h3>
        <button>Login</button>
        





      
    </div>
  )


export default login;
