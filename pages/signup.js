import {IMAGES_MANIFEST} from "next/dist/shared/lib/constants";
import React, { useEffect, useState, useCallback } from "react";
import { postApi, getApi } from '../src/api';

export default function Signup() {
    const [username, setUsername] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [isDifferentPassword, setIsDifferentPassword] = useState(false);
    const checkDuplicateUsername = () => {
        event.preventDefault();
        getApi.checkDuplicateUsername(username);
    }
    const handleSignup= (event) => {
        event.preventDefault();
        postApi.signup({username, password, nickname});
    }
    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleChangeNickname= (event) => {
        setNickname(event.target.value);
    }
    const handleChangePassword= (event) => {
        setPassword(event.target.value);
    }
    const handleChangePasswordCheck= (event) => {
        setPasswordCheck(event.target.value);
    }
    const DifferentPasswordWarning = () => (
        <div>
            비밀번호가 일치하지 않습니다.
        </div>
    )
    return (
        <div>
            <div>
                <div>
                    감정의 셀프 <br/>
                    기자회견
                </div>
                <div>
                    <form>
                        <label>아이디</label>
                        <div>
                            <input
                            type="text"
                            id = "username"
                            name="username"
                            placeholder="아이디"
                            value={username}
                            onChange={handleChangeUsername}
                            />
                            <div>
                                <button type="submit" onClick = {checkDuplicateUsername}>아이디 중복확인</button>
                                아이디 중복 확인 체크해주세요
                            </div>
                        </div>
                        <div>
                            비밀번호
                            <input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={handleChangePassword}
                            />
                            <input
                            type="password"
                            name="passwordCheck"
                            placeholder="비밀번호 확인"
                            value={passwordCheck}
                            onChange={handleChangePasswordCheck}
                            />
                            {isDifferentPassword ? <DifferentPasswordWarning/> : null}
                        </div>
                        <div>
                            닉네임
                            <input
                            type="text"
                            name="nickname"
                            placeholder="닉네임"
                            value={nickname}
                            onChange={handleChangeNickname}
                            />
                        </div>
                    </form>
                    <button type="submit" onClick = {handleSignup}>회원가입</button>
                </div>
            </div>
        </div>
    )
}

