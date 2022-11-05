import styles from "../styles/Login.module.css";
import { useState } from "react";
import { postApi } from "../src/api";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await postApi
      .login({
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userID", res.user);
        localStorage.setItem("nickname", res.nickname);
        router.push("/");
      })
      .catch((e) => console.error(e));
  };
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <div className={styles[`home-title`]}>
        감정의 셀프
        <br />
        기자회견
      </div>
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChangeUsername}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <button type="submit" onClick={handleLogin}>
            비밀번호 변경
          </button>
        </form>
      </div>
    </div>
  );
}
