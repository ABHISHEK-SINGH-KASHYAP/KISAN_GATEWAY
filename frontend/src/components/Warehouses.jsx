import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from './ui/button';


const Warehouses = () => {
  return (
    <Card className="max-w-md mx-auto p-4">
      <CardHeader>
        <CardTitle className="text-green-600">State Warehouses</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Details on surplus and deficit state warehouses.</p>
        <div className='gap-5 space-x-20 text-center mt-3'>
       <Button className='text-right font-bold text-xl' variant="outline">Login</Button>
       </div>
      </CardContent>
    </Card>
  );
};

export default Warehouses;