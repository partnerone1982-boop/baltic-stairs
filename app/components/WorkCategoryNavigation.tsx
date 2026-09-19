"use client";

export default function WorkCategoryNavigation({ categories }: { categories: { id: string; title: string }[] }) {
  return (
    <nav aria-labelledby="work-category-navigation" className="mt-8">
      <h2 id="work-category-navigation" className="text-xl font-semibold">Выберите тип лестницы</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {categories.map(category => (
          <a key={category.id} href={`#catalog-${category.id}`}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold transition hover:border-[#c4ac70] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            onClick={event => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
              const target = document.getElementById(`catalog-${category.id}`);
              if (!target) return;
              event.preventDefault();
              window.history.pushState(null, "", `#catalog-${category.id}`);
              target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
              target.focus({ preventScroll: true });
            }}>
            {category.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
