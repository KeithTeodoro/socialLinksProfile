export default function SocialLink({ children, url }) {
  return (
    <button className="w-9/12 py-2 rounded-lg mt-4 font-title bg-[#333333]  text-slate-50 hover:bg-lime-300 hover:text-slate-950">
      <a href={url} target="_blank">
        {children}
      </a>
    </button>
  );
}
