import axios from "../utils/axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    
    try {
      const response = await axios("auth/logout", { withCredentials: true });
      setAuth({});
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
