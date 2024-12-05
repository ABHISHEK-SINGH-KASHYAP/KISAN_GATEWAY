import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from './ui/button';

const FairPriceShops = () => {
  return (
    <Card className="max-w-md mx-auto p-4">
      <CardHeader>
        <CardTitle className="text-red-600">Fair Price Shops (FPS)</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Details about Fair Price Shops and their beneficiaries.</p>
        <div className='gap-5 space-x-20 text-center mt-3'>
       <Button variant="outline" className="font-bold text-xl">Login</Button>
       </div>
      </CardContent>
    </Card>
  );
};

export default FairPriceShops;
