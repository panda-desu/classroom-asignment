import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function SigninSuccess({ setMe }) {
  const navigate = useNavigate();
  useEffect(() => {
    let status = 200;

    axios
      .post("https://demo-api-one.vercel.app/api/users/me")
      .then((res) => {
        setMe(res.data.body);
        localStorage.setItem("me", JSON.stringify(res.data.body));
        navigate("/");
      })
      .catch((e) => {
        const errorMsg = e.response.data.message || "Алдаа гарлаа";
        console.log(errorMsg);
        navigate("/signin");
      });

    // fetch("https://demo-api-one.vercel.app/api/users/me", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.getItem("token"),
    //   },
    // })
    //   .then((res) => {
    //     status = res.status;
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (status === 200) {
    //       setMe(data.body);
    //       localStorage.setItem("me", JSON.stringify(data.body));
    //       navigate("/");
    //     } else {
    //       console.log(data.message);
    //       navigate("/signin");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className="w-100 m-vh-100 d-flex align-items-center justify-content-center"></div>
  );
}
