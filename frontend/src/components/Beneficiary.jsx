import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from './ui/button';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import { Link, Routes, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';


const Benefciary = () => {
  const navigate = useNavigate();

  return (
    <Card className="max-w-md mx-auto p-4">
      <CardHeader>
        <CardTitle className="text-blue-600 font-bold">Mandis / Purchase Centers</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Information about Mandis and purchase centers.</p>
       <div className='gap-5 space-x-20 text-center mt-3'>
       <Button onClick={() => navigate("/register")} variant="outline"  className="font-bold text-xl">
        Register
        </Button>

       <Button className='text-right font-bold text-xl' variant="outline">
       <Link to='/login'>Login</Link>
        </Button>
       </div>
        
      </CardContent>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        </Routes>
    </Card>
  );
};

export default Benefciary;
