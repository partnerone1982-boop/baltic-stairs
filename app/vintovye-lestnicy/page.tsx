import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata("/vintovye-lestnicy");
import FramePage from "../components/FramePage";
import { frames } from "../data/products";
const frame = frames.find(item => item.id === "vintovye-lestnicy")!;
export default function Page() { return <FramePage frame={frame} />; }
