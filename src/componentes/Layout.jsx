import NavbarComponent from "./NavBar";
import VolverAtras from "./VolverAtras";
export const Layout = ({ children }) => {
  return (
    <main>
      <NavbarComponent />
      <VolverAtras/>
      {children}
    </main>
  );
};