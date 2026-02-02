import { useState } from "react"
import { ChevronRight, Car, Check } from "lucide-react"

export function PricingCalculator() {
  const [vehicleCount, setVehicleCount] = useState(5)
  const [selectedPackage, setSelectedPackage] = useState<"basic" | "fleet" | "premium">("fleet")

  // Базовые цены за авто в месяц
  const pricing = {
    basic: 3500,
    fleet: 5500,
    premium: 12000,
  }

  const packages = {
    basic: {
      name: "Базовый",
      color: "green",
      features: [
        "ТО 2 раза в год",
        "Сезонная замена и хранение шин",
        "Мойка 1 раз в месяц",
        "Контроль штрафов и налогов",
      ],
    },
    fleet: {
      name: "Флот",
      color: "blue",
      features: [
        "Всё из Базового",
        "Полное сопровождение ДТП",
        "Регистрация в ГИБДД",
        "Ежемесячная отчётность",
        "Персональный менеджер",
      ],
    },
    premium: {
      name: "Премиум",
      color: "purple",
      features: [
        "Всё из пакета Флот",
        "Экспресс-детейлинг с выездом",
        "Приоритет (2-4 часа)",
        "Подменное авто премиум-класса",
        "Подбор и покупка авто",
      ],
    },
  }

  const calculateTotal = () => {
    const pricePerVehicle = pricing[selectedPackage]
    let total = pricePerVehicle * vehicleCount

    // Скидки за объём
    if (vehicleCount >= 10) total *= 0.9 // -10%
    if (vehicleCount >= 20) total *= 0.95 // ещё -5%
    if (vehicleCount >= 50) total *= 0.93 // ещё -7%

    return Math.round(total)
  }

  const getDiscount = () => {
    if (vehicleCount >= 50) return "22%"
    if (vehicleCount >= 20) return "14%"
    if (vehicleCount >= 10) return "10%"
    return null
  }

  return (
    <section className="relative py-40 px-6" style={{ backgroundColor: "#09090B" }}>
      {/* Gradient overlay */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-zinc-400 text-sm">Калькулятор стоимости</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Рассчитайте стоимость
        </h2>

        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Прозрачное ценообразование.</span> Укажите количество автомобилей и
          выберите пакет — получите точную стоимость с учётом скидок.
        </p>

        {/* Calculator Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Controls */}
            <div>
              <div className="mb-8">
                <label className="text-zinc-300 text-sm font-medium mb-4 block">Количество автомобилей</label>
                <div className="flex items-center gap-4 mb-4">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={vehicleCount}
                    onChange={(e) => setVehicleCount(Number(e.target.value))}
                    className="flex-1 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 min-w-[100px]">
                    <Car className="w-4 h-4 text-zinc-400" />
                    <span className="text-white font-medium">{vehicleCount}</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-zinc-500">
                  <span>1</span>
                  <span>50</span>
                  <span>100+</span>
                </div>
              </div>

              <div>
                <label className="text-zinc-300 text-sm font-medium mb-4 block">Выберите пакет</label>
                <div className="space-y-3">
                  {(Object.keys(packages) as Array<keyof typeof packages>).map((key) => {
                    const pkg = packages[key]
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedPackage(key)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                          selectedPackage === key
                            ? "border-white bg-zinc-800"
                            : "border-zinc-700 bg-zinc-800/30 hover:border-zinc-600"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">{pkg.name}</span>
                          {selectedPackage === key && <Check className="w-5 h-5 text-green-500" />}
                        </div>
                        <span className="text-zinc-400 text-sm">
                          от {pricing[key].toLocaleString()} ₽/авто/мес
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right: Summary */}
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <h3 className="text-white font-medium text-xl mb-6">Итоговая стоимость</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-zinc-400">
                  <span>Пакет</span>
                  <span className="text-white">{packages[selectedPackage].name}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Количество авто</span>
                  <span className="text-white">{vehicleCount}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Цена за авто</span>
                  <span className="text-white">{pricing[selectedPackage].toLocaleString()} ₽/мес</span>
                </div>
                {getDiscount() && (
                  <div className="flex justify-between text-green-500">
                    <span>Скидка за объём</span>
                    <span>-{getDiscount()}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-zinc-700 pt-4 mb-6">
                <div className="flex justify-between items-end">
                  <span className="text-zinc-400">Итого в месяц</span>
                  <div className="text-right">
                    <div className="text-3xl font-medium text-white">{calculateTotal().toLocaleString()} ₽</div>
                    <div className="text-xs text-zinc-500 mt-1">
                      {Math.round(calculateTotal() * 12).toLocaleString()} ₽/год
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-zinc-400 text-sm mb-3">Что входит:</div>
                <div className="space-y-2">
                  {packages[selectedPackage].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full px-5 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors text-sm">
                Получить консультацию
              </button>
              <p className="text-xs text-zinc-500 text-center mt-3">Расчёт займёт 1 минуту</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
