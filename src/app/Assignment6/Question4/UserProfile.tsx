import React from "react";

interface Prop{
  name : string,
  email : string,
  phone : number
}
export default function UserProfile({ name, email, phone }:Prop) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: <span data-testid="user-name">{name}</span></p>
      <p>Email: <span data-testid="user-email">{email}</span></p>
      <p>Phone: <span data-testid="user-phone">{phone}</span></p>
    </div>
  );
}
