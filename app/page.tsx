"use client";

// import Image from 'next/image'
import React, { FormEvent, ChangeEvent, useState } from "react";
import { Input, Button, Box } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import cat from "./cat&dog.jpeg";
import angry_cat from "./angry_cat.jpeg";
import cat_money from "./cat_money.webp";
import rich_cat from "./rich_cat.jpeg";

export default function Home() {
  interface FormData {
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvv: string;
  }

  // const [formData, setFormData] = useState<FormData>({
  //   cardNumber: "",
  //   cardHolder: "",
  //   expirationDate: "",
  //   cvv: "",
  // });
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setSubmittedData(data);
  };

  const [cardNumberError, setCardNumberError] = useState<string | null>(null);
  const [expirationDateError, setExpirationDateError] = useState<string | null>(
    null
  );

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   // Input validation for card number (allow only integers)
  //   if (name === "cardNumber" && !/^\d*$/.test(value)) {
  //     setCardNumberError("Card number should only contain digits");
  //   } else {
  //     setCardNumberError(null);
  //   }

  //   // Input validation for expiration date (mm/yy format)
  //   // if (name === 'expirationDate' && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
  //   //   setExpirationDateError('Expiration date should be in mm/yy format (e.g., 05/23)');
  //   // } else {
  //   //   setExpirationDateError(null);
  //   // }

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const images = [cat, angry_cat, cat_money, rich_cat];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Here, you can perform validation and submit the data to a server for processing.
  //   // For simplicity, we'll just set the submittedData state with the form data.
  //   setSubmittedData(formData);
  // };

  const starCover = (param: string) => {
    return "*".repeat(param.length);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="text-2xl font-bold mb-5">Credit Card Stealer</div>
      <div>
        <img
          src={images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          style={{ height: "400px" }}
        />
      </div>
      <div>
        <Button
          type="submit"
          onClick={handleClick}
          className="bg-sky-600"
          colorScheme="blue"
        >
          Next Image
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-bold">Credit Card Information:</div>
        <Input
          {...register("cardNumber")}
          placeholder="Card Number"
          required
          isInvalid={cardNumberError !== null}
        />
        {cardNumberError && (
          <div className="text-red-500">{cardNumberError}</div>
        )}
        <Input
          type="text"
          {...register("cardHolder")}
          placeholder="Card Holder"
        />
        <Input
          type="text"
          {...register("expirationDate")}
          placeholder="Expiration Date (mm/yy)"
          required
          isInvalid={expirationDateError !== null}
        />
        {/* {expirationDateError && (
          <div className="text-red-500">{expirationDateError}</div>
        )} */}
        <Input
          type="password"
          {...register("cvv")}
          placeholder="CVV"
          required
        />
        <Button type="submit" className="bg-sky-600" colorScheme="blue">
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
