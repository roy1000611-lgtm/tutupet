import {
  Bath,
  Clock,
  Facebook,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import { cn } from "@/lib/utils";

const LINE_URL = "https://line.me/R/ti/p/@tutupetspa";
const PHONE = "0986 583 238";
const PHONE_HREF = "tel:0986583238";
const ADDRESS = "330 桃園市桃園區文中里文中三路 197 號";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.8516547215456!2d121.30947812346055!3d25.033573817148426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e0f0f0f0f0f%3A0x0!2z5paw5Zub5qKp57Si!5e0!3m2!1szh-TW!2stw!4v1234567890";

const navLinks = [
  { label: "服務項目", href: "#services" },
  { label: "毛孩作品", href: "#gallery" },
  { label: "聯絡我們", href: "#contact" },
];

const services = [
  {
    icon: Bath,
    title: "洗沐護理",
    description: "溫和洗淨、護毛潤絲，讓毛髮柔順蓬鬆、散發清香。",
    items: [
      { name: "基礎洗沐（小型犬/貓）", price: "$500 起" },
      { name: "深層護毛SPA", price: "$800 起" },
      { name: "藥浴護理", price: "$1,000 起" },
    ],
  },
  {
    icon: Scissors,
    title: "造型美容",
    description: "依毛孩體型與毛質設計專屬造型，可愛又清爽。",
    items: [
      { name: "基本修剪", price: "$800 起" },
      { name: "精緻造型（泰迪熊/貴賓）", price: "$1,200 起" },
      { name: "剃毛清潔", price: "$600 起" },
    ],
  },
  {
    icon: Sparkles,
    title: "頂級 SPA",
    description: "放鬆按摩、精油保養，給毛孩最奢華的寵愛體驗。",
    items: [
      { name: "草本精油按摩", price: "$1,200 起" },
      { name: "碳酸泉 / 奈米泡泡", price: "$1,500 起" },
      { name: "肉球 paw pad 護理組合", price: "$1,800 起" },
    ],
  },
];

const galleryImages = [
  { src: gallery1, alt: "白色馬爾濟斯美容後配戴粉紅蝴蝶結" },
  { src: gallery2, alt: "黃金獵犬洗沐後毛髮閃亮蓬鬆" },
  { src: gallery3, alt: "橘貓享受溫柔吹乾服務" },
  { src: gallery4, alt: "棕色貴賓精緻圓潤造型" },
  { src: gallery5, alt: "柴犬在粉色沙龍放鬆" },
  { src: gallery6, alt: "波斯貓毛髮柔順有光澤" },
  { src: gallery7, alt: "黑白小狗泰迪熊造型" },
  { src: gallery8, alt: "柯基開心展示美容成果" },
  { src: gallery9, alt: "兩隻小型犬配戴蝴蝶結合照" },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "地址",
    value: ADDRESS,
    href: "https://maps.google.com/?q=330%E6%A1%83%E5%9C%92%E5%B8%82%E6%A1%83%E5%9C%92%E5%8D%80%E6%96%87%E4%B8%AD%E9%87%8C%E6%96%87%E4%B8%AD%E4%B8%89%E8%B7%AF197%E8%99%9F",
  },
  {
    icon: Phone,
    label: "電話",
    value: PHONE,
    href: PHONE_HREF,
  },
  {
    icon: Clock,
    label: "營業時間",
    value: "週二至週日 10:00 – 19:00\n週一公休",
  },
];

function LineButton({
  children,
  className,
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-pink hover:-translate-y-0.5 hover:bg-rose",
        variant === "outline" &&
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        className
      )}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left"
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-sm font-medium text-rose">
        <Heart className="h-4 w-4 fill-current" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-5 w-5 fill-current" />
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground">
              TUTU 寵物 SPA
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LineButton className="hidden px-4 py-2 text-sm sm:inline-flex">
              LINE 預約
            </LineButton>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted md:hidden"
              aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border/50 bg-background/95 px-4 pb-4 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <LineButton className="mt-2 w-full px-4 py-3 text-base">
                LINE 預約
              </LineButton>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="溫馨粉色調的寵物美容沙龍"
            width={1920}
            height={800}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl min-h-[70vh] flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-sm font-medium text-rose">
              <Sparkles className="h-4 w-4" />
              桃園區 · 寵物美容沙龍
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              TUTU 寵物 SPA
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
              專業 · 溫柔 · 像家一樣安心
              <br />
              讓每一次洗澡與美容，都是毛孩最享受的時光。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LineButton>立即 LINE 預約</LineButton>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Phone className="h-5 w-5 text-rose" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="服務項目" title="透明價格，安心服務" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-pink sm:p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blush text-rose transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {service.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-4 border-b border-border/60 pb-3 text-sm last:border-b-0 last:pb-0"
                    >
                      <span className="text-card-foreground">{item.name}</span>
                      <span className="shrink-0 font-semibold text-rose">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            * 實際價格依毛孩體型、毛長與狀況調整，歡迎 LINE 諮詢詳細報價。
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="毛孩作品" title="看看我們的漂亮寶貝" />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="聯絡我們" title="歡迎來店或線上預約" />

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Info */}
            <div className="flex flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href?.startsWith("http") ? "_blank" : undefined}
                    rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-primary/30 hover:shadow-pink"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blush text-rose">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="mt-1 whitespace-pre-line font-medium text-card-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-4 rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8">
                <div>
                  <h3 className="text-xl font-bold">立即預約，讓毛孩煥然一新</h3>
                  <p className="mt-2 text-primary-foreground/90">
                    加入 LINE 官方帳號，快速預約與諮詢，還能收到專屬優惠消息。
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-base font-medium text-primary transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-5 w-5" />
                    LINE 預約
                  </a>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:border-primary-foreground"
                  >
                    <Phone className="h-5 w-5" />
                    撥打電話
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="LINE"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[420px]">
                <iframe
                  title="TUTU 寵物 SPA 沙龍館 Google 地圖"
                  src={MAP_EMBED}
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-cream py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TUTU 寵物 SPA. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            讓每一次美容，都充滿愛與呵護。
          </p>
        </div>
      </footer>
    </div>
  );
}