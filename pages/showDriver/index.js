import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/alldriver'); // Replace with your API endpoint
      setData(response.data.data); // Extract the 'data' property from the response
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);
  return (
    <div className="container mx-auto mt-10">
    <h1 className="text-2xl font-bold mb-4 text-center">ALL DRIVER TABLE</h1>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Driver ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vehicle Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              License Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact Number
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.DriverID}>
              <td className="px-6 py-4 whitespace-nowrap">{item.DriverID}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.VehicleNumber || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.LicenseNumber || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.ContactNumber || 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
    )
}

export default index