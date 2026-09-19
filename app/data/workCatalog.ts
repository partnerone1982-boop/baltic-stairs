import { workProjectOrder } from "./workProjectOrder";
import { additionalWorkProjects } from "./additionalWorkProjects";
import { spiralProjects } from "./spiralProjects";
import { indoorProjectGroups, type WorkPreview } from "./indoorProjects";
export const workCatalog: { id: string; title: string; projects: WorkPreview[] }[] = [
 ...indoorProjectGroups.map(({ id, title, projects }) => ({ id, title: id === "sheet" ? "Листовые косоуры" : id === "broken" ? "Ломаные косоуры" : title, projects: [...projects, ...additionalWorkProjects.filter(project => project.group === id)] })),
 { id: "spiral", title: "Винтовые лестницы", projects: [...spiralProjects, ...additionalWorkProjects.filter(project => project.group === "spiral")] },
 { id: "outdoor", title: "Наружные лестницы", projects: additionalWorkProjects.filter(project => project.group === "outdoor") },
 { id: "technical", title: "Технические лестницы", projects: [
  { id: "technical-staircase", title: "Техническая лестница", src: "/images/works/technical-staircase/general-view.webp" },
  { id: "technical-staircase-3", title: "Наружная техническая лестница", src: "/images/works/technical-staircase-3/general-view.webp" },
  { id: "technical-staircase-4", title: "Наружная техническая лестница с площадками", src: "/images/works/technical-staircase-4/general-view.jpg" },
  { id: "technical-staircase-5", title: "Внутренняя техническая лестница", src: "/images/works/technical-staircase-5/general-view.jpg" },
  ...additionalWorkProjects.filter(project => project.group === "technical"),
 ] },
].map(group => {
 const order = workProjectOrder[group.id];
 if (!order) return group;
 const position = new Map(order.map((id, index) => [id, index]));
 return { ...group, projects: [...group.projects].sort((a, b) => (position.get(a.id) ?? order.length) - (position.get(b.id) ?? order.length)) };
});
