import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata("/monokosour");
import FramePage from "../components/FramePage";
import { frames } from "../data/products";
const frame = frames.find(item => item.id === "monokosour")!;
export default function Page() { return <FramePage frame={frame} />; }
