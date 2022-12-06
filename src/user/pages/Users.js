import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "John",
      image:
        "https://i.pinimg.com/originals/96/5d/30/965d309aa4e3c8f25966d0069843f1db.jpg",
      places: 3,
    },
    {
      id: 2,
      name: "Anuj",
      image:
        "https://i.pinimg.com/originals/96/5d/30/965d309aa4e3c8f25966d0069843f1db.jpg",
      places: 5,
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
