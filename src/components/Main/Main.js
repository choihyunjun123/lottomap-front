import "./Main.css";

const Main = () => {
    return (
        <div className={"allWrap"}>
            <div className={"leftWrap"}>
                <div className={"lottoName"}>로또6/45</div>
                <div className={"leftLine"}></div>
                <div className={"resultName"}>
                    <strong>1098회</strong>&nbsp;
                    <span>당첨결과</span>
                </div>
                <div className={"resultDate"}>(2023-12-16 추첨)</div>
                <div className={"resultNumber"}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>+</span>
                    <span>보너스</span>
                </div>
                <div className={"winner"}>1등 총 당첨금</div>
                <div className={"winnerPriceWrap"}>
                    <div className={"winnerMoney"}>251억원</div>
                    <div className={"winnerPeople"}>(13명/19억)</div>
                </div>
                <div className={"winnerButtonWrap"}>
                    <input
                        type="button"
                        value="회차별 당첨결과"
                        className={"winnerButton"}
                    ></input>
                </div>
            </div>
            <div className={"rightWrap"}>
                <div className={"lottoName"}>연금복권720+</div>
                <div className={"rightLine"}></div>
                <div className={"resultName"}>
                    <strong>1098회</strong>&nbsp;
                    <span>당첨결과</span>
                </div>
                <div>추첨 날짜</div>
                <div>
                    <div>
                        1등 연금 당첨금액
                    </div>
                    <div>
                        당첨번호
                    </div>
                </div>
                <div>
                    <div>
                        2등 연금 당첨금액
                    </div>
                    <div>
                        당첨번호
                    </div>
                </div>
                <div>일자 선</div>
                <div>
                    <div>
                        2등 연금 당첨금액
                    </div>
                    <div>
                        당첨번호
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;