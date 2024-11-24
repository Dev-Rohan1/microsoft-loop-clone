import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/Microsoft_Loop_logo.svg.png"}
        alt="logo"
        width={40}
        height={40}
      />{" "}
      <span className="text-xl font-bold">Loop</span>
    </div>
  );
};

export default Logo;
