import React, { useEffect, useState } from "react";
import DashNav from "../components/common/DashNav";
import bg from "../assets/img/bg.png";
import LinkTable from "../components/common/LinkTable";
import { Navigate } from "react-router";
import { authServices } from "../api";
import { getCookie } from "../components/common/Services";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const[loading,setLoading] = useState(false)

  
 
  
  useEffect(() => {
    (async () => {
      try {
        const res = await authServices.getProfile();
         setUser(res.userData)

      } catch (error) {
        console.log(error);
        setUser(null);
      }
    })();

  }, []);
  console.log(user)
  

  if(!user){
    return <Navigate to={'/'} />
  }

  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen"
    >
      <DashNav Name={user?.fullName}/>
      <LinkTable />
    </div>
  );
};

export default Dashboard;
