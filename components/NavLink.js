import Link from "next/link";

function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="block py-1 pl-2 pr-2 text-slate-700 text-base sm:text-xl rounded md:p-0 hover:text-slate-900"
    >
      {title}
    </Link>
  );
}

export default NavLink;
