import { useState } from "react";

export const useToken = ({ email }) => {
  const [token, setToken] = useState("");

  if (email) {
    fetch()
      .then((response) => response.json())
      .then((token) => {
        setToken(token)
        localStorage.setItem("token",token)
    });
  }
};
