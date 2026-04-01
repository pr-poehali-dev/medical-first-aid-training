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

const courseFormats = [
  {
    type: "дистанционно",
    duration: "1 день (16 ак. ч.)",
    date: "В любое время",
    schedule: "Доступ к материалам 24/7, обучение в удобное время",
    price: "6 300 р.",
    icon: "Monitor",
    highlight: false,
  },
  {
    type: "очно",
    duration: "1 день (16 ак. ч.)",
    date: "13 апр. 2026",
    schedule: "Занятия: Пн, Ср, Пт",
    price: "6 300 р.",
    icon: "BookOpen",
    highlight: false,
  },
  {
    type: "группа выходного дня",
    duration: "1 день (16 ак. ч.)",
    date: "13 апр. 2026",
    schedule: "Занятия по субботам и воскресеньям",
    price: "6 900 р.",
    icon: "Calendar",
    highlight: true,
  },
  {
    type: "очно",
    duration: "1 день (16 ак. ч.)",
    date: "13 апр. 2026",
    schedule: "Занятия: Пн, Ср, Пт",
    price: "20 200 р.",
    icon: "Users",
    highlight: false,
  },
];

const audience = [
  {
    icon: "GraduationCap",
    title: "Начинающие специалисты",
    desc: "Программа дает базовые знания и навыки для старта профессиональной деятельности",
  },
  {
    icon: "Stethoscope",
    title: "Практикующие специалисты",
    desc: "Позволяет систематизировать знания, освоить новые методики и повысить квалификацию",
  },
];

const programModules = [
  {
    num: "01",
    title: "Организационно-правовые аспекты",
    topics: [
      "Нормативно-правовая база, права, обязанности и ответственность",
      "Организация оказания первой помощи в Российской Федерации",
      "Общая последовательность действий на месте происшествия",
      "Современные наборы средств и устройств первой помощи",
    ],
  },
  {
    num: "02",
    title: "Отсутствие сознания, остановка дыхания и кровообращения",
    topics: [
      "Основные признаки жизни у пострадавшего",
      "Причины нарушения дыхания и кровообращения",
      "Способы проверки сознания, дыхания, кровообращения",
      "Современный алгоритм проведения сердечно-лёгочной реанимации",
    ],
  },
  {
    num: "03",
    title: "Наружные кровотечения и травмы",
    topics: [
      "Признаки различных видов кровотечения (артериального, венозного, капиллярного)",
      "Способы временной остановки наружного кровотечения",
      "Травматический шок и мероприятия по его предупреждению",
      "Травмы головы, шеи, груди, живота, таза, конечностей, позвоночника",
    ],
  },
  {
    num: "04",
    title: "Прочие состояния",
    topics: [
      "Виды ожогов, их признаки и первая помощь",
      "Холодовая травма, её виды и помощь",
      "Отравления через дыхательные пути, пищеварительный тракт, кожу",
      "Инфекционная безопасность и начальная медицинская подготовка",
    ],
  },
];

const advantages = [
  {
    icon: "Award",
    title: "Итоговый документ",
    desc: "Удостоверение о повышении квалификации государственного образца",
  },
  {
    icon: "Lightbulb",
    title: "Современные методики",
    desc: "Актуальные методики и технологии, применяемые в современной практике",
  },
  {
    icon: "UserCheck",
    title: "Практикующие преподаватели",
    desc: "Действующие специалисты с многолетним опытом в медицинской сфере",
  },
  {
    icon: "ShieldCheck",
    title: "Государственная лицензия",
    desc: "Действующая лицензия на образовательную деятельность гарантирует качество обучения",
  },
];

export default function Index() {
  const hero = useInView(0);
  const formatsSection = useInView(0.05);
  const audienceSection = useInView(0.1);
  const programSection = useInView(0.05);
  const advantagesSection = useInView(0.1);
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
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,169,110,0.10) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(201,169,110,0.06) 0%, transparent 60%)",
        }}
      />

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6 border-b border-[#C9A96E]/10">
        <div className="font-cormorant text-2xl font-semibold tracking-widest text-[#C9A96E]">
          МИРК
        </div>
        <div className="hidden md:flex gap-10 text-sm text-[#9A8F80] tracking-wide">
          <a href="#program" className="hover:text-[#C9A96E] transition-colors duration-300">Программа</a>
          <a href="#formats" className="hover:text-[#C9A96E] transition-colors duration-300">Форматы</a>
          <a href="#advantages" className="hover:text-[#C9A96E] transition-colors duration-300">Преимущества</a>
          <a href="#contact" className="hover:text-[#C9A96E] transition-colors duration-300">Контакты</a>
        </div>
        <button className="border border-[#C9A96E]/40 text-[#C9A96E] text-sm px-6 py-2 hover:bg-[#C9A96E]/10 transition-all duration-300 tracking-widest uppercase font-golos">
          Записаться
        </button>
      </nav>

      {/* HERO */}
      <section
        ref={hero.ref}
        className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20"
      >
        {/* Badge */}
        <div
          className="mb-8 flex items-center gap-4 transition-all duration-700"
          style={{ opacity: hero.inView ? 1 : 0, transitionDelay: "100ms" }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
          <span className="text-xs tracking-[0.4em] uppercase text-[#C9A96E]/70 font-golos">
            Повышение квалификации
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
        </div>

        <h1
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8 transition-all duration-1000 max-w-5xl"
          style={{
            opacity: hero.inView ? 1 : 0,
            transform: hero.inView ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "200ms",
          }}
        >
          Первая
          <br />
          <em className="italic text-[#C9A96E]">медицинская</em>
          <br />
          <span className="font-semibold">доврачебная помощь</span>
        </h1>

        <p
          className="max-w-2xl text-[#9A8F80] text-lg md:text-xl leading-relaxed mb-10 font-golos transition-all duration-700"
          style={{
            opacity: hero.inView ? 1 : 0,
            transform: hero.inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "450ms",
          }}
        >
          Быстро и грамотно оказать помощь пострадавшему — значит спасти жизнь.
          12-часовые занятия дают базовый объём знаний и практических приёмов.
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
            Хочу учиться
          </button>
          <a
            href="#program"
            className="flex items-center gap-2 text-[#9A8F80] text-sm hover:text-[#C9A96E] transition-colors duration-300 group"
          >
            Изучить программу
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-20 grid grid-cols-3 gap-8 md:gap-16 max-w-xl w-full transition-all duration-700"
          style={{
            opacity: hero.inView ? 1 : 0,
            transitionDelay: "800ms",
          }}
        >
          {[
            { value: "16", unit: "ак. ч.", label: "Обучения" },
            { value: "1", unit: "день", label: "Продолжительность" },
            { value: "6 300", unit: "р.", label: "От стоимости" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex items-baseline gap-1">
                <span className="font-cormorant text-3xl md:text-4xl text-[#C9A96E] font-light">{stat.value}</span>
                <span className="text-xs text-[#C9A96E]/60">{stat.unit}</span>
              </div>
              <span className="text-xs text-[#9A8F80] tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
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

      {/* О ПРОГРАММЕ */}
      <section className="relative z-10 py-20 px-8 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E]/60 mb-4 font-golos">О программе</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-6">
              Обязательное обучение<br />
              <em className="italic text-[#C9A96E]">по Трудовому Кодексу</em>
            </h2>
            <p className="text-[#9A8F80] leading-relaxed mb-6">
              Согласно Трудовому Кодексу, на работодателей накладываются обязательства
              обучить членов коллектива оказанию неотложной помощи пострадавшим на производстве.
            </p>
            <p className="text-[#9A8F80] leading-relaxed">
              Сначала обучение проводится после заключения трудового договора, а затем —
              с периодичностью как минимум раз в 12 месяцев.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "Clock", label: "16 академических часов", sub: "интенсивного обучения" },
              { icon: "RefreshCw", label: "Раз в 12 месяцев", sub: "обязательная периодичность" },
              { icon: "FileText", label: "Трудовой Кодекс", sub: "нормативная основа" },
              { icon: "CheckCircle", label: "Удостоверение", sub: "государственного образца" },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#C9A96E]/10 bg-[#C9A96E]/[0.03] p-5 hover:border-[#C9A96E]/25 transition-all duration-400"
              >
                <Icon name={item.icon} size={20} className="text-[#C9A96E] mb-3" />
                <div className="text-sm font-medium text-[#F0EBE1] leading-tight mb-1">{item.label}</div>
                <div className="text-xs text-[#9A8F80]">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative z-10 flex items-center px-8 md:px-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </div>

      {/* ФОРМАТЫ ОБУЧЕНИЯ */}
      <section id="formats" ref={formatsSection.ref} className="relative z-10 py-24 px-8 md:px-16">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: formatsSection.inView ? 1 : 0,
            transform: formatsSection.inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E]/60 mb-4 font-golos">Варианты обучения</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light">
            Выберите <em className="italic text-[#C9A96E]">удобный формат</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {courseFormats.map((fmt, i) => (
            <div
              key={i}
              className={`relative flex flex-col border p-7 transition-all duration-500 hover:scale-[1.02] cursor-pointer group
                ${fmt.highlight
                  ? "border-[#C9A96E]/50 bg-[#C9A96E]/[0.07]"
                  : "border-[#C9A96E]/15 bg-[#C9A96E]/[0.02] hover:border-[#C9A96E]/30 hover:bg-[#C9A96E]/[0.05]"
                }`}
              style={{
                opacity: formatsSection.inView ? 1 : 0,
                transform: formatsSection.inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 120 + 200}ms, transform 0.6s ease ${i * 120 + 200}ms, border-color 0.4s, background-color 0.4s, scale 0.3s`,
              }}
            >
              {fmt.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A96E] text-[#0C0C0C] text-[10px] tracking-widest uppercase px-3 py-1 font-semibold">
                  Популярный
                </div>
              )}
              <Icon name={fmt.icon} size={22} className="text-[#C9A96E] mb-5" />
              <div className="text-xs tracking-[0.35em] uppercase text-[#C9A96E]/60 mb-3 font-golos">{fmt.type}</div>
              <div className="flex items-center gap-2 text-[#9A8F80] text-sm mb-2">
                <Icon name="Clock" size={13} className="text-[#C9A96E]/50 shrink-0" />
                {fmt.duration}
              </div>
              <div className="flex items-center gap-2 text-[#9A8F80] text-sm mb-2">
                <Icon name="CalendarDays" size={13} className="text-[#C9A96E]/50 shrink-0" />
                {fmt.date}
              </div>
              <div className="flex items-start gap-2 text-[#9A8F80] text-sm mb-6 flex-1">
                <Icon name="Info" size={13} className="text-[#C9A96E]/50 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{fmt.schedule}</span>
              </div>
              <div className="border-t border-[#C9A96E]/15 pt-5 mt-auto">
                <div className="font-cormorant text-3xl text-[#C9A96E] font-light mb-4">{fmt.price}</div>
                <button className={`w-full text-xs tracking-widest uppercase py-3 transition-all duration-300
                  ${fmt.highlight
                    ? "bg-[#C9A96E] text-[#0C0C0C] hover:bg-[#E8C98A]"
                    : "border border-[#C9A96E]/40 text-[#C9A96E] hover:bg-[#C9A96E]/10"
                  }`}>
                  Хочу учиться
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative z-10 flex items-center px-8 md:px-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </div>

      {/* КОМУ ПОДОЙДЁТ */}
      <section ref={audienceSection.ref} className="relative z-10 py-24 px-8 md:px-16">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: audienceSection.inView ? 1 : 0,
            transform: audienceSection.inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E]/60 mb-4 font-golos">Аудитория</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light">
            Кому <em className="italic text-[#C9A96E]">подойдёт</em> программа
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {audience.map((item, i) => (
            <div
              key={i}
              className="flex gap-6 border border-[#C9A96E]/10 bg-[#C9A96E]/[0.02] p-8 hover:border-[#C9A96E]/25 hover:bg-[#C9A96E]/[0.05] transition-all duration-500"
              style={{
                opacity: audienceSection.inView ? 1 : 0,
                transform: audienceSection.inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 150 + 200}ms, transform 0.6s ease ${i * 150 + 200}ms, border-color 0.5s, background-color 0.5s`,
              }}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 border border-[#C9A96E]/30 flex items-center justify-center">
                  <Icon name={item.icon} size={22} className="text-[#C9A96E]" />
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#9A8F80] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative z-10 flex items-center px-8 md:px-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </div>

      {/* ПРОГРАММА ОБУЧЕНИЯ */}
      <section id="program" ref={programSection.ref} className="relative z-10 py-24 px-8 md:px-16">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: programSection.inView ? 1 : 0,
            transform: programSection.inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E]/60 mb-4 font-golos">Учебный план</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light">
            Программа <em className="italic text-[#C9A96E]">обучения</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {programModules.map((mod, i) => (
            <div
              key={i}
              className="border border-[#C9A96E]/10 bg-[#C9A96E]/[0.02] p-8 hover:border-[#C9A96E]/25 hover:bg-[#C9A96E]/[0.04] transition-all duration-500 group"
              style={{
                opacity: programSection.inView ? 1 : 0,
                transform: programSection.inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 120 + 200}ms, transform 0.6s ease ${i * 120 + 200}ms, border-color 0.5s, background-color 0.5s`,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="font-cormorant text-4xl text-[#C9A96E]/30 font-light leading-none">{mod.num}</span>
                <h3 className="font-cormorant text-xl font-semibold leading-tight pt-1">{mod.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {mod.topics.map((topic, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]/50 mt-2 shrink-0" />
                    <span className="text-[#9A8F80] text-sm leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative z-10 flex items-center px-8 md:px-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </div>

      {/* ПРЕИМУЩЕСТВА */}
      <section id="advantages" ref={advantagesSection.ref} className="relative z-10 py-24 px-8 md:px-16">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: advantagesSection.inView ? 1 : 0,
            transform: advantagesSection.inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E]/60 mb-4 font-golos">Почему МИРК</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light">
            Преимущества <em className="italic text-[#C9A96E]">обучения</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="border border-[#C9A96E]/10 bg-[#C9A96E]/[0.02] p-8 hover:border-[#C9A96E]/30 hover:bg-[#C9A96E]/[0.05] transition-all duration-500 group text-center"
              style={{
                opacity: advantagesSection.inView ? 1 : 0,
                transform: advantagesSection.inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 130 + 200}ms, transform 0.6s ease ${i * 130 + 200}ms, border-color 0.5s, background-color 0.5s`,
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 border border-[#C9A96E]/20 mb-6 group-hover:border-[#C9A96E]/50 transition-colors duration-500">
                <Icon name={adv.icon} size={24} className="text-[#C9A96E]" />
              </div>
              <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#C9A96E]/20 text-[#C9A96E] text-xs font-semibold mb-4 -mt-4 ml-2 align-top">
                {i + 1}
              </div>
              <h3 className="font-cormorant text-xl font-semibold mb-3">{adv.title}</h3>
              <p className="text-[#9A8F80] text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative z-10 flex items-center px-8 md:px-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </div>

      {/* CTA */}
      <section id="contact" ref={ctaSection.ref} className="relative z-10 py-32 px-8 md:px-16 text-center">
        <div
          className="max-w-3xl mx-auto transition-all duration-1000"
          style={{
            opacity: ctaSection.inView ? 1 : 0,
            transform: ctaSection.inView ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
            <span className="text-xs tracking-[0.4em] uppercase text-[#C9A96E]/70">Записаться на курс</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
          </div>

          <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Готовы освоить
            <br />
            <em className="italic text-[#C9A96E]">навыки спасения жизней?</em>
          </h2>

          <p className="text-[#9A8F80] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Оставьте заявку — и наш менеджер свяжется с вами для уточнения формата
            и даты начала обучения.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Ваше имя"
              className="flex-1 bg-transparent border border-[#C9A96E]/25 text-[#F0EBE1] placeholder-[#9A8F80]/60 px-5 py-3 text-sm focus:outline-none focus:border-[#C9A96E]/60 transition-colors duration-300"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="flex-1 bg-transparent border border-[#C9A96E]/25 text-[#F0EBE1] placeholder-[#9A8F80]/60 px-5 py-3 text-sm focus:outline-none focus:border-[#C9A96E]/60 transition-colors duration-300"
            />
          </div>

          <button className="bg-[#C9A96E] text-[#0C0C0C] px-12 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#E8C98A] transition-all duration-300 hover:scale-105 active:scale-95">
            Хочу учиться
          </button>

          <p className="mt-6 text-xs text-[#9A8F80]/60 tracking-wide">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#C9A96E]/10 py-10 px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-cormorant text-xl font-semibold tracking-widest text-[#C9A96E]">
            МИРК
          </div>
          <div className="text-xs text-[#9A8F80]/60 tracking-wide text-center">
            Медицинский институт развития квалификации&nbsp;&nbsp;·&nbsp;&nbsp;
            Лицензия на образовательную деятельность
          </div>
          <div className="text-xs text-[#9A8F80]/60">
            © {new Date().getFullYear()} МИРК
          </div>
        </div>
      </footer>
    </div>
  );
}