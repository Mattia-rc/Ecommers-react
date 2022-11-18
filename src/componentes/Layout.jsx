import NavbarComponent from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <main>
      <NavbarComponent />
      {children}
    </main>
  );
};