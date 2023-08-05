import { Header } from '../Layout/Header'

export  const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}
