import SliderShow from "../../components/SliderShow"
import slider5 from '../../assets/slider5.png';
import slider6 from '../../assets/slider6.png';
import slider7 from '../../assets/slider7.png';
import { ProductItem } from "../../components/ProductItem";
export const Home = () => {
  return (
    <div style={{padding:'20px 80px'}} >
      <SliderShow sliders={[slider5,slider6,slider7]}/>
      <h1>Tất cả sản phẩm</h1>
      <div style={{display:'flex',gap:10}}>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>  
      </div>
     

    </div>
  )
}
