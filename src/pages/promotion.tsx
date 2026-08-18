import { Page, useNavigate } from "zmp-ui";

import birthdayImage from "@/static/alcova/promotion/birthday.jpg";
import brownieImage from "@/static/alcova/promotion/brownie.jpg";
import comboImage from "@/static/alcova/promotion/combo.jpg";
import sheanImage from "@/static/alcova/promotion/shean.jpg";
import valenciaImage from "@/static/alcova/promotion/valencia.jpg";

const offers = [
  { title: "Sofa Valencia Chỉnh Điện", image: valenciaImage },
  { title: "Combo Bàn Hubsh + Ghế Nov", image: comboImage },
  { title: "Bàn Ăn Ceramic Brownie", image: brownieImage },
  { title: "Ghế Băng Shean PU", image: sheanImage },
];

function PromotionPage() {
  const navigate = useNavigate();

  return (
    <Page className="alcova-page">
      <main className="sub-page promotions-page">
        <header className="sub-header">
          <button type="button" className="back-button" onClick={() => navigate(-1)}>
            ‹
          </button>
          <div>
            <h1>Khuyến mãi</h1>
            <p>Ưu đãi đặc biệt từ Alcova</p>
          </div>
        </header>

        <section className="birthday-section">
          <div className="birthday-copy">
            <h2>Alcova đón tuổi mới</h2>
            <span>Tinh Tế Chuẩn Hàn – Đẹp Mọi Không Gian</span>
            <p>
              Alcova tròn 2 tuổi, một hành trình kiến tạo những không gian sống tinh tế,
              hiện đại và chuẩn phong cách Hàn Quốc.
            </p>
            <p>
              Super Brand Month 2026 là lời tri ân dành cho khách hàng, với nhiều ưu đãi
              và quà tặng hấp dẫn.
            </p>
          </div>
          <img src={birthdayImage} alt="Alcova đón tuổi mới" />
        </section>

        <section className="offers-section">
          <div className="offers-heading">
            <h2>Nhà Chuẩn Hàn – Vô Vàn Ưu Đãi</h2>
            <p>Tổng hợp chương trình khuyến mãi đặc biệt dành riêng cho tháng sinh nhật Alcova</p>
          </div>

          <div className="offer-grid">
            {offers.map((offer) => (
              <button
                className="offer-card"
                type="button"
                key={offer.title}
                aria-label={`Mua với ưu đãi: ${offer.title}`}
                onClick={() => navigate("/consultation")}
              >
                <img src={offer.image} alt={offer.title} />
              </button>
            ))}
          </div>
        </section>
      </main>
    </Page>
  );
}

export default PromotionPage;
