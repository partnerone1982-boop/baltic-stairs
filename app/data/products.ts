export const frames = [
  { id: "monokosour", href: "/monokosour", title: "Монокосоур", description: "Лестница на одном центральном металлическом косоуре. Современная конструкция с визуально лёгким каркасом." },
  { id: "listovye-kosoury", href: "/listovye-kosoury", title: "Косоуры из листового металла", description: "Металлические косоуры, изготовленные из листового металла по индивидуальному проекту." },
  { id: "lomanye-kosoury", href: "/lomanye-kosoury", title: "Ломаные косоуры из профильной трубы", description: "Ступенчатая металлическая конструкция из профильной трубы, повторяющая геометрию лестницы." },
  { id: "vintovye-lestnicy", href: "/vintovye-lestnicy", title: "Винтовой металлический каркас", description: "Металлический каркас для винтовых лестниц, применяемый в том числе там, где важно рационально использовать пространство." },
];
export const configurations = [
  { id: "straight", title: "Прямая", description: "Один марш без поворотов. Подходит для помещений, где достаточно длины для размещения лестницы по прямой линии." },
  { id: "l-shaped", title: "Г-образная", description: "Лестница с поворотом примерно на 90°. Может выполняться с площадкой или забежными ступенями." },
  { id: "u-shaped", title: "П-образная", description: "Конструкция с разворотом примерно на 180°. Подходит для компактного размещения лестницы между этажами." },
  { id: "winders", title: "С забежными ступенями", description: "Поворот лестницы выполняется без промежуточной площадки за счёт ступеней специальной формы." },
];
export const consultation = "Не знаю / нужна консультация";
export const frameLabels: Record<string, string> = Object.fromEntries([...frames.map(f => [f.id, f.title]), ["consultation", consultation]]);
export const configurationLabels: Record<string, string> = Object.fromEntries([...configurations.map(c => [c.id, c.title]), ["consultation", consultation]]);
