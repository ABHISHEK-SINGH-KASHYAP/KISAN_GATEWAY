import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from './ui/button';

const DistrictWarehouses = () => {
  return (
    <Card className="max-w-md mx-auto p-4">
      <CardHeader>
        <CardTitle className="text-yellow-600">District Warehouses</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Information on district-level warehouses.</p>
        <div className='gap-5 space-x-20 text-center mt-3'>
       <Button className='text-right font-bold text-xl' variant="outline">Login</Button>
       </div>
      </CardContent>
    </Card>
  );
};

export default DistrictWarehouses;
