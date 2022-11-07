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
        if (res !== "Invalid username or password") {
          localStorage.setItem("userID", res.user);
          localStorage.setItem("nickname", res.nickname);
          localStorage.setItem("isLogin", "true");
        }
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
    <div className={styles.main}>
      <div className={styles[`title-wrapper`]}>
        <div className={styles[`login-title`]}>감정의 셀프 기자회견</div>
        <div className={styles[`login-subtitle`]}>솔직한 나를 만나는 시간</div>
      </div>
      <div>
        <form className={styles[`login-form`]}>
          <input
            placeholder="아이디"
            type="text"
            name="username"
            value={username}
            onChange={handleChangeUsername}
          />
          <input
            placeholder="비밀번호"
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </form>
        <div className={styles[`authentication-buttons`]}>
          <button
            type="submit"
            className={styles[`login-button`]}
            onClick={handleLogin}
          >
            로그인
          </button>
          <button
            type="submit"
            className={styles[`signup-button`]}
            onClick={() => {
              router.push("/signup");
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
