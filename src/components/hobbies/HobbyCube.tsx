import { hobbies } from "@/data/portfolio";
import { Camera, Code2, Film, Laptop, PenLine, Sparkles } from "lucide-react";

const faceIcons = [Laptop, PenLine, Camera, Film, Code2, Sparkles];

const facePositions = [
  "cube-face--front",
  "cube-face--back",
  "cube-face--right",
  "cube-face--left",
  "cube-face--top",
  "cube-face--bottom",
];

export function HobbyCube() {
  return (
    <div className="cube-scene mx-auto flex h-[280px] w-full max-w-[320px] items-center justify-center sm:h-[340px]">
      <div className="cube">
        {hobbies.cubeFaces.map((face, i) => {
          const Icon = faceIcons[i];
          return (
            <div key={face.title} className={`cube-face ${facePositions[i]}`}>
              <Icon size={28} className="mb-2 text-cyan-300" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white">{face.title}</p>
              <p className="mt-1 text-center text-[10px] leading-tight text-zinc-400">
                {face.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
