import { lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../utils";
import notfound from "../assets/image.png";
import Wishlist from "../pages/wishlist/Wishlist";
import Login from "../auth/Login/Login";
import RegisterForm from "../auth/Registeer/Register";

const Home: LazyExoticComponent<any> = lazy(() => import("../pages/home/Home"));
const About: LazyExoticComponent<any> = lazy(
  () => import("../pages/about/About")
);
const Company: LazyExoticComponent<any> = lazy(
  () => import("../pages/company/Company")
);
const Detail: LazyExoticComponent<any> = lazy(
  () => import("../pages/detail/Detail")
);
const PostAnAd: LazyExoticComponent<any> = lazy(
  () => import("../pages/PostAnAd/PostAnAd")
);
const Layout: LazyExoticComponent<any> = lazy(
  () => import("../pages/layout/Layout")
);
const Myaccaunt: LazyExoticComponent<any> = lazy(
  () => import("../pages/myaccaunt/myaccaunt")
);

const Routers = () => {
    
    
  return useRoutes([
    
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense>
              <About />
            </Suspense>
          ),
          children: [
            {
              path: "company",
              element: (
                <Suspense>
                  <Company />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "/product/:id",
          element: (
            <Suspense>
              <Detail />
            </Suspense>
          ),
        },
        {
          path: "/PostAnAd",
          element: (
            <Suspense>
              <PostAnAd />
            </Suspense>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <Suspense>
              <Wishlist />
            </Suspense>
          ),
        },
        
        {
          path: "/myaccaunt",
          element: (
            <Suspense>
              <Myaccaunt />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Suspense>
          <Login/>
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense>
          <RegisterForm/>
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense>
          <div className="w-full h-[110vh]">
            <img className="w-full h-full" src={notfound} alt="" />
          </div>
        </Suspense>
      ),
    },
  ]);
};

export default Routers;
