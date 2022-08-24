import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({
  user: undefined,
  setUser: () => {},
  loading: true,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // TODO: fetch real user data
  // fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
          setUser(data[0]);
          setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserContext;
