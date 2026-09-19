import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata("/lomanye-kosoury");
import FramePage from "../components/FramePage";
import { frames } from "../data/products";
const frame = frames.find(item => item.id === "lomanye-kosoury")!;
export default function Page() { return <FramePage frame={frame} />; }
