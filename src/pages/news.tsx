import { Page, useNavigate } from "zmp-ui";

const newsItems = [
  {
    title: "Xu hướng nội thất chuẩn Hàn cho không gian hiện đại",
    excerpt: "Gợi ý lựa chọn nội thất tinh tế, tiện nghi và phù hợp với nhịp sống đương đại.",
  },
  {
    title: "Bí quyết tạo không gian sống hài hòa",
    excerpt: "Cùng Alcova khám phá cách phối màu, chất liệu và ánh sáng cho ngôi nhà của bạn.",
  },
];

function NewsPage() {
  const navigate = useNavigate();

  return (
    <Page className="alcova-page">
      <main className="sub-page news-page">
        <header className="sub-header">
          <button type="button" className="back-button" onClick={() => navigate(-1)}>
            ‹
          </button>
          <div>
            <h1>Tin tức</h1>
            <p>Cập nhật mới nhất từ Alcova</p>
          </div>
        </header>

        <section className="news-list">
          {newsItems.map((item) => (
            <article className="news-card" key={item.title}>
              <span>ALCOVA FURNITURE</span>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </section>
      </main>
    </Page>
  );
}

export default NewsPage;
