import { useLocation } from "react-router-dom";
import { useNavigate } from "zmp-ui";
import { openChat } from "zmp-sdk/apis";

import accountIcon from "@/static/alcova/account.webp";
import consultationIcon from "@/static/alcova/consultation.webp";
import homeIcon from "@/static/alcova/home.webp";
import messageIcon from "@/static/alcova/message.webp";
import productIcon from "@/static/alcova/product.webp";

const ALCOVA_OA_ID = "3649485890998696800";

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  const isHome = pathname === "/";
  const isShowroom = pathname.startsWith("/showroom");
  const isConsultation = pathname.startsWith("/consultation");
  const isAccount = pathname.startsWith("/account");

  const handleOpenChat = async () => {
    try {
      await openChat({
        id: ALCOVA_OA_ID,
        type: "oa",
        message: "Xin chào Alcova, tôi cần được tư vấn.",
      });
    } catch (error) {
      console.error("openChat failed:", error);
    }
  };

  return (
    <nav className="bottom-navigation">
      <button
        type="button"
        className={`nav-item ${isHome ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        <img className="nav-icon" src={homeIcon} alt="" />
        <small>Trang chủ</small>
      </button>

      <button
        type="button"
        className={`nav-item ${isShowroom ? "active" : ""}`}
        onClick={() => navigate("/showroom")}
      >
        <img className="nav-icon" src={productIcon} alt="" />
        <small>Sản phẩm</small>
      </button>

      <button
        type="button"
        className={`nav-item ${isConsultation ? "active" : ""}`}
        onClick={() => navigate("/consultation")}
      >
        <img className="nav-icon" src={consultationIcon} alt="" />
        <small>Tư vấn</small>
      </button>

      <button type="button" className={`nav-item ${isAccount ? "active" : ""}`}>
        <img className="nav-icon" src={accountIcon} alt="" />
        <small>Tài khoản</small>
      </button>

      <button type="button" className="nav-item" onClick={handleOpenChat}>
        <img className="nav-icon" src={messageIcon} alt="" />
        <small>Nhắn tin</small>
      </button>
    </nav>
  );
}

export default BottomNavigation;
