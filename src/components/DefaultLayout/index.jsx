import { Header } from '../Layout/Header'
import { TypeProduct } from '../TypeProduct'
import  './style.css'
const listTypeProduct = ['Thịt,Rau Củ','TV','Bách Hóa','Nhà Cửa','Điện Tử','Thiết Bị Số','Điện Thoại','Mẹ & Bé','Làm Đẹp','Đồ Gia Dụng','Thời Trang Nam','Giày','Dép']

export  const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div className='DefaultLayout_Category'>
        {listTypeProduct.map((type,index)=>{
          return(
          <TypeProduct key={index} name={type} />
          )
        })}
      </div>
      <div className='DefaultLayout_Container'>
       {children}

      </div>
          
    </div>
  )
}
