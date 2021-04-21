import React from "react";
import styled from "styled-components";

type DisplayAccountProps = React.HTMLAttributes<HTMLElement>;

const DisplayAccount = (props: DisplayAccountProps) => {
  return (
    <>
      <AccountWrapper {...props}>
        <BallanceInfo style={{ flexShrink: 0 }}>18.74 ETH</BallanceInfo>
        <AccountInfo className="px-3">0x467a...ac5E</AccountInfo>
      </AccountWrapper>
    </>
  );
};

export default DisplayAccount;

export const AccountWrapper = styled.div.attrs({})`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  background-color: #2196f3;
  border-radius: 12px;
  white-space: nowrap;
  width: auto;
  cursor: pointer;
  height: 80%;
  text-align: right;
`;

export const BallanceInfo = styled.span.attrs({})`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  padding-left: 0.75rem;
  padding-right: 0.5rem;
  font-weight: 500;
  color: #fff;
`;

export const AccountInfo = styled.button.attrs({})`
  text-align: center;
  outline: none;
  text-decoration: none;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  width: 80%;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  outline: none !important;
  background-color: #0000003d;
  border: 1px solid transparent;
  color: rgb(255, 255, 255);
  font-weight: 500;
  height: 100%;
  max-width: 300px;
`;
