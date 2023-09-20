'use client'

import Image from 'next/image'
import React, {useState} from 'react'
import { Input, Button, Box } from '@chakra-ui/react';

export default function Home() {



  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform validation and submit the data to a server for processing.
    // For simplicity, we'll just set the submittedData state with the form data.
    setSubmittedData(formData);
  };

  const starCover = (param) => {
    // Replace each character in the param with an asterisk
    return '*'.repeat(param.length);
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {/* ... Logo and other content */}
      </div>
      <div>
        Welcome to the ramp-up!
      </div>
      <form onSubmit={handleSubmit}>
        <div className="font-bold">
          Credit Card Information:
        </div>
        <Input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="cardHolder"
          placeholder="Card Holder"
          value={formData.cardHolder}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="expirationDate"
          placeholder="Expiration Date"
          value={formData.expirationDate}
          onChange={handleInputChange}
          required
        />
        <Input
          type="password"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" className="bg-sky-600" colorScheme='blue'>
          Submit
        </Button>
      </form>
      {submittedData && (
        <Box mt={4}>
          <div className="font-bold">Submitted Credit Card Information:</div>
          <div>Card Number: {submittedData.cardNumber}</div>
          <div>Card Holder: {submittedData.cardHolder}</div>
          <div>Expiration Date: {submittedData.expirationDate}</div>
          <div>CVV: {starCover(submittedData.cvv)}</div>
        </Box>
      )}
    </main>
  );
}