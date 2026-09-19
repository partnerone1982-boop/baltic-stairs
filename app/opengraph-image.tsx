import { ImageResponse } from "next/og";
export const alt = "Завод Балтийских Лестниц — металлические лестницы на заказ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
 return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "#f4f0e7", color: "#1f1f1f", padding: 80, borderBottom: "16px solid #c4ac70" }}>
 <div style={{ fontSize: 64, fontWeight: 700 }}>Завод Балтийских Лестниц</div>
 <div style={{ fontSize: 36, marginTop: 36 }}>Металлические лестницы на заказ</div>
 <div style={{ fontSize: 28, marginTop: 28, color: "#555" }}>Санкт-Петербург и Ленинградская область</div>
 <div style={{ fontSize: 26, marginTop: 48 }}>mylestnica.ru</div>
 </div>, size);
}
