import React from 'react';
import MetricCard from './MetricCard';
import rationIcon from './icons/farmer.png'; 
import farmerIcon from './icons/food-donation.png';

function CardInfo() {
  return (
    <div className="flex flex-wrap gap-4 mt-5 p-8 rounded-lg  bg-gray-100">
      <MetricCard 
        title="कुल राशन कार्ड / लाभार्थी" 
        value="3.56 करोड़ / 14.99 करोड़" 
        date="12-Nov-2024 21:00" 
        icon={rationIcon} 
        color="#34D399" 
      />
      <MetricCard 
        title="लाभार्थी आधार सीडिंग (वैलेडेशन)" 
        value="14.98 करोड़" 
        date="12-Nov-2024 21:00" 
        icon={farmerIcon} 
        color="#F59E0B" 
      />
          <MetricCard 
        title="कुल राशन कार्ड / लाभार्थी" 
        value="8.56 करोड़ / 14.99 करोड़" 
        date="19-Nov-2024 21:00" 
        icon={rationIcon} 
        color="#34D399" 
      />
          <MetricCard 
        title="कुल राशन कार्ड / लाभार्थी" 
        value="12.56 करोड़ / 14.99 करोड़" 
        date="12-Nov-2024 21:00" 
        icon={rationIcon} 
        color="#34D399" 
      />
          <MetricCard 
        title="कुल राशन कार्ड / लाभार्थी" 
        value="2.56 करोड़ / 14.99 करोड़" 
        date="15-Sep-2024 21:00" 
        icon={rationIcon} 
        color="#34D399" 
      />
         <MetricCard 
        title="कुल राशन कार्ड / लाभार्थी" 
        value="4.67 करोड़ / 14.99 करोड़" 
        date="14-Dec-2024 21:00" 
        icon={rationIcon} 
        color="#34D399" 
      />
         <MetricCard 
        title="कुल राशन कार्ड / लाभार्थी" 
        value="4.67 करोड़ / 14.99 करोड़" 
        date="12-Oct-2024 21:00" 
        icon={rationIcon} 
        color="#34D399" 
      />
         <MetricCard 
        title="कुल राशन कार्ड / लाभार्थी" 
        value="13.56 करोड़ / 14.99 करोड़" 
        date="12-Jan-2024 21:00" 
        icon={rationIcon} 
        color="#34D399" 
      />
         <MetricCard 
        title="कुल राशन कार्ड / लाभार्थी" 
        value="3.56 करोड़ / 14.99 करोड़" 
        date="14-Nov-2024 21:00" 
        icon={rationIcon} 
        color="#34D399" 
      />
      
    </div>
  );
}

export default CardInfo;
