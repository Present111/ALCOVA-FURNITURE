import { useParams } from "react-router-dom";

import { Page, useNavigate } from "zmp-ui";

import { formatPrice, products } from "@/data/products";

function ProductDetailPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <Page className="alcova-page">
        <main className="sub-page">
          <header className="sub-header">
            <button
              type="button"
              className="back-button"
              onClick={() => navigate(-1)}
            >
              ‹
            </button>

            <div>
              <h1>Sản phẩm</h1>
            </div>
          </header>

          <section className="product-not-found">
            <h2>Không tìm thấy sản phẩm</h2>

            <button type="button" onClick={() => navigate("/showroom")}>
              Quay lại showroom
            </button>
          </section>
        </main>
      </Page>
    );
  }

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <Page className="alcova-page">
      <main className="sub-page product-detail-page">
        {/* Header */}
        <header className="sub-header">
          <button
            type="button"
            className="back-button"
            onClick={() => navigate(-1)}
          >
            ‹
          </button>

          <div>
            <h1>Chi tiết sản phẩm</h1>
            <p>Alcova Furniture</p>
          </div>
        </header>

        {/* Image */}
        <section className="detail-image-section">
          {discount > 0 && (
            <span className="detail-sale-badge">-{discount}%</span>
          )}

          <img src={product.image} alt={product.shortName} />
        </section>

        {/* Info */}
        <section className="detail-main-info">
          <span className="detail-category">{product.category}</span>

          <h1>{product.shortName}</h1>

          <div className="detail-stock">
            <span className="stock-dot" />
            {product.status}
          </div>

          <div className="detail-price">
            <strong>{formatPrice(product.price)}</strong>

            {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
          </div>
        </section>

        {/* Description */}
        <section className="detail-section">
          <p className="detail-eyebrow">GIỚI THIỆU SẢN PHẨM</p>

          <h2>Mô tả</h2>

          <p className="detail-description">{product.description}</p>
        </section>

        {/* Specification */}
        <section className="detail-section">
          <p className="detail-eyebrow">THÔNG TIN SẢN PHẨM</p>

          <h2>Thông số</h2>

          <div className="spec-list">
            {product.material && (
              <div className="spec-row">
                <span>Chất liệu</span>

                <strong>{product.material}</strong>
              </div>
            )}

            {product.color && (
              <div className="spec-row">
                <span>Màu sắc</span>

                <strong>{product.color}</strong>
              </div>
            )}

            {product.size && (
              <div className="spec-row">
                <span>Kích thước</span>

                <strong>{product.size}</strong>
              </div>
            )}

            <div className="spec-row">
              <span>Tình trạng</span>

              <strong>{product.status}</strong>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="detail-benefits">
          <div>
            <span>✓</span>

            <div>
              <strong>Hỗ trợ tư vấn</strong>

              <small>Hỗ trợ lựa chọn sản phẩm</small>
            </div>
          </div>

          <div>
            <span>✓</span>

            <div>
              <strong>Bảo hành</strong>

              <small>Theo chính sách Alcova</small>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="detail-actions">
          <button
            type="button"
            className="secondary-detail-button"
            onClick={() => navigate("/consultation")}
          >
            Tư vấn
          </button>

          <button
            type="button"
            className="primary-detail-button"
            onClick={() => navigate("/consultation")}
          >
            Liên hệ mua hàng
          </button>
        </section>
      </main>
    </Page>
  );
}

export default ProductDetailPage;
