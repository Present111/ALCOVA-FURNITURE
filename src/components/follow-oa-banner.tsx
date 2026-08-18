import { useState } from "react";
import { followOA } from "zmp-sdk/apis";

import logo from "@/MINIAPP ALCOVA SOURCE/Logo/LOGO-ALCOVA-BLACK.png";

const ALCOVA_OA_ID = "3649485890998696800";

type FollowStatus = "idle" | "loading" | "followed";

function FollowOABanner() {
  const [status, setStatus] = useState<FollowStatus>("idle");

  const handleFollowOA = () => {
    if (status === "loading" || status === "followed") {
      return;
    }

    setStatus("loading");

    followOA({
      id: ALCOVA_OA_ID,

      success: () => {
        setStatus("followed");
      },

      fail: (error) => {
        console.error("followOA failed:", error);

        setStatus("idle");
      },
    });
  };

  const getButtonText = () => {
    if (status === "loading") {
      return "Đang xử lý...";
    }

    if (status === "followed") {
      return "Đã quan tâm";
    }

    return "Quan tâm";
  };

  return (
    <section className="follow-oa-section">
      <p className="follow-oa-message">
        Nhận thông báo khuyến mãi mới nhất từ Alcova
      </p>

      <div className="follow-oa-card">
        <div className="follow-oa-logo">
          <img src={logo} alt="Alcova" />
        </div>

        <div className="follow-oa-info">
          <strong>Alcova Furniture</strong>
          <span>Official Account</span>
        </div>

        <button
          type="button"
          className={`follow-oa-button ${
            status === "followed" ? "followed" : ""
          }`}
          onClick={handleFollowOA}
          disabled={status === "loading" || status === "followed"}
        >
          {getButtonText()}
        </button>
      </div>
    </section>
  );
}

export default FollowOABanner;
