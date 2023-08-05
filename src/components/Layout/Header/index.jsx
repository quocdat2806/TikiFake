import { Col, Input } from "antd";
const Search = Input.Search;
import {
  CartSpanTextCount,
  CartWrapper,
  HeaderAction,
  HeaderActionCart,
  HeaderActionImage,
  HeaderActionText,
  HeaderStyle,
  HeaderUserActionWrapper,
  LogoHeaderStyle,
} from "./style";

const listActions = [
  {
    name:"Trang chủ",
    image:"https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png",
    alt:"header_menu_item_home"
  },
  {
    name:"Asta",
    image:"https://salt.tikicdn.com/ts/upload/41/28/7d/4713aa0d2855c5c770799f248692f0c5.png",
    alt:"header_menu_item_home"

  },
  {
    name:"Tài Khoản",
    image:"https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png",
    alt:"header_menu_item_home"

  }
]

export const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <Col span={4}>
          <LogoHeaderStyle
            src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png"
            alt="tiki-logo"
          />
        </Col>
        <Col span={10}>
          <Search
            enterButton
            placeholder="Tìm kiếm sản phẩm"
            size="large"
          ></Search>
        </Col>
        <Col span={10}>
          <HeaderUserActionWrapper>
            {listActions.map((action,index)=>{
              return(
                <HeaderAction key={index} className="home">
                <HeaderActionImage
                  src={action.image}
                  alt={action.alt}
                />
                <HeaderActionText>{action.name} </HeaderActionText>
              </HeaderAction>
              )
            })}
            <HeaderActionCart>
              <a href="">
                <HeaderAction className="cart-icon-inner" >
                  <CartWrapper/>
                  <HeaderActionImage className="cart-image" src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="header_header_img_Cart"/>
                  <CartSpanTextCount >0</CartSpanTextCount>
                </HeaderAction>
              </a>
            </HeaderActionCart>
          </HeaderUserActionWrapper>
        </Col>
      </HeaderStyle>
    </div>
  );
};
