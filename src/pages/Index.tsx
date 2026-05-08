import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const programs = [
  {
    month: "Июнь",
    name: "AI FunLS Summer Camp",
    desc: "Погружение в английский через ИИ и командные проекты. Создаём стикерпаки, учимся говорить и думать на English.",
    icon: "Bot",
    age: "6–15 лет",
  },
  {
    month: "Июль",
    name: "Weird Science",
    desc: "Английский через научные эксперименты. Каждый урок — опыт, открытие и новые слова на практике.",
    icon: "FlaskConical",
    age: "6–15 лет",
  },
  {
    month: "Август",
    name: "Brainstorm",
    desc: "Игровое повторение школьной программы перед сентябрём. Закрепляем грамматику и лексику через активные форматы.",
    icon: "Zap",
    age: "6–15 лет",
  },
]

const intensives = [
  { name: "Читаю легко!", desc: "Экспресс-курс по технике чтения — 11 занятий", icon: "BookOpen", age: "6–8 лет" },
  { name: "Beginners", desc: "Устный вводный курс для тех, кто только начинает", icon: "Star", age: "6–8 лет" },
  { name: "Рывок AS1→AS2", desc: "Интенсивная подготовка для перехода на новый уровень", icon: "TrendingUp", age: "2–4 класс" },
  { name: "Экспресс-выравнивание", desc: "Грамматическая база Round-up 2 за лето", icon: "Target", age: "4–5 класс" },
  { name: "Курс А2", desc: "Глубокая проработка грамматики и лексики (Macmillan)", icon: "GraduationCap", age: "6–8 класс" },
]

const advantages = [
  { icon: "BookMarked", title: "Мировые пособия", desc: "Macmillan, Pearson, Oxford — проверенная методология" },
  { icon: "Clock", title: "90 минут погружения", desc: "Глубокое погружение в тему без школьной спешки" },
  { icon: "BarChart2", title: "Измеримый результат", desc: "От алфавита до уверенного А2 — чёткие цели" },
  { icon: "Gift", title: "Welcome-pack в подарок", desc: "Фирменная сумка, бутылка для воды и канцелярия" },
]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        {/* Городской лагерь */}
        <section
          className="relative rounded-4xl py-10 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-16 mt-6"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16">
            <div className="mb-8 text-center">
              <span className="text-accent font-mono text-xs tracking-widest uppercase">Городской лагерь · Июнь — Август</span>
              <h2 className="text-foreground text-3xl md:text-4xl font-bold mt-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                Языковые площадки 2026
              </h2>
              <p className="text-muted-foreground font-mono text-sm mt-2 max-w-xl mx-auto">
                Три тематических смены — каждая со своим характером. Английский как часть приключения.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((p) => (
                <div key={p.name} className="border border-border rounded-2xl p-6 bg-background/60 flex flex-col gap-3 hover:border-accent transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-mono text-xs tracking-widest uppercase">{p.month}</span>
                    <Icon name={p.icon as "Bot"} size={20} className="text-accent" />
                  </div>
                  <h3 className="text-foreground font-bold text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>{p.name}</h3>
                  <p className="text-muted-foreground font-mono text-xs leading-relaxed flex-1">{p.desc}</p>
                  <span className="text-accent/70 font-mono text-xs">{p.age}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Образовательные интенсивы */}
        <section className="px-4 md:px-0 mt-6">
          <div className="mb-6 text-center">
            <span className="text-accent font-mono text-xs tracking-widest uppercase">Образовательные интенсивы</span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold mt-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              Точечный рывок за каникулы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {intensives.map((item) => (
              <div key={item.name} className="border border-border rounded-2xl p-5 bg-card flex items-start gap-4 hover:border-accent transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon name={item.icon as "BookOpen"} size={18} className="text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-foreground font-bold text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>{item.name}</h3>
                  </div>
                  <p className="text-muted-foreground font-mono text-xs leading-relaxed">{item.desc}</p>
                  <span className="text-accent/70 font-mono text-xs mt-1 block">{item.age}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Скидка */}
        <section className="px-4 md:px-0 mt-6">
          <div className="rounded-2xl border border-accent/40 bg-accent/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-accent font-mono text-xs tracking-widest uppercase">Специальное предложение</span>
              <h3 className="text-foreground text-2xl font-bold mt-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                Скидка 10% при полной оплате
              </h3>
              <p className="text-muted-foreground font-mono text-sm mt-1">+ Welcome-pack в подарок: фирменная сумка, бутылка и канцелярия</p>
            </div>
            <a href="#contact">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono flex items-center gap-2">
                Записаться сейчас
                <Icon name="ArrowUpRight" size={18} />
              </button>
            </a>
          </div>
        </section>

        {/* Преимущества */}
        <section className="px-4 md:px-0 mt-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advantages.map((adv) => (
              <div key={adv.title} className="border border-border rounded-2xl p-5 bg-card text-center flex flex-col items-center gap-3">
                <Icon name={adv.icon as "BookMarked"} size={24} className="text-accent" />
                <h4 className="text-foreground font-bold text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>{adv.title}</h4>
                <p className="text-muted-foreground font-mono text-xs leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Index
