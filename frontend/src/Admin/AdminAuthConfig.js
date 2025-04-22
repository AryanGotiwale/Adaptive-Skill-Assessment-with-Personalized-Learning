export const getPassword = () => {
    return localStorage.getItem("adminPassword") || "1234"; // Default password
  };
  
  // Function to update the password
  export const setPassword = (newPassword) => {
    localStorage.setItem("adminPassword", newPassword);
  };
  