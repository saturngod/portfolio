import Image from "next/image";
import profilePic from "../public/images/hls.jpg";

export default function PhotoBar({ children, name, description }) {
  return (
    <div className="flex flex-nowrap w-screen">
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2  ring-white pl-3 pr-3">
        <Image objectFit="cover" layout="fill" src={profilePic} alt={name} />
      </div>
      <div className="ml-5">
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="text-xl font-light">{description}</p>
        <div className="flex flex-wrap pt-3">
          <a
            href="https://www.twitter.com/saturngod"
            target="_blank"
            className="pr-3 no-underline"
          >
            <i className="not-italic fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.github.com/saturngod"
            target="_blank"
            className="pr-3 no-underline"
          >
            <i className="not-italic fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.youtube.com/user/saturngod66"
            target="_blank"
            className="pr-3 no-underline"
          >
            <i className="not-italic fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/htainlinshwe/"
            target="_blank"
            className="pr-3 no-underline"
          >
            <i className="not-italic fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
