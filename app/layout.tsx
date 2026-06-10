import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "بارك سايت العاصمة الإدارية — الكازار | Park Sight New Capital Il Cazar",
  description:
    "بارك سايت الكازار في العاصمة الإدارية الجديدة — Park Sight Ilcazar. ١٤٠ فدان، الحي R4، إطلالة النهر الأخضر. شقق وتاون هاوس وبنتهاوس من ٤.٢ مليون. ١٠٪ مقدم وتقسيط حتى ١٠ سنوات.",
  keywords:
    "بارك سايت,بارك سايت العاصمة,بارك سايت الكازار,Park Sight,Park Sight New Capital,Ilcazar,Il Cazar,الكازار,العاصمة الإدارية الجديدة,R4,بارك سايت الكازار للتطوير العقاري",
  openGraph: {
    title: "بارك سايت — الكازار | Park Sight Ilcazar العاصمة الإدارية",
    description:
      "بارك سايت الكازار: مجتمع سكني على ١٤٠ فدان في R4 العاصمة الإدارية. إطلالة النهر الأخضر، ٤٠+ فدان خضرة، تسليم ٤ سنوات.",
    locale: "ar_EG",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        {/* ── Google Tag Manager — أضف كودك هنا ── */}
        {/* <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX')`}} /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
