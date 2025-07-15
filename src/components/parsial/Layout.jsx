import Header from "../ui/header";
function Layout({ children }) {
  return (
    <>
      <Header />
    <main>{children}</main>
    <footer/>
    </>
  );
}
export default Layout;
