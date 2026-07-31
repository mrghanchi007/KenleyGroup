import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }) {
  return (
    <>
      <Header showBadge />
      <main>{children}</main>
      <Footer />
    </>
  );
}
