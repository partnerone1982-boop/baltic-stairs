import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata("/listovye-kosoury");
import FramePage from "../components/FramePage";
import { frames } from "../data/products";
const frame = frames.find(item => item.id === "listovye-kosoury")!;
export default function Page() { return <FramePage frame={frame} />; }
