import { Page, useNavigate } from "zmp-ui";

import FollowOABanner from "@/components/follow-oa-banner";
import homeBanner from "@/static/alcova/home-hero.jpg";
import whiteLogo from "@/MINIAPP ALCOVA SOURCE/Logo/ALCOVA_Logo_White_Transparent.png";
import aboutIcon from "@/static/alcova/about.webp";
import consultationIcon from "@/static/alcova/consultation.webp";
import memberIcon from "@/static/alcova/member.webp";
import newsIcon from "@/static/alcova/news.webp";
import productIcon from "@/static/alcova/product.webp";
import promotionIcon from "@/static/alcova/promotion.webp";
import showroomIcon from "@/static/alcova/showroom.webp";
import sofaImage from "@/static/product-sofa.jpg";
import tableImage from "@/static/product-table.png";

const menuItems = [
  {
    icon: showroomIcon,
    label: "Online\nShowroom",
    path: "/showroom",
  },
  {
    icon: consultationIcon,
    label: "Tư vấn",
    path: "/consultation",
  },
  {
    icon: productIcon,
    label: "Sản phẩm",
    path: "/showroom",
  },
  {
    icon: memberIcon,
    label: "Thành viên",
    path: "",
  },
  {
    icon: aboutIcon,
    label: "Giới thiệu",
    path: "",
  },
  {
    icon: newsIcon,
    label: "Tin tức",
    path: "/news",
  },
  {
    icon: promotionIcon,
    label: "Khuyến mãi",
    path: "/promotions",
  },
  {
    icon: memberIcon,
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
            <img className="hero-brand-logo" src={whiteLogo} alt="Alcova Furniture" />

            <h1>
              Tinh tế chuẩn Hàn
              <br />
              Đẹp mọi không gian
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
                  <img src={item.icon} alt="" />
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
          <img className="about-brand-logo" src={whiteLogo} alt="Alcova Furniture" />

          <h2>Nội thất cho không gian sống hiện đại</h2>

          <p className="about-description">
            Alcova mang đến những sản phẩm nội thất được chọn lọc với thiết kế
            tinh tế, chú trọng trải nghiệm và chất lượng sử dụng.
          </p>

          <button type="button" className="text-button" onClick={() => navigate("/news")}>
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

                  <button
                    type="button"
                    className="product-buy-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate("/consultation");
                    }}
                  >
                    Mua ngay
                  </button>
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

          <button
            type="button"
            className="promotion-arrow"
            onClick={() => navigate("/promotions")}
          >
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
