import { useLocation } from "react-router-dom";
import { useNavigate } from "zmp-ui";

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  const isHome = pathname === "/";
  const isShowroom = pathname.startsWith("/showroom");
  const isConsultation = pathname.startsWith("/consultation");
  const isAccount = pathname.startsWith("/account");

  return (
    <nav className="bottom-navigation">
      <button
        type="button"
        className={`nav-item ${isHome ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        <span className="nav-icon">⌂</span>
        <small>Trang chủ</small>
      </button>

      <button
        type="button"
        className={`nav-item ${isShowroom ? "active" : ""}`}
        onClick={() => navigate("/showroom")}
      >
        <span className="nav-icon">▦</span>
        <small>Sản phẩm</small>
      </button>

      <button
        type="button"
        className={`nav-item ${isConsultation ? "active" : ""}`}
        onClick={() => navigate("/consultation")}
      >
        <span className="nav-icon">♧</span>
        <small>Tư vấn</small>
      </button>

      <button type="button" className={`nav-item ${isAccount ? "active" : ""}`}>
        <span className="nav-icon">◎</span>
        <small>Tài khoản</small>
      </button>
    </nav>
  );
}

export default BottomNavigation;
