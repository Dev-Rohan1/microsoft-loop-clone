import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="">
        <div className="lg:flex lg:gap-[50px]">
          <div>
            <SignUp />
          </div>
          <div className="hidden lg:block w-[500px]">
            <img
              className="w-full h-auto object-cover"
              src={"/signup.svg"}
              alt="image"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
