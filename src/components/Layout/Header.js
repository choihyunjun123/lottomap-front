import "./Header.css";
import { useEffect, useState, useRef } from "react";
import { ReactComponent as HeaderLogo } from "../../image/HeaderLogo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const searchRef = useRef();
    const id = window.sessionStorage.getItem("id");
    const [loginState, setLoginState] = useState();

    // sessgion id 값 가져오기
    useEffect(() => {
        if (id === null) {
            setLoginState("nologin"); // 비로그인
        } else if (id === "admin") {
            setLoginState("admin"); // 관리자
        } else {
            setLoginState("user"); // 유저
        }
    }, []);

    // 로고 click 이벤트
    const headerLogo = () => {
        // searchRef.current.value = "";
        navigate("/");
        window.location.reload();
    };

    // 판매점 click 이벤트
    const headerItem = () => {
        navigate("/store");
    };

    // 고객센터 click 이벤트
    const headerCs = () => {
        navigate("/cs/notice");
    };

    // 로그인 click 이벤트
    const headerLogin = () => {
        navigate("/login");
    };

    // 관리자페이지 click 이벤트
    const headerAdmin = () => {
        navigate("/admin/main");
        window.location.reload();
    };

    // 마이페이지 click 이벤트
    const headerMyPage = () => {
        navigate("/mypage");
    };

    // 로그아웃 click 이벤트
    const headerLogout = () => {
        sessionStorage.clear("id");
        navigate("/");
        window.location.reload();
    };

    return (
        <div className="headerTop">
            <div>
                <input
                    type="button"
                    className="headerSearchIcon"
                    onKeyDown={(e) => {}}
                ></input>
                <input type="text" className="headerSearchBox"></input>
            </div>
            <HeaderLogo
                className="headerLogo"
                onClick={() => {
                    headerLogo();
                }}
            />
            <div className="headerRight">
                <div
                    onClick={() => {
                        headerItem();
                    }}
                >
                    판매점
                </div>
                <div
                    onClick={() => {
                        headerCs();
                    }}
                >
                    고객센터
                </div>
                <div>
                    {/* {비로그인} */}
                    {loginState === "nologin" && (
                        <headerLogin
                            onClick={() => {
                                headerLogin();
                            }}
                        >
                            로그인
                        </headerLogin>
                    )}
                    {/* {관리자} */}
                    {loginState === "admin" && (
                        <headerAdmin
                            onClick={() => {
                                headerAdmin();
                            }}
                        >
                            관리자페이지
                        </headerAdmin>
                    )}
                    {/* {유저} */}
                    {loginState === "user" && (
                        <headerMypage
                            onClick={() => {
                                headerMyPage();
                            }}
                        >
                            마이페이지
                        </headerMypage>
                    )}
                    {loginState === "nologin" || (
                        <headerLogout
                            onClick={() => {
                                headerLogout();
                            }}
                            className="headerNoLogin"
                        >
                            로그아웃
                        </headerLogout>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
