import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const features = [
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    desc: "Запустите сайт за минуты, не за месяцы. Всё работает с первого раза.",
  },
  {
    icon: "Layers",
    title: "Модульный подход",
    desc: "Каждый элемент — самостоятельный блок. Собирайте нужное, убирайте лишнее.",
  },
  {
    icon: "Shield",
    title: "Надёжность",
    desc: "Проверенные технологии и чистый код, который живёт долго без поддержки.",
  },
];

const steps = [
  { num: "01", title: "Опишите идею", desc: "Расскажите, что хотите создать — текстом, концепцией или референсами." },
  { num: "02", title: "Получите результат", desc: "Первая версия появляется за считанные минуты, без ожидания и согласований." },
  { num: "03", title: "Доработайте детали", desc: "Точечно правьте каждый элемент — цвета, тексты, логику кнопок." },
];

export default function Index() {
  const hero = useInView(0);
  const featuresSection = useInView(0.1);
  const stepsSection = useInView(0.1);
  const ctaSection = useInView(0.1);

  return (
    <div
      className="min-h-screen bg-[#0C0C0C] text-[#F0EBE1] font-golos overflow-x-hidden"
      style={{ position: "relative" }}
    >
      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Radial glow background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,169,110,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(201,169,110,0.07) 0%, transparent 60%)",
        }}
      />

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6">
        <div className="font-cormorant text-2xl font-semibold tracking-widest text-[#C9A96E]">
          БРЕНД
        </div>
        <div className="hidden md:flex gap-10 text-sm text-[#9A8F80] tracking-wide">
          <a href="#" className="hover:text-[#C9A96E] transition-colors duration-300">О нас</a>
          <a href="#" className="hover:text-[#C9A96E] transition-colors duration-300">Услуги</a>
          <a href="#" className="hover:text-[#C9A96E] transition-colors duration-300">Портфолио</a>
          <a href="#" className="hover:text-[#C9A96E] transition-colors duration-300">Контакты</a>
        </div>
        <button className="border border-[#C9A96E]/40 text-[#C9A96E] text-sm px-6 py-2 hover:bg-[#C9A96E]/10 transition-all duration-300 tracking-widest uppercase font-golos">
          Связаться
        </button>
      </nav>

      {/* HERO */}
      <section
        ref={hero.ref}
        className="relative z-10 min-h-[88vh] flex flex-col items-center justify-center text-center px-6 py-20"
      >
        {/* Decorative line */}
        <div className={`mb-10 flex items-center gap-4 transition-all duration-700 ${hero.inView ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "100ms" }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
          <span className="text-xs tracking-[0.4em] uppercase text-[#C9A96E]/70 font-golos">Первая версия</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
        </div>

        <h1
          className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light leading-[0.92] mb-8 transition-all duration-1000"
          style={{
            opacity: hero.inView ? 1 : 0,
            transform: hero.inView ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "200ms",
          }}
        >
          Создаём
          <br />
          <em className="italic text-[#C9A96E]">сайты</em>
          <br />
          <span className="font-semibold">которые работают</span>
        </h1>

        <p
          className="max-w-xl text-[#9A8F80] text-lg md:text-xl leading-relaxed mb-12 font-golos transition-all duration-700"
          style={{
            opacity: hero.inView ? 1 : 0,
            transform: hero.inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "450ms",
          }}
        >
          Это ваш новый цифровой продукт. Опишите задачу — и каждый элемент этой страницы станет именно вашим.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 items-center transition-all duration-700"
          style={{
            opacity: hero.inView ? 1 : 0,
            transform: hero.inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          <button className="bg-[#C9A96E] text-[#0C0C0C] px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#E8C98A] transition-all duration-300 hover:scale-105 active:scale-95">
            Начать проект
          </button>
          <button className="flex items-center gap-2 text-[#9A8F80] text-sm hover:text-[#C9A96E] transition-colors duration-300 group">
            Узнать больше
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Floating badge */}
        <div
          className="animate-float mt-20 border border-[#C9A96E]/20 bg-[#C9A96E]/5 backdrop-blur-sm px-6 py-3 flex items-center gap-3"
          style={{
            opacity: hero.inView ? 1 : 0,
            transition: "opacity 1s ease 900ms",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
          <span className="text-xs tracking-widest text-[#C9A96E]/70 uppercase font-golos">
            Готово за несколько минут
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C9A96E]" />
          <Icon name="ChevronsDown" size={14} className="text-[#C9A96E]" />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative z-10 flex items-center px-8 md:px-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </div>

      {/* FEATURES */}
      <section ref={featuresSection.ref} className="relative z-10 py-24 px-8 md:px-16">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: featuresSection.inView ? 1 : 0,
            transform: featuresSection.inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E]/60 mb-4 font-golos">Преимущества</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light">
            Почему это <em className="italic text-[#C9A96E]">работает</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="group border border-[#C9A96E]/10 bg-[#C9A96E]/[0.02] p-8 hover:border-[#C9A96E]/30 hover:bg-[#C9A96E]/[0.05] transition-all duration-500"
              style={{
                opacity: featuresSection.inView ? 1 : 0,
                transform: featuresSection.inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 150 + 200}ms, transform 0.6s ease ${i * 150 + 200}ms, border-color 0.5s, background-color 0.5s`,
              }}
            >
              <div className="w-12 h-12 border border-[#C9A96E]/20 flex items-center justify-center mb-6 group-hover:border-[#C9A96E]/50 transition-colors duration-300">
                <Icon name={f.icon} fallback="Zap" size={20} className="text-[#C9A96E]" />
              </div>
              <h3 className="font-cormorant text-2xl font-semibold mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-[#9A8F80] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section ref={stepsSection.ref} className="relative z-10 py-24 px-8 md:px-16 bg-[#C9A96E]/[0.03]">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: stepsSection.inView ? 1 : 0,
            transform: stepsSection.inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E]/60 mb-4 font-golos">Процесс</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light">
            Как это <em className="italic text-[#C9A96E]">устроено</em>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-0">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex gap-8 md:gap-16 items-start py-10 border-b border-[#C9A96E]/10 last:border-b-0 group"
              style={{
                opacity: stepsSection.inView ? 1 : 0,
                transform: stepsSection.inView ? "translateX(0)" : "translateX(-30px)",
                transition: `opacity 0.7s ease ${i * 180 + 200}ms, transform 0.7s ease ${i * 180 + 200}ms`,
              }}
            >
              <span className="font-cormorant text-5xl md:text-6xl text-[#C9A96E]/20 font-light leading-none group-hover:text-[#C9A96E]/40 transition-colors duration-500 select-none">
                {s.num}
              </span>
              <div className="flex-1 pt-2">
                <h3 className="font-cormorant text-2xl md:text-3xl font-semibold mb-2 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-[#9A8F80] leading-relaxed">{s.desc}</p>
              </div>
              <div className="hidden md:flex items-center pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="ArrowRight" size={20} className="text-[#C9A96E]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaSection.ref} className="relative z-10 py-32 px-8 md:px-16 text-center overflow-hidden">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
          }}
        />

        <div
          className="transition-all duration-700"
          style={{
            opacity: ctaSection.inView ? 1 : 0,
            transform: ctaSection.inView ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E]/60 mb-6 font-golos">Начните сегодня</p>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light mb-6 leading-tight">
            Ваш проект
            <br />
            <em className="italic text-[#C9A96E]">ждёт</em> своего часа
          </h2>
          <p className="text-[#9A8F80] max-w-md mx-auto mb-12 leading-relaxed">
            Напишите нам, и мы превратим вашу идею в живой продукт — быстро, красиво и надёжно.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="relative overflow-hidden bg-[#C9A96E] text-[#0C0C0C] px-12 py-5 text-sm font-semibold tracking-widest uppercase hover:bg-[#E8C98A] transition-all duration-300 hover:scale-105 active:scale-95 group">
              <span className="relative z-10">Обсудить проект</span>
            </button>
            <button className="border border-[#C9A96E]/30 text-[#C9A96E] px-12 py-5 text-sm tracking-widest uppercase hover:bg-[#C9A96E]/10 transition-all duration-300">
              Посмотреть портфолио
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#C9A96E]/10 px-8 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-cormorant text-xl font-semibold tracking-widest text-[#C9A96E]">БРЕНД</div>
        <p className="text-[#9A8F80]/50 text-xs tracking-widest">
          © 2025 — Все права защищены
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[#9A8F80]/50 hover:text-[#C9A96E] transition-colors duration-300">
            <Icon name="Instagram" size={16} />
          </a>
          <a href="#" className="text-[#9A8F80]/50 hover:text-[#C9A96E] transition-colors duration-300">
            <Icon name="Send" size={16} />
          </a>
          <a href="#" className="text-[#9A8F80]/50 hover:text-[#C9A96E] transition-colors duration-300">
            <Icon name="Mail" size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}