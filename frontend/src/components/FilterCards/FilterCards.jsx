import { RadioGroup } from '@radix-ui/react-radio-group';
import React from 'react';
import { RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

const FilterCards = () => {
  const filterData = [
    {
      filterType: "Location",
      array: ["Delhi", "Pune", "Hyderabad", "Bangalore"],
    },
    {
      filterType: "Role",
      array: ["Developer", "QA", "Networking"],
    },
    {
      filterType: "Salary",
      array: ["50k", "60k", "70k"],
    },
  ];

  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg shadow-xl'>Filter Job</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((item, index) => (
          <div key={index}>
            <h1 className='font-bold text-lg shadow-xl'>{item.filterType}</h1>
            {item.array.map((data, idx) => (
              <div key={idx} className='flex items-center space-x-2 my-2'>
                <RadioGroupItem value={data} />
                <Label>{data}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCards;
