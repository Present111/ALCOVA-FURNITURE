import { useMemo, useState } from "react";
import { Page, useNavigate } from "zmp-ui";

import { formatPrice, products } from "@/data/products";

const categories = ["Tất cả", "Phòng khách", "Phòng ăn", "Ghế"];

function ShowroomPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "Tất cả" || product.category === selectedCategory;

      const matchSearch =
        keyword.length === 0 ||
        product.name.toLowerCase().includes(keyword) ||
        product.shortName.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });
  }, [search, selectedCategory]);

  return (
    <Page className="alcova-page">
      <main className="sub-page">
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
            <h1>Online Showroom</h1>
            <p>Khám phá sản phẩm Alcova</p>
          </div>
        </header>

        {/* Search */}
        <section className="showroom-search">
          <span>⌕</span>

          <input
            type="text"
            value={search}
            placeholder="Tìm kiếm sản phẩm..."
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </section>

        {/* Categories */}
        <section className="category-list">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`category-chip ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Heading */}
        <section className="showroom-heading">
          <div>
            <span>ALCOVA COLLECTION</span>

            <h2>
              {selectedCategory === "Tất cả"
                ? "Sản phẩm nổi bật"
                : selectedCategory}
            </h2>
          </div>

          <div className="product-count">
            {filteredProducts.length} sản phẩm
          </div>
        </section>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <section className="showroom-product-grid">
            {filteredProducts.map((product) => (
              <article
                className="showroom-product-card"
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="showroom-product-image">
                  {product.oldPrice && (
                    <span className="sale-badge">
                      -
                      {Math.round((1 - product.price / product.oldPrice) * 100)}
                      %
                    </span>
                  )}

                  <img src={product.image} alt={product.shortName} />
                </div>

                <div className="showroom-product-info">
                  <span>{product.category}</span>

                  <h3>{product.shortName}</h3>

                  <div className="product-price-area">
                    <strong>{formatPrice(product.price)}</strong>

                    {product.oldPrice && (
                      <del>{formatPrice(product.oldPrice)}</del>
                    )}
                  </div>

                  <div className="showroom-product-bottom">
                    <span className="stock-status">{product.status}</span>

                    <button
                      type="button"
                      aria-label={`Xem ${product.shortName}`}
                    >
                      ›
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="empty-products">
            <div className="empty-icon">⌕</div>

            <h3>Không tìm thấy sản phẩm</h3>

            <p>Thử tìm với tên hoặc danh mục khác.</p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("Tất cả");
              }}
            >
              Xem tất cả sản phẩm
            </button>
          </section>
        )}
      </main>
    </Page>
  );
}

export default ShowroomPage;
