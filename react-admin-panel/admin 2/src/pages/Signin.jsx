import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { TOAST_CONFIG } from "../utils/configs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitSingIn = () => {
    let status = 200;
    axios
      .post("https://demo-api-one.vercel.app/api/signin", {
        email,
        password,
      })
      .then((res) => {
        toast.success(res.data.message, TOAST_CONFIG);
        localStorage.setItem("token", res.data.body);
        navigate("/signin/success");
      })
      .catch((e) => {
        const errorMsg = e.response.data.message || "Алдаа гарлаа";
        toast.error(errorMsg, TOAST_CONFIG);
      });

    // fetch("https://demo-api-one.vercel.app/api/signin", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then((res) => {
    //     status = res.status;
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (status !== 200) {
    //       toast.error(data.message, TOAST_CONFIG);
    //     } else {
    //       toast.success(data.message, TOAST_CONFIG);
    //       localStorage.setItem("token", data.body);
    //       navigate("/signin/success");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                submitSingIn();
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Link to={"/signup"}>
                  <Button
                    variant="outline-success"
                    type="button"
                    className="me-3"
                  >
                    Sign up
                  </Button>
                </Link>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
