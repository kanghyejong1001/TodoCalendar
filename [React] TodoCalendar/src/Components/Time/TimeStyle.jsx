import styled from "@emotion/styled";

// 시간을 담음
const TimeDiv = styled.div`
  background: blue;
  text-align: center;
`;

// 날짜와 요일 담음
const DateDiv = styled.div`
  background: yellow;
  text-align: center;
`;

const TopDiv = styled.div`
  font-size: 0.5em;
`;

const BottomDiv = styled.div`
  font-size: 1em;
`;

// 하얀색 둥근 박스 - DateDiv와 TimeDiv 담음
const TimeAndDate = styled.div`
  position: absolute;
  display: flex;
  background: white;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export {
  TimeDiv,
  DateDiv,
  TimeAndDate,
  TopDiv,
  BottomDiv
};
