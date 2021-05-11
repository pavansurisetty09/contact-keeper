import React, { useContext, useEffect } from "react";
import ContactFilter from "../contacts/ContactFilter";
import Contacts from "../contacts/Contacts";
import ContactsForm from "../contacts/ContactsForm";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactsForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
