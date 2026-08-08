import sofaImage from "@/static/product-sofa.jpg";
import tableImage from "@/static/product-table.png";

export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: "Phòng khách" | "Phòng ăn" | "Ghế";
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  material?: string;
  color?: string;
  size?: string;
  status: "Còn hàng" | "Hết hàng";
}

export const products: Product[] = [
  {
    id: "hush-sofa-table",
    name: "BÀN SOFA HUSH HPL NHẬP KHẨU VIỀN TRẮNG BẠC",
    shortName: "Bàn sofa HUSH HPL",
    category: "Phòng khách",
    price: 4400000,
    oldPrice: 6300000,
    image: sofaImage,
    description:
      "Bàn sofa HUSH HPL với mặt bàn màu trắng, kiểu dáng bầu dục và khung thép không gỉ. Thiết kế tối giản phù hợp với không gian phòng khách hiện đại.",
    material: "Mặt HPL, khung thép không gỉ",
    color: "Trắng, bạc",
    size: "Dài 1200 x Rộng 600 x Cao 380 mm",
    status: "Còn hàng",
  },

  {
    id: "spritz-round-table",
    name: "BÀN ĂN TRÒN SPRITZ CERAMIC NHẬP KHẨU",
    shortName: "Bàn ăn tròn Spritz Ceramic",
    category: "Phòng ăn",
    price: 5580000,
    oldPrice: 7970000,
    image: tableImage,
    description:
      "Bàn ăn tròn Spritz Ceramic kết hợp giữa đường thẳng và đường cong, sử dụng mặt Ceramic cùng phần chân kim loại sơn tĩnh điện.",
    material: "Mặt Ceramic, chân kim loại sơn tĩnh điện",
    color: "Trắng / Be",
    size: "Đường kính 900 x Cao 745 mm",
    status: "Còn hàng",
  },

  {
    id: "ria-chair",
    name: "GHẾ RIA NHẬP KHẨU",
    shortName: "Ghế RIA",
    category: "Ghế",
    price: 2350000,
    oldPrice: 3360000,
    image:
      "https://product.hstatic.net/200000875181/product/ghe_ria_796cfa99c489424f98e4ff190f99c144_master.jpg",
    description:
      "Ghế RIA kết hợp phong cách cổ điển và hiện đại, phần tựa lưng hỗ trợ lưng dưới và khung thép có độ bền cao.",
    material: "Khung thép mạ bạc, da nhân tạo, veneer tự nhiên",
    color: "Kem / Xám",
    size: "Rộng 460 x Dài 480 x Cao 750 mm",
    status: "Còn hàng",
  },

  {
    id: "vaniet-extension-table",
    name: "BÀN ĂN MỞ RỘNG VANIET EXTENSION TABLE",
    shortName: "Bàn ăn mở rộng Vaniet",
    category: "Phòng ăn",
    price: 8950000,
    oldPrice: 12785000,
    image:
      "https://cdn.hstatic.net/products/200000875181/13_e90e3db13bb74b968b25e6e4afd9f56c_master.png",
    description:
      "Vaniet là mẫu bàn ăn mở rộng với thiết kế kết hợp giữa đường thẳng và đường cong. Chân bàn đối xứng giúp tối ưu không gian sử dụng.",
    material: "Mặt bàn Ceramic, khung kim loại sơn tĩnh điện",
    color: "Tông be sáng",
    status: "Còn hàng",
  },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN").format(price) + "₫";
};
