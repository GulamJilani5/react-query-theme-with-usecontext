import { Link, Outlet } from "react-router-dom";
import ThemeSwitcher from "../component/theme/themeSwitcher";
import { useTheme } from "../component/theme/themeContext";
export default function RootLayout() {
  const { theme } = useTheme();
  return (
    <>
      {/* <header className={`${theme} header`}> */}
      <header className="header">
        <p>Logo</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
      </header>
      <Outlet />
    </>
  );
}
