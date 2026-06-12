import Image from "next/image";
import CatHero from "@/components/CatHero";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import {
  achievements,
  faq,
  gallery,
  kittens,
  parents,
  reviews,
  site,
} from "@/data/site";

const statusLabel = {
  available: "Свободен",
  reserved: "Резерв",
  sold: "Дома 💛",
} as const;

const marqueeWords = [
  "🐾 золотая шиншилла",
  "💚 изумрудные глаза",
  "👑 британская порода",
  "🏆 чемпионы WCF",
  "🧸 плюшевая шубка",
  "💛 котята в любви",
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <div className="container header">
        <div className="header-inner">
          <a href="#top" className="logo">
            <span className="logo-paw">🐾</span>
            {site.name}
          </a>
          <nav className="nav" aria-label="Основная навигация">
            <a href="#kittens">Котята</a>
            <a href="#parents">Производители</a>
            <a href="#gallery">Галерея</a>
            <a href="#reviews">Отзывы</a>
            <a href="#faq">Вопросы</a>
          </nav>
          <a href="#contact" className="btn btn-emerald">
            Забронировать
          </a>
        </div>
      </div>

      <main id="top">
        {/* HERO */}
        <section className="container hero">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">🏡 питомник британских кошек · {site.city}</span>
              <h1>
                <span className="gold-word">Золотые шиншиллы</span> с{" "}
                <span className="emerald-word">изумрудными</span> глазами
              </h1>
              <p className="hero-lead">
                Мы растим плюшевых британцев редкого золотого окраса — в любви,
                с документами WCF и пожизненной поддержкой заводчика. Каждый
                котёнок — маленькое солнце для вашего дома.
              </p>
              <div className="hero-actions">
                <a href="#kittens" className="btn btn-gold">
                  Выбрать котёнка 💛
                </a>
                <a href="#about" className="btn btn-ghost">
                  О питомнике
                </a>
              </div>
              <div className="hero-badges">
                <span className="badge">🏆 Чемпионы выставок</span>
                <span className="badge">📋 Документы WCF</span>
                <span className="badge">💉 Полная вакцинация</span>
              </div>
            </div>
            <div className="hero-photo-stage">
              <div className="cat-blob" aria-hidden="true" />
              <div className="hero-photo">
                <Image
                  src="/gallery/nika-hero.jpg"
                  alt="Ника, основательница питомника, с золотым котёнком на руках"
                  fill
                  sizes="(max-width: 880px) 92vw, 540px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <span className="hero-photo-caption">
                Ника — основательница питомника 💛
              </span>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="container section" data-reveal id="about">
          <div className="about-grid">
            <div>
              <span className="eyebrow">✨ о питомнике</span>
              <h2 className="section-title">
                История, которая началась с одной кошки
              </h2>
              <p className="section-lead">
            Питомник «{site.name}» родился из большой любви к британской породе
            и редчайшему золотому окрасу. Мы работаем с лучшими европейскими
            линиями, участвуем в выставках WCF и тщательно подбираем пары, чтобы
            котята наследовали не только тёплую золотую шубку и изумрудные
            глаза, но и фирменный британский характер — спокойный, ласковый и
            уравновешенный. Все наши животные живут дома, а не в клетках:
            котята с первого дня растут на руках, под мурчание мам и в
            окружении заботы.
              </p>
            </div>
            <CatHero />
          </div>
        </section>

        {/* KITTENS */}
        <section className="container section" data-reveal id="kittens">
          <span className="eyebrow">🐱 выпускники и малыши</span>
          <h2 className="section-title">Котята ищут дом</h2>
          <p className="section-lead">
            Каждый малыш переезжает с метрикой, ветпаспортом, прививками и
            нашей поддержкой на всю жизнь.
          </p>
          <div className="cards-grid">
            {kittens.map((k) => (
              <article className="kitten-card" data-reveal key={k.name}>
                <span className={`status status-${k.status}`}>
                  {statusLabel[k.status]}
                </span>
                <div className="kitten-photo">
                  <Image
                    src={k.photo}
                    alt={`Котёнок ${k.name} — британская золотая шиншилла`}
                    fill
                    sizes="(max-width: 640px) 92vw, 280px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="kitten-name">{k.name}</h3>
                <p className="kitten-meta">
                  {k.sex} · родился(ась) {k.born}
                  <br />
                  {k.color}
                </p>
                <p className="kitten-price">{k.price}</p>
                {k.status === "available" && (
                  <a href="#contact" className="btn btn-emerald">
                    Хочу этого котёнка!
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* PARENTS */}
        <section className="container section" data-reveal id="parents">
          <span className="eyebrow">👑 родители</span>
          <h2 className="section-title">Наши производители</h2>
          <p className="section-lead">
            Титулованные родители с проверенными родословными и крепким
            здоровьем — основа золотого качества наших котят.
          </p>
          <div className="parents-grid">
            {parents.map((p) => (
              <article className="parent-card" data-reveal key={p.name}>
                <div className="parent-avatar">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="120px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="parent-role">{p.role}</p>
                  <h3>{p.name}</h3>
                  <p className="kitten-meta">{p.color}</p>
                  <span className="parent-titles">🏆 {p.titles}</span>
                  <p className="parent-about">{p.about}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="container section" data-reveal id="gallery">
          <span className="eyebrow">📸 галерея</span>
          <h2 className="section-title">Золото в каждом кадре</h2>
          <p className="section-lead">
            Наши золотые и серебристые малыши — пушистое счастье крупным
            планом.
          </p>
          <div className="gallery-grid">
            {gallery.map((g, i) => (
              <div
                className={`gallery-item${g.tall ? " tall" : ""}${g.wide ? " wide" : ""}`}
                key={g.src}
                data-reveal
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 46vw, 270px"
                  style={{ objectFit: "cover" }}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS + ACHIEVEMENTS */}
        <section className="container section" data-reveal id="reviews">
          <span className="eyebrow">💬 отзывы</span>
          <h2 className="section-title">Что говорят наши семьи</h2>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <article className="review-card" data-reveal key={r.author}>
                <p>«{r.text}»</p>
                <p className="review-author">— {r.author}</p>
              </article>
            ))}
          </div>
          <div className="achievements">
            <h3>🏆 Достижения на выставках</h3>
            <ul>
              {achievements.map((a) => (
                <li key={a}>
                  <span aria-hidden="true">⭐</span> {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="container section" data-reveal id="faq">
          <span className="eyebrow">❓ частые вопросы</span>
          <h2 className="section-title">Всё о переезде котёнка</h2>
          <div className="faq-list">
            {faq.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="container section" data-reveal id="contact">
          <div className="contact-wrap">
            <div className="contact-info">
              <h2>Оставьте заявку — пришлём свежие фото 📷</h2>
              <p>
                Расскажите, какого котёнка ищете, и мы поможем подобрать вашего
                золотого друга. Отвечаем быстро!
              </p>
              <div className="contact-links">
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
                  📞 {site.phone}
                </a>
                <a href={`mailto:${site.email}`}>✉️ {site.email}</a>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  📸 Instagram
                </a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
                <a href={site.telegram} target="_blank" rel="noopener noreferrer">
                  ✈️ Telegram
                </a>
                <a href={site.tiktok} target="_blank" rel="noopener noreferrer">
                  🎵 TikTok
                </a>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                  👍 Facebook
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="paws" aria-hidden="true">
          🐾🐾🐾
        </div>
        © {new Date().getFullYear()} Питомник «{site.name}» · британские золотые
        шиншиллы · {site.city}
      </footer>
    </>
  );
}
