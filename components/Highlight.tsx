import Image from "next/image";
import { BiCircle } from "react-icons/bi";

export default function Highlight() {
  return (
    <section className="flex flex-col justify-center h-screen bg-[#fafafa]">
      <div className="h-5/6">
        <h2 className="text-center text-sky-500 font-medium my-16">
          Organize your customer information
        </h2>
        <div className="text-center">
          <Image
            src="/illustration.jpg"
            width="350"
            height="300"
            alt="illustration"
          />
        </div>
        <div className="flex space-x-2 justify-center mt-5">
          <BiCircle
            size={10}
            className="bg-sky-400 text-sky-400 rounded-full"
          />
          <BiCircle
            size={10}
            className="bg-sky-300 text-sky-300 rounded-full"
          />
          <BiCircle
            size={10}
            className="bg-sky-200 text-sky-200 rounded-full"
          />
          <BiCircle
            size={10}
            className="bg-sky-100 text-sky-100 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
