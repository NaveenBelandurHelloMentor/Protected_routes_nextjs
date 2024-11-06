// HOC for Authentication
import { useEffect } from "react";
import { redirect } from "next/navigation"; 

export const withAuth = (WrappedComponent) => {
  return function WithAuth(props) {

    const session = true;  

    useEffect(() => {
      if (!session) {
        redirect("/"); 
      }
    }, [session]);


    if (!session) {
      return null;
    }


    return <WrappedComponent {...props} />;
  };
};





export default withAuth;