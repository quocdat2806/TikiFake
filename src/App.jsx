import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouters } from "./routers";
import { DefaultLayout } from "./components/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {publicRouters.map((route,index)=>{
              let Layout = DefaultLayout
              const Page = route.component;
              if(route.layout){
                Layout = route.layout
              }else if(route.layout ===null){
                Layout = Fragment
              }
              return <Route key={index} path={route.path} element={<Layout isBack={route.backHome}><Page/></Layout>}  />
            })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
