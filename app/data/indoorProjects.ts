export type WorkPreview = { id: string; title: string; src: string };
export const monokosourProjects: WorkPreview[] = [
  { id: "monokosour-3", title: "Внутренняя лестница на монокосоуре", src: "/images/works/monokosour-3/general-view.webp" },
  ...[4, 5, 6].map(n => ({ id: `monokosour-${n}`, title: `Лестница на монокосоуре — проект ${n}`, src: `/images/works/monokosour-${n}/general-view.jpg` })),
];
export const indoorProjectGroups: { id: string; title: string; description: string; projects: WorkPreview[] }[] = [
  { id: "mono", title: "Монокосоур", description: "Внутренние лестницы на одном центральном металлическом косоуре.", projects: monokosourProjects },
  { id: "sheet", title: "Косоуры из листового металла", description: "Проекты внутренних лестниц с несущими косоурами из листового металла.", projects: [
    { id: "sheet-stringers-1", title: "Внутренняя лестница на листовых косоурах", src: "/images/works/sheet-stringers-1/IMG_9466.jpg" },
    { id: "sheet-stringers-2", title: "Лестница на листовых косоурах — проект 2", src: "/images/works/sheet-stringers-2/general-view.jpg" },
    { id: "sheet-stringers-3", title: "Лестница на листовых косоурах — проект 3", src: "/images/works/sheet-stringers-3/general-view.jpg" },
    { id: "sheet-stringers-4", title: "Лестница на листовых косоурах — проект 4", src: "/images/works/sheet-stringers-4/general-view.jpg" },
  ] },
  { id: "broken", title: "Ломаные косоуры из профильной трубы", description: "Лестницы со ступенчатым металлическим каркасом из профильной трубы.", projects: [
    { id: "broken-stringers-1", title: "Лестница на ломаных косоурах", src: "/images/works/broken-stringers-1/2025-07-03 12.39.26.jpg" },
    { id: "broken-stringers-2", title: "Лестница на ломаных косоурах — проект 2", src: "/images/works/broken-stringers-2/general-view.jpg" },
    { id: "broken-stringers-3", title: "Лестница на ломаных косоурах — проект 3", src: "/images/works/broken-stringers-3/general-view.jpg" },
    { id: "broken-stringers-4", title: "Лестница на ломаных косоурах — проект 4", src: "/images/works/broken-stringers-4/general-view.jpg" },
  ] },
];
