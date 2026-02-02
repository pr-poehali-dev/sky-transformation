import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, ArrowRight, MessageSquare, GitBranch, X, Puzzle, Figma } from "lucide-react"

const carouselCards = [
  {
    id: 1,
    category: "Пакет Базовый",
    title: "Для малого бизнеса с 1-3 авто",
    icon: ArrowRight,
    mockup: "basic",
  },
  {
    id: 2,
    category: "Пакет Флот",
    title: "Для среднего и крупного автопарка",
    icon: Plus,
    mockup: "fleet",
  },
  {
    id: 3,
    category: "Пакет Премиум",
    title: "Для топ-менеджеров и VIP-автомобилей",
    icon: ArrowRight,
    mockup: "premium",
  },
]

function BasicMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="text-xs text-zinc-400 mb-2">Включено:</div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-green-500 mt-0.5">✓</span>
        <span className="text-zinc-300">ТО 2 раза в год</span>
      </div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-green-500 mt-0.5">✓</span>
        <span className="text-zinc-300">Сезонная замена и хранение шин</span>
      </div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-green-500 mt-0.5">✓</span>
        <span className="text-zinc-300">Мойка 1 раз в месяц</span>
      </div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-green-500 mt-0.5">✓</span>
        <span className="text-zinc-300">Контроль штрафов и налогов</span>
      </div>
      <div className="mt-3 pt-3 border-t border-zinc-800">
        <div className="text-xs text-zinc-500">Идеально для стартапов</div>
      </div>
    </div>
  )
}

function FleetMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="text-xs text-zinc-400 mb-2">Базовый +</div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-blue-500 mt-0.5">★</span>
        <span className="text-zinc-300">Полное сопровождение ДТП</span>
      </div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-blue-500 mt-0.5">★</span>
        <span className="text-zinc-300">Регистрация в ГИБДД</span>
      </div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-blue-500 mt-0.5">★</span>
        <span className="text-zinc-300">Ежемесячная отчётность</span>
      </div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-blue-500 mt-0.5">★</span>
        <span className="text-zinc-300">Персональный менеджер</span>
      </div>
      <div className="mt-3 pt-3 border-t border-zinc-800">
        <div className="text-xs text-zinc-500">Для автопарка 5-50 машин</div>
      </div>
    </div>
  )
}

function PremiumMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="text-xs text-zinc-400 mb-2">Флот + VIP</div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-purple-500 mt-0.5">◆</span>
        <span className="text-zinc-300">Экспресс-детейлинг с выездом</span>
      </div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-purple-500 mt-0.5">◆</span>
        <span className="text-zinc-300">Приоритет (2-4 часа)</span>
      </div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-purple-500 mt-0.5">◆</span>
        <span className="text-zinc-300">Подменное авто премиум</span>
      </div>
      <div className="flex items-start gap-2 text-xs">
        <span className="text-purple-500 mt-0.5">◆</span>
        <span className="text-zinc-300">Подбор и покупка авто</span>
      </div>
      <div className="mt-3 pt-3 border-t border-zinc-800">
        <div className="text-xs text-zinc-500">Для руководителей</div>
      </div>
    </div>
  )
}

function AsksMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-24 h-24 rounded-2xl bg-zinc-800 flex items-center justify-center">
        <X className="w-12 h-12 text-zinc-400" strokeWidth={2.5} />
      </div>
    </div>
  )
}

function IntegrationsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center">
            <Puzzle className="w-5 h-5 text-zinc-500" />
          </div>
        ))}
      </div>
    </div>
  )
}

function FigmaMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <Figma className="w-16 h-16 text-zinc-400" />
      </div>
    </div>
  )
}

function ApiMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-zinc-800/50 rounded-lg px-4 py-2 border border-zinc-700/50">
        <span className="text-xs font-mono text-zinc-400">ORBIT API</span>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "basic":
      return <BasicMockup />
    case "fleet":
      return <FleetMockup />
    case "premium":
      return <PremiumMockup />
    case "asks":
      return <AsksMockup />
    case "integrations":
      return <IntegrationsMockup />
    case "figma":
      return <FigmaMockup />
    case "api":
      return <ApiMockup />
    default:
      return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const scrollRight = () => {
    setScrollPosition(Math.min(carouselCards.length - 3, scrollPosition + 1))
  }

  return (
    <section className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Orange indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-zinc-400">Пакеты услуг</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Выберите пакет
              <br />
              под ваш автопарк
            </h2>
          </div>

          {/* Description */}
          <p className="text-zinc-400 lg:max-w-sm lg:pt-12">
            Расширьте возможности Orbit с помощью интеграций, которые синхронизируют всю команду и держат фокус на
            главном.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${scrollPosition * (100 / 4)}%)` }}
          >
            {carouselCards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[calc(25%-12px)] min-w-[280px]">
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden h-[340px] flex flex-col">
                  {/* Mockup area */}
                  <div className="flex-1 relative overflow-hidden">
                    <CardMockup type={card.mockup} />
                    {/* Fade overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(9,9,11,0.9), transparent)",
                      }}
                    />
                  </div>

                  {/* Card footer - refactored for proper icon alignment */}
                  <div className="p-4 border-t border-zinc-800/30">
                    <div className="flex items-center justify-between gap-3">
                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-500 mb-1">{card.category}</p>
                        <p className="text-sm text-zinc-200 leading-snug">{card.title}</p>
                      </div>
                      {/* Icon button - fixed size, vertically centered */}
                      <button className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:border-zinc-600 transition-colors">
                        <card.icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition >= carouselCards.length - 3}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}