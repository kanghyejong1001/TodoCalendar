import styled from "@emotion/styled";

// 시간을 담음
const TimeDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 날짜와 요일 담음
const DateDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Separator = styled.div`
  width: 1px;
  height: 100%;
  background: black;
  border: black 1px solid;
  margin: 0 20px;
`;

const TopDiv = styled.div`
  font-weight: 500;
`;

const BottomDiv = styled.div`
  font-weight: 800;
  font-size: 2em;
`;

// 하얀색 둥근 박스 - DateDiv와 TimeDiv 담음
const TimeAndDate = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export {
  TimeDiv,
  DateDiv,
  TimeAndDate,
  TopDiv,
  BottomDiv,
  Separator
};
