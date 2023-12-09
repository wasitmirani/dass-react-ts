import { RouteObject } from "react-router-dom";


import Home from "../pages/home/home";




const generateRoute=(name:string,el:any,permission?: string)=>{
    return {path:name,element:el,meta:{permission:permission}};
}

const routes: RouteObject[] = [
//   {
//     path: "app",
//     // element: isLoggedIn ? <HomeComponent /> : <Navigate to="/login" />,
//     children: [
//         // to="dashboard"
//       { index: true, element: <Home  /> },
//       { path: "dashboard", element: <Home /> },
//       { path: "other", element: <Home /> }
//     ]
//   },
// { path: "/", element: <Home /> },
generateRoute('/',<Home/>),
//   { path: "*", element: <Home /> }
];

export default routes;