import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router";

export interface Blog {
  title: string;
  discription: string;
  id: number;
  createdAt:Date
  user: {
    username: string;
  };
}

const useBlog = ()=>{
   
const navigate = useNavigate();
const [loading,setloading]  = useState(true);
const [blogs,setBlogs] = useState<Blog[]>([]);

const getBlog = async(token : string)=>{
try {
  const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
    headers:{
      Authorization:token,
    },
  })
  setBlogs(res.data.blogs)
 

  
  setloading(false);
} catch (error) {
  console.log("error in fetching the blog data from /bulk " ,error );
  
}
}

useEffect(()=>{
  const token = localStorage.getItem("token");
  
if (!token) {
  navigate("/signin"); // Redirect to signin page if no token
  return;
}
  getBlog(token);
},[])


    return {loading , blogs}
}
export default useBlog;