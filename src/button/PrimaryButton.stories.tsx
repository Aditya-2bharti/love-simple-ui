import React from "react";
import { PrimaryButton, LoadingButton, Button3, Button4 } from "./index";

export const ButtonPrimary = () => (
  <PrimaryButton
    text={"Hello World! Click me to show current date :)"}
    onClick={() => {
      const now = new Date();
      alert("Hello World " +  now);
      
    }}
  />
);

export const ButtonLoading = () => (
  <LoadingButton text={"Loading..."} loading />
);

export const ButtonThree = () => <Button3 text="Button 3" />;

export const ButtonFour = () => <Button4 text="Button 4" />;
