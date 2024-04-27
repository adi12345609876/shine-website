import Image from "next/image";

function ImageCard({ src, hovertitle, key }) {
  return (
    <div class="relative group" key={key}>
      {/* <Image src={src} width={500} height={500} className="object-cover" /> */}
      <img src={src} className=" object-cover lg:w-96  lg:h-80 h-48 w-52" />
      <p class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-slate-700 text-slate-200 font-semibold  ">
        {hovertitle}
      </p>
    </div>
  );
}

export default ImageCard;
