import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export interface Userdata {
  id: number;
  username: string;
  blogs: Blog[] 
}
export interface Blog {
  id:number;
  title: string;
  discription: string; 
  createdAt: Date;
}

const useProfileData = () => {
  const [loading, setloading] = useState(true);
  const [userdata, setUserdata] = useState<Userdata>();

  const getBlog = async (token: string, id: number) => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/v1/user/getuser/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      setUserdata(res.data.user);

      setloading(false);
    } catch (error) {}
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found in localStorage");
    }

    const user: any = jwtDecode(token);

    if (!user.id) {
      throw new Error("Invalid token payload");
    }

    getBlog(token, user.id);
  }, []);

  return { loading, userdata };
};
export default useProfileData;
