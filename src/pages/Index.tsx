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
    <div className="min-h-screen bg-[#F4F8FB] text-[#1A2B3C] font-ibm overflow-x-hidden">

      {/* Subtle top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#1A6FA8] via-[#2AACE2] to-[#1A6FA8]" />

      {/* NAV */}
      <nav className="bg-white shadow-sm border-b border-[#DCE9F3] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#1A6FA8] flex items-center justify-center">
              <Icon name="Cross" size={18} className="text-white" />
            </div>
            <span className="font-montserrat text-2xl font-bold tracking-widest text-[#1A6FA8]">
              МИРК
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-[#4A6580] tracking-wide">
            <a href="#program" className="hover:text-[#1A6FA8] transition-colors duration-200 font-medium">Программа</a>
            <a href="#formats" className="hover:text-[#1A6FA8] transition-colors duration-200 font-medium">Форматы</a>
            <a href="#advantages" className="hover:text-[#1A6FA8] transition-colors duration-200 font-medium">Преимущества</a>
            <a href="#contact" className="hover:text-[#1A6FA8] transition-colors duration-200 font-medium">Контакты</a>
          </div>
          <button className="bg-[#1A6FA8] text-white text-sm px-6 py-2.5 rounded-lg hover:bg-[#155d8f] transition-all duration-200 tracking-wide font-semibold shadow-sm hover:shadow-md">
            Записаться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        ref={hero.ref}
        className="relative bg-white overflow-hidden"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A6FA8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Blue gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#EBF5FD] to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-[#EBF5FD] border border-[#B6D8F0] text-[#1A6FA8] text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8 transition-all duration-700"
              style={{ opacity: hero.inView ? 1 : 0, transform: hero.inView ? "translateY(0)" : "translateY(20px)", transitionDelay: "100ms" }}
            >
              <Icon name="BookOpen" size={13} />
              Повышение квалификации
            </div>

            <h1
              className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6 transition-all duration-1000 text-[#1A2B3C]"
              style={{
                opacity: hero.inView ? 1 : 0,
                transform: hero.inView ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "200ms",
              }}
            >
              Первая
              <br />
              <em className="italic text-[#1A6FA8] font-normal">медицинская</em>
              <br />
              <span className="font-semibold">доврачебная помощь</span>
            </h1>

            <p
              className="text-[#4A6580] text-lg md:text-xl leading-relaxed mb-10 max-w-xl transition-all duration-700"
              style={{
                opacity: hero.inView ? 1 : 0,
                transform: hero.inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "400ms",
              }}
            >
              Быстро и грамотно оказать помощь пострадавшему — значит спасти жизнь.
              16-часовые занятия дают базовый объём знаний и практических приёмов.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 items-start transition-all duration-700"
              style={{
                opacity: hero.inView ? 1 : 0,
                transform: hero.inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "550ms",
              }}
            >
              <button className="bg-[#1A6FA8] text-white px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#155d8f] transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                Записаться на курс
              </button>
              <a
                href="#program"
                className="flex items-center gap-2 text-[#1A6FA8] text-sm font-medium hover:text-[#155d8f] transition-colors duration-200 py-3.5 group"
              >
                Изучить программу
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Stats row */}
            <div
              className="mt-14 flex flex-wrap gap-8 transition-all duration-700"
              style={{
                opacity: hero.inView ? 1 : 0,
                transitionDelay: "750ms",
              }}
            >
              {[
                { value: "16", unit: "ак. ч.", label: "Обучения", icon: "Clock" },
                { value: "1", unit: "день", label: "Продолжительность", icon: "CalendarDays" },
                { value: "от 6 300", unit: "р.", label: "Стоимость", icon: "BadgeRussianRuble" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF5FD] flex items-center justify-center">
                    <Icon name={stat.icon} size={18} className="text-[#1A6FA8]" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-montserrat text-2xl text-[#1A2B3C] font-semibold">{stat.value}</span>
                      <span className="text-xs text-[#1A6FA8] font-medium">{stat.unit}</span>
                    </div>
                    <span className="text-xs text-[#7A9AB5] uppercase tracking-wide">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* О ПРОГРАММЕ */}
      <section className="bg-[#F4F8FB] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs tracking-[0.35em] uppercase text-[#1A6FA8] font-semibold mb-4 bg-[#EBF5FD] px-3 py-1.5 rounded-md">
              О программе
            </span>
            <h2 className="font-montserrat text-4xl md:text-5xl font-light leading-tight mb-6 text-[#1A2B3C]">
              Обязательное обучение<br />
              <em className="italic text-[#1A6FA8] font-normal">по Трудовому Кодексу</em>
            </h2>
            <p className="text-[#4A6580] leading-relaxed mb-5">
              Согласно Трудовому Кодексу, на работодателей накладываются обязательства
              обучить членов коллектива оказанию неотложной помощи пострадавшим на производстве.
            </p>
            <p className="text-[#4A6580] leading-relaxed">
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
                className="bg-white border border-[#DCE9F3] rounded-xl p-5 hover:border-[#1A6FA8]/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EBF5FD] flex items-center justify-center mb-3 group-hover:bg-[#1A6FA8] transition-colors duration-300">
                  <Icon name={item.icon} size={18} className="text-[#1A6FA8] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-sm font-semibold text-[#1A2B3C] leading-tight mb-1">{item.label}</div>
                <div className="text-xs text-[#7A9AB5]">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМАТЫ ОБУЧЕНИЯ */}
      <section id="formats" ref={formatsSection.ref} className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{
              opacity: formatsSection.inView ? 1 : 0,
              transform: formatsSection.inView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <span className="inline-block text-xs tracking-[0.35em] uppercase text-[#1A6FA8] font-semibold mb-4 bg-[#EBF5FD] px-3 py-1.5 rounded-md">
              Варианты обучения
            </span>
            <h2 className="font-montserrat text-4xl md:text-5xl font-light text-[#1A2B3C]">
              Выберите <em className="italic text-[#1A6FA8] font-normal">удобный формат</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseFormats.map((fmt, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer group
                  ${fmt.highlight
                    ? "border-[#1A6FA8] bg-[#1A6FA8] text-white shadow-xl shadow-[#1A6FA8]/20"
                    : "border-[#DCE9F3] bg-[#F4F8FB] hover:border-[#1A6FA8]/50 hover:shadow-lg hover:bg-white"
                  }`}
                style={{
                  opacity: formatsSection.inView ? 1 : 0,
                  transform: formatsSection.inView ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 120 + 200}ms, transform 0.6s ease ${i * 120 + 200}ms, border-color 0.3s, background-color 0.3s, box-shadow 0.3s, scale 0.2s`,
                }}
              >
                {fmt.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2AACE2] text-white text-[10px] tracking-widest uppercase px-4 py-1 rounded-full font-bold shadow-sm">
                    Популярный
                  </div>
                )}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${fmt.highlight ? "bg-white/20" : "bg-[#EBF5FD]"}`}>
                  <Icon name={fmt.icon} size={20} className={fmt.highlight ? "text-white" : "text-[#1A6FA8]"} />
                </div>
                <div className={`text-xs tracking-[0.3em] uppercase font-semibold mb-3 ${fmt.highlight ? "text-white/80" : "text-[#1A6FA8]"}`}>
                  {fmt.type}
                </div>
                <div className={`flex items-center gap-2 text-sm mb-2 ${fmt.highlight ? "text-white/80" : "text-[#4A6580]"}`}>
                  <Icon name="Clock" size={13} className={fmt.highlight ? "text-white/60" : "text-[#7A9AB5]"} />
                  {fmt.duration}
                </div>
                <div className={`flex items-center gap-2 text-sm mb-2 ${fmt.highlight ? "text-white/80" : "text-[#4A6580]"}`}>
                  <Icon name="CalendarDays" size={13} className={fmt.highlight ? "text-white/60" : "text-[#7A9AB5]"} />
                  {fmt.date}
                </div>
                <div className={`flex items-start gap-2 text-sm mb-6 flex-1 ${fmt.highlight ? "text-white/70" : "text-[#4A6580]"}`}>
                  <Icon name="Info" size={13} className={`shrink-0 mt-0.5 ${fmt.highlight ? "text-white/60" : "text-[#7A9AB5]"}`} />
                  <span className="leading-relaxed">{fmt.schedule}</span>
                </div>
                <div className={`border-t pt-5 mt-auto ${fmt.highlight ? "border-white/20" : "border-[#DCE9F3]"}`}>
                  <div className={`font-montserrat text-3xl font-semibold mb-4 ${fmt.highlight ? "text-white" : "text-[#1A2B3C]"}`}>
                    {fmt.price}
                  </div>
                  <button className={`w-full text-xs tracking-wide font-semibold uppercase py-3 rounded-lg transition-all duration-200
                    ${fmt.highlight
                      ? "bg-white text-[#1A6FA8] hover:bg-[#EBF5FD]"
                      : "bg-[#1A6FA8] text-white hover:bg-[#155d8f]"
                    }`}>
                    Хочу учиться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОМУ ПОДОЙДЁТ */}
      <section ref={audienceSection.ref} className="bg-[#EBF5FD] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{
              opacity: audienceSection.inView ? 1 : 0,
              transform: audienceSection.inView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <span className="inline-block text-xs tracking-[0.35em] uppercase text-[#1A6FA8] font-semibold mb-4 bg-white px-3 py-1.5 rounded-md">
              Аудитория
            </span>
            <h2 className="font-montserrat text-4xl md:text-5xl font-light text-[#1A2B3C]">
              Кому <em className="italic text-[#1A6FA8] font-normal">подойдёт</em> программа
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {audience.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#DCE9F3] p-8 hover:border-[#1A6FA8]/40 hover:shadow-lg transition-all duration-300 group flex gap-5"
                style={{
                  opacity: audienceSection.inView ? 1 : 0,
                  transform: audienceSection.inView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${i * 180 + 200}ms, transform 0.6s ease ${i * 180 + 200}ms, box-shadow 0.3s, border-color 0.3s`,
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#EBF5FD] flex items-center justify-center shrink-0 group-hover:bg-[#1A6FA8] transition-colors duration-300">
                  <Icon name={item.icon} size={26} className="text-[#1A6FA8] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-[#1A2B3C] mb-2">{item.title}</h3>
                  <p className="text-[#4A6580] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОГРАММА */}
      <section id="program" ref={programSection.ref} className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{
              opacity: programSection.inView ? 1 : 0,
              transform: programSection.inView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <span className="inline-block text-xs tracking-[0.35em] uppercase text-[#1A6FA8] font-semibold mb-4 bg-[#EBF5FD] px-3 py-1.5 rounded-md">
              Содержание обучения
            </span>
            <h2 className="font-montserrat text-4xl md:text-5xl font-light text-[#1A2B3C]">
              Учебная <em className="italic text-[#1A6FA8] font-normal">программа</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programModules.map((mod, i) => (
              <div
                key={i}
                className="bg-[#F4F8FB] border border-[#DCE9F3] rounded-2xl p-8 hover:border-[#1A6FA8]/40 hover:shadow-md transition-all duration-300 group"
                style={{
                  opacity: programSection.inView ? 1 : 0,
                  transform: programSection.inView ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 130 + 200}ms, transform 0.6s ease ${i * 130 + 200}ms, box-shadow 0.3s, border-color 0.3s`,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1A6FA8] text-white flex items-center justify-center text-lg font-montserrat font-bold shrink-0">
                    {mod.num}
                  </div>
                  <h3 className="font-montserrat text-xl font-semibold text-[#1A2B3C] leading-snug pt-1">{mod.title}</h3>
                </div>
                <ul className="space-y-3">
                  {mod.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#4A6580] leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2AACE2] shrink-0 mt-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section id="advantages" ref={advantagesSection.ref} className="bg-[#F4F8FB] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{
              opacity: advantagesSection.inView ? 1 : 0,
              transform: advantagesSection.inView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <span className="inline-block text-xs tracking-[0.35em] uppercase text-[#1A6FA8] font-semibold mb-4 bg-[#EBF5FD] px-3 py-1.5 rounded-md">
              Почему МИРК
            </span>
            <h2 className="font-montserrat text-4xl md:text-5xl font-light text-[#1A2B3C]">
              Преимущества <em className="italic text-[#1A6FA8] font-normal">обучения</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="bg-white border border-[#DCE9F3] rounded-2xl p-8 hover:border-[#1A6FA8]/40 hover:shadow-lg transition-all duration-300 group text-center"
                style={{
                  opacity: advantagesSection.inView ? 1 : 0,
                  transform: advantagesSection.inView ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 130 + 200}ms, transform 0.6s ease ${i * 130 + 200}ms, box-shadow 0.3s, border-color 0.3s`,
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#EBF5FD] mb-5 group-hover:bg-[#1A6FA8] transition-colors duration-300">
                  <Icon name={adv.icon} size={28} className="text-[#1A6FA8] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold text-[#1A2B3C] mb-3">{adv.title}</h3>
                <p className="text-[#4A6580] text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" ref={ctaSection.ref} className="bg-[#1A6FA8] py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />

        <div
          className="max-w-2xl mx-auto text-center relative transition-all duration-1000"
          style={{
            opacity: ctaSection.inView ? 1 : 0,
            transform: ctaSection.inView ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <Icon name="Mail" size={13} />
            Записаться на курс
          </div>

          <h2 className="font-montserrat text-5xl md:text-6xl font-light leading-tight mb-5 text-white">
            Готовы освоить
            <br />
            <em className="italic font-normal text-[#A8D8F0]">навыки спасения жизней?</em>
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Оставьте заявку — и наш менеджер свяжется с вами для уточнения формата
            и даты начала обучения.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Ваше имя"
              className="flex-1 bg-white/10 border border-white/25 text-white placeholder-white/50 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-white/60 transition-colors duration-200"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="flex-1 bg-white/10 border border-white/25 text-white placeholder-white/50 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-white/60 transition-colors duration-200"
            />
          </div>

          <button className="bg-white text-[#1A6FA8] px-10 py-4 rounded-xl text-sm font-bold tracking-wide hover:bg-[#EBF5FD] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg">
            Хочу учиться
          </button>

          <p className="mt-6 text-xs text-white/40 tracking-wide">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A2B3C] py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1A6FA8] flex items-center justify-center">
              <Icon name="Cross" size={15} className="text-white" />
            </div>
            <span className="font-montserrat text-xl font-bold tracking-widest text-white">МИРК</span>
          </div>
          <div className="text-xs text-white/40 tracking-wide text-center">
            Медицинский институт развития квалификации&nbsp;&nbsp;·&nbsp;&nbsp;
            Лицензия на образовательную деятельность
          </div>
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} МИРК
          </div>
        </div>
      </footer>
    </div>
  );
}