import AdditionalWorkGallery from "./AdditionalWorkGallery";
import { additionalWorkProjects } from "../data/additionalWorkProjects";
import SpiralProjectGallery from "./SpiralProjectGallery";
import { spiralProjects } from "../data/spiralProjects";
import SheetStringers2Project from "./SheetStringers2Project";
import SheetStringers3Project from "./SheetStringers3Project";
import SheetStringers4Project from "./SheetStringers4Project";
import BrokenStringers2Project from "./BrokenStringers2Project";
import BrokenStringers3Project from "./BrokenStringers3Project";
import BrokenStringers4Project from "./BrokenStringers4Project";
import Monokosour6Project from "./Monokosour6Project";
import Monokosour5Project from "./Monokosour5Project";
import Monokosour4Project from "./Monokosour4Project";
import TechnicalStaircase5Project from "./TechnicalStaircase5Project";
import TechnicalStaircase4Project from "./TechnicalStaircase4Project";
import SheetStringersProject from "./SheetStringersProject";
import TechnicalStaircaseProject from "./TechnicalStaircaseProject";
import OutdoorTechnicalStaircaseProject from "./OutdoorTechnicalStaircaseProject";
import MonokosourProject from "./MonokosourProject";
import BrokenStringersProject from "./BrokenStringersProject";
export const projectGalleries = [
  ...additionalWorkProjects.map(project => ({ id: project.id, Gallery: function AdditionalGallery() { return <AdditionalWorkGallery project={project} />; } })),
  ...spiralProjects.map(project => ({ id: project.id, Gallery: function SpiralGallery() { return <SpiralProjectGallery project={project} />; } })),
  { id: "sheet-stringers-2", Gallery: SheetStringers2Project },
  { id: "sheet-stringers-3", Gallery: SheetStringers3Project },
  { id: "sheet-stringers-4", Gallery: SheetStringers4Project },
  { id: "broken-stringers-2", Gallery: BrokenStringers2Project },
  { id: "broken-stringers-3", Gallery: BrokenStringers3Project },
  { id: "broken-stringers-4", Gallery: BrokenStringers4Project },

  { id: "monokosour-4", Gallery: Monokosour4Project },
  { id: "monokosour-5", Gallery: Monokosour5Project },
  { id: "monokosour-6", Gallery: Monokosour6Project },
  { id: "technical-staircase-5", Gallery: TechnicalStaircase5Project },
  { id: "technical-staircase-4", Gallery: TechnicalStaircase4Project },
  { id: "technical-staircase", Gallery: TechnicalStaircaseProject },
  { id: "technical-staircase-3", Gallery: OutdoorTechnicalStaircaseProject },
  { id: "monokosour-3", Gallery: MonokosourProject },
{ id: "sheet-stringers-1", Gallery: SheetStringersProject },
{ id: "broken-stringers-1", Gallery: BrokenStringersProject },
];
