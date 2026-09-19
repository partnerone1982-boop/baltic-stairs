import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata("/callback");
import EstimateForm from "../components/EstimateForm";


export default function CallbackPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e7] px-6 py-16 text-[#1f1f1f]">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-6 md:p-10">
        <h1 className="text-3xl font-bold md:text-4xl">Заказать звонок</h1>
        <EstimateForm callback />
        <p className="mt-8 text-zinc-600">Вы также можете позвонить нам: <a href="tel:+78129206840" className="whitespace-nowrap underline underline-offset-4">+7 (812) 920-68-40</a>.</p>
      </section>
    </main>
  );
}
