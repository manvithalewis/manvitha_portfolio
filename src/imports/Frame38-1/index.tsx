import svgPaths from "./svg-kym61vyn4n";

function MdiTickCircleOutline({ className }: { className?: string }) {
  return (
    <button className={className || "absolute block left-[328px] size-[124px] top-[91px]"} data-name="mdi:tick-circle-outline">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103.333 103.333">
          <path d={svgPaths.p23623600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </button>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents cursor-pointer left-[calc(50%-0.39px)] top-[91px]">
      <MdiTickCircleOutline />
      <button className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Thin',sans-serif] justify-center leading-[0] left-[calc(50%-0.39px)] not-italic text-[32px] text-center text-white top-[279px] tracking-[5.76px] w-[573.222px]">
        <p className="leading-[normal]">Email sent!</p>
      </button>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="backdrop-blur-[50px] bg-[#001833] relative size-full">
      <Group />
    </div>
  );
}