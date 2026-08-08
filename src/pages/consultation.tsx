import { FormEvent, useState } from "react";
import { Page, useNavigate } from "zmp-ui";

import { openChat, openPhone, showToast } from "zmp-sdk/apis";

const ALCOVA_OA_ID = "3649485890998696800";

const ALCOVA_HOTLINE = "0917265510";

const SHOWROOM_ADDRESS = "15 Đường D4, Phường An Khánh, TP. Thủ Đức";

type ConsultationForm = {
  fullName: string;
  phone: string;
  need: string;
  content: string;
};

function ConsultationPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState<ConsultationForm>({
    fullName: "",
    phone: "",
    need: "",
    content: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleCallHotline = async () => {
    try {
      await openPhone({
        phoneNumber: ALCOVA_HOTLINE,
      });
    } catch (error) {
      console.error("openPhone failed:", error);

      showToast({
        message: "Không thể mở cuộc gọi. Vui lòng thử lại.",
      });
    }
  };

  const handleChatOA = async () => {
    try {
      await openChat({
        type: "oa",
        id: ALCOVA_OA_ID,
        message: "Xin chào Alcova, tôi cần được tư vấn sản phẩm.",
      });
    } catch (error) {
      console.error("openChat failed:", error);

      showToast({
        message: "Không thể mở chat Alcova.",
      });
    }
  };

  const handleShowroom = () => {
    showToast({
      message: SHOWROOM_ADDRESS,
    });
  };

  const updateField = (field: keyof ConsultationForm, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!form.fullName.trim()) {
      showToast({
        message: "Vui lòng nhập họ và tên.",
      });

      return false;
    }

    const normalizedPhone = form.phone.replace(/\s/g, "");

    if (!/^(0|\+84)[0-9]{9,10}$/.test(normalizedPhone)) {
      showToast({
        message: "Số điện thoại chưa hợp lệ.",
      });

      return false;
    }

    if (!form.need) {
      showToast({
        message: "Vui lòng chọn nhu cầu tư vấn.",
      });

      return false;
    }

    return true;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    const message = [
      "Xin chào Alcova, tôi muốn đăng ký tư vấn.",
      "",
      `Họ tên: ${form.fullName}`,
      `Số điện thoại: ${form.phone}`,
      `Nhu cầu: ${form.need}`,
      form.content.trim() ? `Nội dung: ${form.content.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await openChat({
        type: "oa",
        id: ALCOVA_OA_ID,
        message,
      });

      showToast({
        message: "Đã mở cuộc trò chuyện với Alcova.",
      });
    } catch (error) {
      console.error("Consultation submit failed:", error);

      showToast({
        message: "Không thể mở chat tư vấn. Vui lòng thử lại.",
      });
    } finally {
      setSubmitting(false);
    }
  };

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
            <h1>Tư vấn</h1>
            <p>Kết nối với Alcova Furniture</p>
          </div>
        </header>

        {/* Hero */}
        <section className="consultation-hero">
          <span>ALCOVA FURNITURE</span>

          <h2>
            Bạn đang tìm kiếm
            <br />
            không gian phù hợp?
          </h2>

          <p>
            Đội ngũ Alcova sẵn sàng hỗ trợ lựa chọn sản phẩm, tư vấn không gian
            và giải đáp các nhu cầu của bạn.
          </p>
        </section>

        {/* Quick actions */}
        <section className="consultation-actions">
          <button
            type="button"
            className="consultation-action"
            onClick={handleCallHotline}
          >
            <div className="action-icon">☎</div>

            <div>
              <strong>Gọi hotline</strong>
              <span>{ALCOVA_HOTLINE} · 8:00 đến 21:00</span>
            </div>

            <b>›</b>
          </button>

          <button
            type="button"
            className="consultation-action"
            onClick={handleChatOA}
          >
            <div className="action-icon">◌</div>

            <div>
              <strong>Chat với Alcova</strong>
              <span>Trao đổi trực tiếp qua Zalo Official Account</span>
            </div>

            <b>›</b>
          </button>

          <button
            type="button"
            className="consultation-action"
            onClick={handleShowroom}
          >
            <div className="action-icon">⌖</div>

            <div>
              <strong>Tham quan showroom</strong>
              <span>{SHOWROOM_ADDRESS}</span>
            </div>

            <b>›</b>
          </button>
        </section>

        {/* Showroom info */}
        <section className="showroom-contact-card">
          <p className="detail-eyebrow">ALCOVA SHOWROOM</p>

          <h2>Ghé thăm Alcova</h2>

          <div className="showroom-contact-row">
            <span>⌖</span>

            <div>
              <strong>Địa chỉ</strong>
              <p>{SHOWROOM_ADDRESS}</p>
            </div>
          </div>

          <div className="showroom-contact-row">
            <span>☎</span>

            <div>
              <strong>Hotline</strong>
              <p>{ALCOVA_HOTLINE}</p>
            </div>
          </div>

          <div className="showroom-contact-row">
            <span>✉</span>

            <div>
              <strong>Email</strong>
              <p>sales@alcovafurniture.vn</p>
            </div>
          </div>
        </section>

        {/* Consultation form */}
        <form className="consultation-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>ĐĂNG KÝ TƯ VẤN</span>

            <h2>Để Alcova liên hệ với bạn</h2>

            <p className="form-description">
              Điền thông tin bên dưới. Sau khi bấm gửi, Zalo sẽ mở cuộc trò
              chuyện với Alcova cùng nội dung bạn đã nhập.
            </p>
          </div>

          <label>
            Họ và tên
            <input
              type="text"
              value={form.fullName}
              placeholder="Nhập họ và tên"
              onChange={(event) => updateField("fullName", event.target.value)}
            />
          </label>

          <label>
            Số điện thoại
            <input
              type="tel"
              value={form.phone}
              inputMode="tel"
              placeholder="Ví dụ: 0912345678"
              onChange={(event) => updateField("phone", event.target.value)}
            />
          </label>

          <label>
            Nhu cầu tư vấn
            <select
              value={form.need}
              onChange={(event) => updateField("need", event.target.value)}
            >
              <option value="">Chọn nhu cầu</option>

              <option value="Nội thất phòng khách">Nội thất phòng khách</option>

              <option value="Nội thất phòng ăn">Nội thất phòng ăn</option>

              <option value="Nội thất phòng ngủ">Nội thất phòng ngủ</option>

              <option value="Thiết kế và thi công">Thiết kế và thi công</option>

              <option value="Tư vấn sản phẩm">Tư vấn sản phẩm</option>

              <option value="Khác">Khác</option>
            </select>
          </label>

          <label>
            Nội dung
            <textarea
              rows={4}
              value={form.content}
              placeholder="Mô tả nhu cầu của bạn..."
              onChange={(event) => updateField("content", event.target.value)}
            />
          </label>

          <button
            type="submit"
            className="submit-consultation"
            disabled={submitting}
          >
            {submitting ? "Đang mở Zalo..." : "Gửi yêu cầu tư vấn"}
          </button>

          <p className="consultation-note">
            Thông tin chỉ được dùng để hỗ trợ nhu cầu tư vấn của bạn.
          </p>
        </form>
      </main>
    </Page>
  );
}

export default ConsultationPage;
