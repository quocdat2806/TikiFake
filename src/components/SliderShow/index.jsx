import {Image} from 'antd'
import Slider from 'react-slick'
const SliderShow = ({sliders}) => {
  const settings ={
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  }
  return (
    <Slider {...settings}>
    {sliders.map((image,index)=>{
      return(
        <Image key={index} src={image} alt="slider"  width="100%" preview={false}  />
      )
    })}
  </Slider>
  )
}

export default SliderShow