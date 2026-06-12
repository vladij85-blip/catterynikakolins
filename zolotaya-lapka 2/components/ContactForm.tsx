"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-sent">
        🐾 Заявка отправлена! Мы свяжемся с вами в ближайшее время и пришлём
        свежие фото котят.
        <br />
        <br />
        <button className="btn btn-gold" onClick={() => setSent(false)}>
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: подключите свой бэкенд / Telegram-бота / Formspree
        setSent(true);
      }}
    >
      <input name="name" placeholder="Ваше имя" required aria-label="Ваше имя" />
      <input
        name="contact"
        placeholder="Телефон или Telegram"
        required
        aria-label="Телефон или Telegram"
      />
      <textarea
        name="message"
        placeholder="Какой котёнок вам приглянулся? Расскажите о себе 🐱"
        aria-label="Сообщение"
      />
      <button type="submit" className="btn btn-gold">
        Отправить заявку 🐾
      </button>
    </form>
  );
}
