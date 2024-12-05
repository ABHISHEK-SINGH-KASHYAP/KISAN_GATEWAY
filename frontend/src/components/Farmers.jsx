import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from './ui/button';
import { Link , useNavigate } from 'react-router-dom';


const Farmer = () => {
    const navigate = useNavigate();

  return (
    <Card className="max-w-md mx-auto mt-24 p-10 justify-center items-center">
      <CardHeader className="flex justify-center items-center">
        <CardTitle className="text-blue-600">Farmers</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Information about farmers and quantity of grains.</p>
        <div className='gap-5 space-x-20 text-center mt-3'>
       <Button onClick={() => navigate("/register")} variant="outline"  className="font-bold text-xl">
        Register
        </Button>
       <Button className='text-right font-bold text-xl' variant="outline">
        <Link to='/login'>Login</Link>
        </Button>
       </div>
      </CardContent>

    </Card>
    
    
  );
};

export default Farmer;


// import React, { useState } from 'react';
// import axios from 'axios';
// // import { useHistory } from 'react-router-dom'; // Import useHistory

// const Farmers = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     // const history = useHistory(); // Initialize useHistory

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {                                 //http://localhost:5000/
//             const response = await axios.post('http://localhost:5000/api/auth/signup', {
//                 username,
//                 password,
//             });
//             setMessage(response.data.message); // Show success message
//             // history.push('/some-route'); // Redirect to another page after signup
//         } catch (error) {
//             setMessage(error.response.data.error); // Show error message
//         }
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/auth/login', {
//                 username,
//                 password,
//             });
//             setMessage(response.data.message); // Show success message
//             // history.push('/some-route'); // Redirect to another page after login
//         } catch (error) {
//             setMessage(error.response.data.error); // Show error message
//         }
//     };

//     return (
//         <div>
//             <h1>Farmers Page</h1>
//             <form onSubmit={handleSignup}>
//                 <h2>Signup</h2>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Signup</button>
//             </form>

//             <form onSubmit={handleLogin}>
//                 <h2>Login</h2>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>

//             {message && <p>{message}</p>} {/* Display message */}
//         </div>
//     );
// };

// export default Farmers;

