import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MyAccount from "./MyAccount";
const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [myaccount, setMyAccount] = useState(true);

  function handleLogin(e) {
    e.preventDefaltu();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setMyAccount(!myaccount);
      setFlag(false);
    }
  }

  return (
    <div>
      {" "}
      {myaccount ? (
        <form onSubmit={handleLogin}>
          <div>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name" fontWeight="450" color="black">
                Email address
              </FormLabel>
              <Input
                id="first-name"
                placeholder="Email address"
                borderRadius="none"
                className="form-control"
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </FormControl>
          </div>
          <div>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name" fontWeight="450" color="black">
                Password
              </FormLabel>
              <Input
                id="first-name"
                placeholder="Password"
                borderRadius="none"
                type="password"
                className="form-control"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </FormControl>
          </div>
          <br />
          <br />
          <Button
            colorScheme="none"
            border="2px solid black"
            borderRadius="none"
            color="black"
            width="340px"
            type="submit"
            className="Login-btn"
          >
            Login
          </Button>
          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <MyAccount />
      )}
    </div>
  );
};

export default Login;
