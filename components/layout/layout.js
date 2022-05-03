import Header from "../header/header";
import NavBar from "../navbar/navbar";

const Layout = (props) => (
  <div className="Layout" style={layoutStyle}>
    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    <NavBar />
  </div>
);

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

export default Layout;
