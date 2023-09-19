import Image from "next/image";
import cloudCom from "../../public/cloudComputing.jpg";
import Link from "next/link";
import { PinterestIcon, Github, Dribble } from "@/components/ThemeIcon";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};


export default function Home() {
  return (
    <main className="bg-gray-100 text-black dark:text-white rounded-lg max-h-screen max-w-screen-2xl mr-8 dark:bg-gray-900 mt-6">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            A Website where you can upload you image
          </h1>
          <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            This is the Simple Project made by <Link href="https://portfolio-outbreak778.vercel.app/" target="_blank" className="underline underline-offset-2 text-[#c7ff1e]"> Nikhil Mishra</Link> where you can
            upload your image, You should try this website and upload your
            image, you can start from below given link
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-300 hover:text-gray-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-xl">
          <Image src={cloudCom} alt="mockup" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-6">
        <nav className="space-x-6 flex flex-row items-center justify-between mb-12">
          <Link
            href="https://in.pinterest.com/"
            target="_blank"
            className="bg-light rounded-full"
          >
            <PinterestIcon className="w-8 h-8" />
          </Link>
          <Link href="https://dribbble.com/OutBreak778/" target="_blank">
            <Dribble className="w-8 h-8" />
          </Link>
          <Link href="https://github.com/OutBreak778/" target={"_blank"}>
            <Github className="w-8 h-8" />
          </Link>
        </nav>
      </div>
    </main>
  );
}
