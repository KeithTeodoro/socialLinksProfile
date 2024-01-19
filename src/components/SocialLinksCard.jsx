import ippoImg from "../assets/ippo.png";
import SocialLink from "./SocialLink";
export default function SocialLinksCard() {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-900">
      <div className="bg-zinc-800 flex flex-col justify-center items-center w-full max-w-sm rounded-xl py-9">
        <img
          src={ippoImg}
          alt="profile picture"
          className="h-20 w-20 rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold font-title text-slate-50 mb-1">
          Keith Andre F. Teodoro
        </h1>
        <h2 className="text-l font-semibold text-lime-300 font-title mb-7">
          Manila, Philippines
        </h2>
        <p className="font-title  text-slate-50 font-medium text-sm">
          "Web Developer"
        </p>
        <SocialLink url="https://github.com/KeithTeodoro">Github</SocialLink>
        <SocialLink url="https://www.linkedin.com/in/keithandreteodoro/">
          LinkedIn
        </SocialLink>
        <SocialLink url="https://www.facebook.com/Htieek/">Facebook</SocialLink>
        <SocialLink url="https://www.instagram.com/keithfojas/">
          Instagram
        </SocialLink>
      </div>
    </div>
  );
}
