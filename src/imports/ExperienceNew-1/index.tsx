function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[487px] mt-[645px] place-items-start relative row-1">
      <div className="bg-[rgba(0,0,0,0)] col-1 h-[73px] ml-0 mt-0 relative rounded-[34px] row-1 w-[322.195px]" />
      <div className="[word-break:break-word] col-1 flex flex-col font-['Poppins:Regular',sans-serif] h-[22px] justify-center ml-0 mt-[26px] not-italic relative row-1 text-[32px] text-center text-white w-[322.195px]">
        <p className="leading-[normal]">See my work</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[42px] mt-[53px] place-items-start relative row-1">
      <Group />
      <div className="[word-break:break-word] col-1 flex flex-col font-['Poppins:Regular',sans-serif] h-[99px] justify-center ml-0 mt-0 not-italic relative row-1 text-[36px] text-center text-white tracking-[2.52px] w-[1297px]">
        <p className="leading-[normal] mb-0">Discipline Head | UI/UX Designer @ Nucleus SJEC</p>
        <p className="leading-[normal]">January 2026 - Present</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Poppins:Medium',sans-serif] h-[434px] justify-center ml-[6px] mt-[155px] not-italic relative row-1 text-[30px] text-center text-white tracking-[2.1px] w-[1285px]">
        <p className="leading-[normal] mb-0">As the Discipline Head and UI/UX Designer at Nucleus Club, I contribute to both event management and creative design initiatives. I oversee the coordination and smooth execution of club activities while ensuring effective collaboration among team members.</p>
        <p className="leading-[normal]">{`On the design front, I create user-focused digital assets, promotional materials, and interface designs that enhance the club's visual identity and engagement. This role has strengthened my leadership, communication, teamwork, and design skills, allowing me to balance creativity with organization in a fast-paced environment.`}</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group3 />
      <div className="bg-[rgba(217,217,217,0)] border border-solid border-white col-1 h-[832px] ml-0 mt-0 relative rounded-[30px] row-1 w-[1382px]" />
    </div>
  );
}

function Experience() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center leading-[0] left-1/2 top-[calc(50%-2px)] w-[1382px]" data-name="experience">
      <div className="[word-break:break-word] flex flex-col font-['Itim:Regular',sans-serif] h-[103px] justify-center min-w-full not-italic relative shrink-0 text-[96px] text-center text-white w-[min-content]">
        <p className="leading-[normal]">Experience</p>
      </div>
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
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] h-[76px] justify-center relative shrink-0 w-[192px]">
        <p className="leading-[normal]">Experience</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[76px] justify-center relative shrink-0 w-[94px]">
        <p className="leading-[normal]">Skills</p>
      </div>
      <a className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] h-[76px] justify-center relative shrink-0 w-[145px]">
        <p className="leading-[normal]">Projects</p>
      </a>
      <a className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] h-[75px] justify-center relative shrink-0 text-center w-[194px]">
        <p className="leading-[normal]">Contact Me</p>
      </a>
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-0">
      <div className="absolute bottom-0 h-[104px] left-1/2 pointer-events-none top-0">
        <Frame1 />
      </div>
      <Frame />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.01px)] top-[1239px]">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Thin',sans-serif] justify-center leading-[0] left-[calc(50%+25px)] not-italic text-[16px] text-center text-white top-[1276px] tracking-[2.88px] w-[718px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`@2026 Manvitha Lewis. All rights reserved `}</p>
        <p className="leading-[normal]">{`Designed & Built with passion.`}</p>
      </div>
      <div className="absolute h-0 left-0 top-[1239px] w-[1440.022px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440.02 1">
            <line id="Line 3" stroke="var(--stroke-0, white)" x2="1440.02" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceNew() {
  return (
    <div className="bg-gradient-to-b from-black relative size-full to-[#001833]" data-name="EXPERIENCE new">
      <Experience />
      <Group4 />
      <Group1 />
    </div>
  );
}