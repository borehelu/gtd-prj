import axios from "../utils/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    try {
      setAuth({});
      const response = await axios("auth/logout", { withCredentials: true });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
