import { Footer } from "./Footer/footer";
import { Navbar } from "./Navbar/navbar";

export default function Layout(props) {

  return (
    <div className="wrapper" style={{paddingTop:'80px'}}>
      <Navbar />
        {props.children}
      <Footer />
    </div>
  );
}