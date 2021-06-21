import React from "react";

const user = () => {
  let firstName: String = "Vinh";
  let lastName: String = "Nguyen";
  let isLoading: boolean = true;

  return (
    <h1>
      {firstName} {lastName} posts page
    </h1>
  );
};

export default user;
