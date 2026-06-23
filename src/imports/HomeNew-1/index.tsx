import imgImageRemovebgPreview1 from "./6b1f52bc7c243cf3aec77050a72765a23be0acba.png";

function Frame1() {
  return <div className="-translate-x-1/2 bg-[rgba(118,182,255,0.24)] h-[104px] pointer-events-auto rounded-[56px] sticky top-0 w-[1440px]" />;
}

function Frame() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex gap-[80px] items-center justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[32px] text-white top-[14px]">
      <button className="cursor-pointer flex flex-col font-['Poppins:Bold',sans-serif] h-[75px] justify-center relative shrink-0 text-left w-[115px]">
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
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[76px] justify-center relative shrink-0 w-[145px]">
        <p className="leading-[normal]">Projects</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[75px] justify-center relative shrink-0 text-center w-[194px]">
        <p className="leading-[normal]">Contact Me</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-0">
      <div className="absolute bottom-0 h-[104px] left-1/2 pointer-events-none top-0">
        <Frame1 />
      </div>
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[43.08px] mt-[481px] place-items-start relative row-1">
      <div className="bg-[rgba(0,0,0,0)] col-1 h-[73px] ml-[43.08px] mt-[481px] relative rounded-[34px] row-1 w-[326.037px]" />
      <div className="[word-break:break-word] col-1 flex flex-col font-['Poppins:Regular',sans-serif] h-[22px] justify-center ml-[43.08px] mt-[507px] not-italic relative row-1 text-[32px] text-center text-white w-[326.037px]">
        <p className="leading-[normal]">See My Projects</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[444.51px] mt-[481px] place-items-start relative row-1">
      <div className="bg-[rgba(0,0,0,0)] col-1 h-[73px] ml-[444.51px] mt-[481px] relative rounded-[34px] row-1 w-[326.037px]" />
      <div className="[word-break:break-word] col-1 flex flex-col font-['Poppins:Regular',sans-serif] h-[22px] justify-center ml-[444.51px] mt-[507px] not-italic relative row-1 text-[32px] text-center text-white w-[326.037px]">
        <p className="leading-[normal]">My Resume</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-center leading-[0] place-items-start relative row-1 self-start shrink-0">
      <div className="[word-break:break-word] col-1 flex flex-col font-['Itim:Regular',sans-serif] h-[425px] justify-center ml-0 mt-0 not-italic relative row-1 text-[96px] text-right text-white w-[814.602px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[normal]">
            {`Hello, `}
            <br aria-hidden />
            {`I’m Manvitha Lewis, `}
            <br aria-hidden />
          </span>
          <span className="leading-[normal] text-[#ff9d9d]">a UI/UX Designer</span>
        </p>
      </div>
      <Group />
      <Group1 />
      <div className="col-1 h-[571px] ml-[870.6px] mt-0 relative row-1 w-[456px]" data-name="image-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRemovebgPreview1} />
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute grid grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] left-1/2 top-[calc(50%-0.5px)] w-[1326px]" data-name="landing">
      <Group2 />
    </div>
  );
}

export default function HomeNew() {
  return (
    <div className="bg-gradient-to-b from-black relative size-full to-[#001833]" data-name="HOME new">
      <Group3 />
      <Landing />
    </div>
  );
}