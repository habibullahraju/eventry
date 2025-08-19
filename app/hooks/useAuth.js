const { useContext } = require("react");
const { AuthContext } = require("../contexts");

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return { auth, setAuth };
};

export { useAuth };
