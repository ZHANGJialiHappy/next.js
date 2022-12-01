import Navbar from "./Navbar";

type Props = {
    children?:
      | React.ReactChild
      | React.ReactChild[];
  };

const Layout = ({children}:Props) => {
    return(
        <>
        <Navbar/> 
        <div>{children}</div>
        </>
    )
};
export default Layout;