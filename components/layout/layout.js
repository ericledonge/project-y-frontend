import NavBar from "../navbar/navbar";

const Layout = (props) => (
  <div className="Layout" style={layoutStyle}>
    <NavBar />
    <main className="Content" style={contentStyle}>
      {props.children}
    </main>
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
