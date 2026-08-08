import { Page, useNavigate } from "zmp-ui";

import FollowOABanner from "@/components/follow-oa-banner";
import homeBanner from "@/static/banner-home.jpg";
import sofaImage from "@/static/product-sofa.jpg";
import tableImage from "@/static/product-table.png";

const menuItems = [
  {
    icon: "⌂",
    label: "Online\nShowroom",
    path: "/showroom",
  },
  {
    icon: "◌",
    label: "Tư vấn",
    path: "/consultation",
  },
  {
    icon: "▣",
    label: "Sản phẩm",
    path: "/showroom",
  },
  {
    icon: "△",
    label: "Thiết kế\nthi công",
    path: "/consultation",
  },
  {
    icon: "ⓘ",
    label: "Giới thiệu",
    path: "",
  },
  {
    icon: "▤",
    label: "Tin tức",
    path: "",
  },
  {
    icon: "◇",
    label: "Khuyến mãi",
    path: "",
  },
  {
    icon: "◈",
    label: "Chính sách\nhỗ trợ",
    path: "",
  },
];

const products = [
  {
    id: 1,
    name: "Bàn sofa HUBSH",
    category: "Living Room",
    price: "Liên hệ",
    image: sofaImage,
  },
  {
    id: 2,
    name: "Bàn ăn Spritz Ceramic",
    category: "Dining Room",
    price: "Liên hệ",
    image: tableImage,
  },
];

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Page className="alcova-page">
      <main className="alcova-home">
        {/* Search */}
        <section className="search-section">
          <button
            type="button"
            className="search-box"
            onClick={() => navigate("/showroom")}
          >
            <span className="search-icon">⌕</span>
            <span className="search-placeholder">Bạn đang tìm gì?</span>
          </button>
        </section>

        {/* Hero Banner */}
        <section
          className="hero-banner"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.76) 0%,
                rgba(0, 0, 0, 0.48) 48%,
                rgba(0, 0, 0, 0.12) 100%
              ),
              url(${homeBanner})
            `,
          }}
        >
          <div className="hero-content">
            <div className="hero-logo-text">ALCOVA</div>

            <div className="hero-logo-line" />

            <div className="hero-logo-subtitle">FURNITURE</div>

            <h1>
              Không gian sống
              <br />
              mang dấu ấn riêng
            </h1>

            <p className="hero-description">
              Nội thất hiện đại, tinh tế và phù hợp với phong cách sống của bạn.
            </p>

            <button
              type="button"
              className="hero-button"
              onClick={() => navigate("/showroom")}
            >
              Khám phá ngay
            </button>
          </div>
        </section>

        {/* Follow OA */}
        <FollowOABanner />

        {/* Menu chức năng */}
        <section className="menu-grid">
          {menuItems.map((item) => {
            const lines = item.label.split("\n");

            return (
              <button
                type="button"
                className="menu-item"
                key={item.label}
                onClick={() => handleNavigate(item.path)}
              >
                <div className="menu-icon">
                  <span>{item.icon}</span>
                </div>

                <div className="menu-label">
                  {lines.map((line, index) => (
                    <span key={`${item.label}-${index}`}>
                      {line}

                      {index < lines.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </section>

        {/* Giới thiệu Alcova */}
        <section className="about-card">
          <p className="section-eyebrow">ALCOVA FURNITURE</p>

          <h2>Nội thất cho không gian sống hiện đại</h2>

          <p className="about-description">
            Alcova mang đến những sản phẩm nội thất được chọn lọc với thiết kế
            tinh tế, chú trọng trải nghiệm và chất lượng sử dụng.
          </p>

          <button type="button" className="text-button">
            Khám phá Alcova
            <span>→</span>
          </button>
        </section>

        {/* Sản phẩm nổi bật */}
        <section className="home-section">
          <div className="section-header">
            <h2>Sản phẩm nổi bật</h2>

            <button type="button" onClick={() => navigate("/showroom")}>
              Xem thêm <span>›</span>
            </button>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article
                className="product-card"
                key={product.id}
                onClick={() => navigate("/showroom")}
              >
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category}</span>

                  <h3>{product.name}</h3>

                  <p>{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Khuyến mãi */}
        <section className="promotion-banner">
          <div className="promotion-content">
            <span className="promotion-tag">ƯU ĐÃI</span>

            <h2>Khám phá ưu đãi mới nhất từ Alcova</h2>

            <p>Cập nhật chương trình và sản phẩm nổi bật dành cho bạn.</p>
          </div>

          <button type="button" className="promotion-arrow">
            →
          </button>
        </section>

        {/* Liên hệ nhanh */}
        <section className="contact-section">
          <h2>Thông tin liên hệ nhanh</h2>

          <div className="contact-grid">
            <button
              type="button"
              className="contact-card"
              onClick={() => navigate("/consultation")}
            >
              <div className="contact-icon">☎</div>

              <div>
                <strong>Hotline</strong>
                <small>Liên hệ tư vấn</small>
              </div>
            </button>

            <button
              type="button"
              className="contact-card"
              onClick={() => navigate("/consultation")}
            >
              <div className="contact-icon">⌖</div>

              <div>
                <strong>Showroom</strong>
                <small>Xem địa chỉ</small>
              </div>
            </button>
          </div>
        </section>
      </main>
    </Page>
  );
}

export default HomePage;
