import { Row } from "antd";
import styled from "styled-components"

export const HeaderStyle = styled(Row)`
padding:10px 40px;
`
export const LogoHeaderStyle = styled.img`
width: 57px;
height: 40px;
`
export const HeaderUserActionWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-left: 48px;
`
export const HeaderAction = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
padding: 8px 16px;
cursor: pointer;
position: relative;
border-radius: 8px;
&.cart-icon-inner {
    margin-left: 24px;
    position: relative;
    padding: 0px !important;
    ::before{
        content: "";
        display: block;
        height: 20px;
        position: absolute;
        left: -12px;
        border: 1px solid rgb(235, 235, 240);
    }
  }

`
export const HeaderActionImage = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 4px;
    border-radius: 50%;
    &.cart-image{
        margin-right: 0px;
        border-radius: unset;
    }
`
export const HeaderActionText = styled.a`
font-weight: 500;
font-size: 14px;
line-height: 150%;
color: rgb(10, 104, 255);
text-decoration: none;
`
export const HeaderActionCart = styled.div`
position: relative;
display: block;
`
export const CartWrapper = styled.div`
position: relative;
display: flex;
width: 40px;
height: 40px;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
`
export const CartSpanTextCount = styled.span`
color: rgb(255, 255, 255);
background: rgb(255, 66, 79);
height: 16px;
right: 0px;
top: -4px;
border-radius: 8px;
display: inline-block;
text-align: center;
font-weight: 700;
font-size: 10px;
line-height: 150%;
position: absolute;
padding: 0.5px 4px;
`

