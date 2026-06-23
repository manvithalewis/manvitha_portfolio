import imgRectangle5 from "./7be018219d843b528fd2200a0ae544e94d255d9b.png";

function Group3() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[576.97px] not-italic text-white top-[165px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Thin',sans-serif] justify-center left-[576.97px] text-[20px] text-justify top-[372px] tracking-[3.6px] w-[728.598px]">
        <p className="leading-[normal]">Designed a user-friendly bakery landing page in Figma, focusing on a clean layout, strong visual branding, and smooth user experience. The design emphasizes clear product categorization, custom cake ordering, and intuitive user interaction to support both aesthetics and conversion.</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Itim:Regular',sans-serif] justify-center left-[937.94px] text-[40px] text-center top-[213px] tracking-[2.8px] w-[721.931px]">
        <p className="leading-[normal]">{`Sugar & Lace - Home Bakery Landing Page UI Design`}</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-[159px]">
      <Group3 />
      <div className="absolute h-[408px] left-0 top-[159px] w-[547px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[103.23%] left-[-0.55%] max-w-none top-[-0.8%] w-[101.28%]" src={imgRectangle5} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Itim:Regular',sans-serif] h-[103px] justify-center leading-[0] left-[calc(50%-0.95px)] not-italic text-[96px] text-center text-white top-[51.5px] w-[792.41px]">
        <p className="leading-[normal]">Projects</p>
      </div>
      <Group4 />
    </div>
  );
}

function MyProjects() {
  return (
    <div className="-translate-x-1/2 absolute h-[526px] left-[calc(50%-0.5px)] top-[184px] w-[1301px]" data-name="My projects">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[634px] top-[673px]">
      <div className="absolute bg-[rgba(0,0,0,0)] h-[73px] left-[634px] rounded-[34px] top-[673px] w-[322.195px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[795.1px] not-italic text-[32px] text-center text-white top-[710px] w-[322.195px]">
        <p className="leading-[normal]">Prototype</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[1030px] top-[676px]">
      <div className="absolute bg-[rgba(0,0,0,0)] h-[73px] left-[1030px] rounded-[34px] top-[676px] w-[322.195px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[1191.1px] not-italic text-[32px] text-center text-white top-[713px] w-[322.195px]">
        <p className="leading-[normal]">More Details</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[69px] top-[184px]">
      <MyProjects />
      <Group />
      <Group2 />
    </div>
  );
}

function Frame1() {
  return <div className="-translate-x-1/2 bg-[rgba(118,182,255,0.24)] h-[104px] pointer-events-auto rounded-[56px] sticky top-0 w-[1440px]" />;
}

function Frame() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex gap-[80px] items-center justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[32px] text-white top-[14px]">
      <button className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] h-[75px] justify-center relative shrink-0 text-left w-[115px]">
        <p className="leading-[normal]">Home</p>
      </button>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[76px] justify-center relative shrink-0 w-[167px]">
        <p className="leading-[normal]">About Me</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[76px] justify-center relative shrink-0 w-[192px]">
        <p className="leading-[normal]">Experience</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[76px] justify-center relative shrink-0 w-[94px]">
        <p className="leading-[normal]">Skills</p>
      </div>
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] h-[76px] justify-center relative shrink-0 w-[145px]">
        <p className="leading-[normal]">Projects</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[75px] justify-center relative shrink-0 text-center w-[194px]">
        <p className="leading-[normal]">Contact Me</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-0">
      <div className="absolute bottom-0 h-[104px] left-1/2 pointer-events-none top-0">
        <Frame1 />
      </div>
      <Frame />
    </div>
  );
}

function Group5() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.01px)] top-[829px]">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Thin',sans-serif] justify-center leading-[0] left-[calc(50%+25px)] not-italic text-[16px] text-center text-white top-[866px] tracking-[2.88px] w-[718px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`@2026 Manvitha Lewis. All rights reserved `}</p>
        <p className="leading-[normal]">{`Designed & Built with passion.`}</p>
      </div>
      <div className="absolute h-0 left-0 top-[829px] w-[1440.022px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440.02 1">
            <line id="Line 3" stroke="var(--stroke-0, white)" x2="1440.02" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsNew() {
  return (
    <div className="bg-gradient-to-b from-black relative size-full to-[#001833]" data-name="PROJECTS new">
      <Group6 />
      <Group7 />
      <Group5 />
    </div>
  );
}