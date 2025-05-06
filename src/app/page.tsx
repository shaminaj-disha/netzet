import Image from "next/image";
import { Figtree, Urbanist } from "next/font/google";

const figtreeFont = Figtree({
  subsets: ["latin"],
  weight: "400",
});

const urbanistFont = Urbanist({
  subsets: ["latin-ext"],
  weight: "700",
});

export default function Home() {
  return (
    <div
      className={`bg-[#010101] min-h-screen text-white ${figtreeFont.className}`}
    >
      <div className="w-full bg-[linear-gradient(89.63deg,_#FC004E_-2.16%,_#10CBE0_115.27%)] text-center px-4 py-2.5 max-[1279px]:py-4 h-[76px] min-[1280px]:h-[46px] flex justify-center items-center">
        <h3 className="text-[22px] font-extrabold max-[1279px]:text-[16px]">
          <span className="">
            <span>🚀</span>{" "}
            <span className="text-[#00E7F9] uppercase">
              FRESH BEGINNINGS SALE:
            </span>
          </span>{" "}
          <span>Extra 25% OFF, Limited Spots - start your journey today!</span>
        </h3>
      </div>
      <div className="pt-[35px] max-[1279px]:pt-[16px]">
        <div className="max-w-[1440px] mx-auto px-[211px] max-[1279px]:px-0 max-[1279px]:pr-[29px]">
          <div className="flex justify-between items-start">
            <div className="hidden w-[42px] h-[40px] max-[1279px]:block"></div>
            <Image
              alt="Logo"
              loading="lazy"
              width="173"
              height="74"
              className="text-transparent w-[173px] h-[74px] max-[1279px]:w-[107px] max-[1279px]:h-[46px]"
              src="/images/fametonic-logo.png"
            />
            <nav className="max-[1279px]:hidden text-[#A9A9A9]">
              <ul className="flex gap-10">
                <li className="text-[18px] leading-[22px] font-semibold hover:text-[#00E7F9]">
                  <a href="#">About us</a>
                </li>
                <li className="text-[18px] leading-[22px] font-semibold hover:text-[#00E7F9]">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="hidden max-[1279px]:block">
              <button
                className="hamburger hamburger--squeeze hidden max-[1279px]:block "
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner">
                    <Image
                      src="/images/hamburger-menu.png"
                      width={20}
                      height={12}
                      alt="Menu Button"
                    />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-[82px] max-[1279px]:pb-[40px] max-[1279px]:px-4">
        <div className="max-w-[1440px] mx-auto flex justify-between max-[1279px]:items-center max-[1279px]:flex-col-reverse min-[1280px]:relative min-[1280px]:pl-[215px]">
          <div className="max-w-[516px] pt-[57px] max-[1279px]:pt-0 max-[1279px]:text-center z-20">
            <h1
              className={`text-[35px] leading-[42px] flex flex-col font-bold max-[480px]:text-[25px] max-[480px]:leading-[30px] ${urbanistFont.className}`}
            >
              Want to Turn Social Media Into a Profitable Career?
              <span
                style={{ textShadow: "0 4px 4px #fc004e" }}
                className="text-[#00E7F9]"
              >
                Discover your way to success with Fametonic:
              </span>
            </h1>
            <div className="max-[1279px]:font-medium font-semibold text-[16px] leading-[22px] max-[1279px]:text-left max-[1279px]:space-y-[10px] space-y-[13px] max-[1279px]:mt-[22px] mt-[16px]">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/images/star.png"
                  width={22}
                  height={22}
                  alt="star"
                  className="w-[22px] h-[22px] object-contain"
                />
                <p>
                  Start growing your influence right away—no waiting required!
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/images/star.png"
                  width={22}
                  height={22}
                  alt="star"
                  className="w-[22px] h-[22px] object-contain"
                />
                <p>
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/images/star.png"
                  width={22}
                  height={22}
                  alt="star"
                  className="w-[22px] h-[22px] object-contain"
                />
                <p>Use a Personal AI Worker to boost your content</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/images/star.png"
                  width={22}
                  height={22}
                  alt="star"
                  className="w-[22px] h-[22px] object-contain"
                />
                <p>
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </div>
            </div>
            <div className="flex flex-col max-[1279px]:flex-col-reverse">
              <div className="mt-8 max-w-[350px] min-[1280px]:max-w-[313px] w-full max-[1279px]:mx-auto">
                <a
                  data-testid="home-start"
                  className="flex gap-2.5 justify-center items-center px-10 py-2 bg-[#FC004E] rounded-xl w-full shadow-[2px_2px_10px_0px_#00E7F9] h-[40px]"
                  href="/main/a/quiz"
                >
                  <p className="font-bold uppercase text-xl">get started</p>
                  <Image
                    alt="arrow"
                    loading="lazy"
                    width="9"
                    height="9"
                    className="text-transparent"
                    src="/images/chevron-right.png"
                  />
                </a>
                <p className="text-[12px] leading-[16px] text-white text-center mt-[10px] font-normal">
                  1-minute quiz for personalized Insights
                </p>
              </div>
              <div className="w-full mt-[22px] min-[1280px]:mt-[26px] text-[#ABABAB] font-medium max-[1279px]:max-w-[281px] max-[1279px]:mx-auto">
                <p className="text-[12px]">
                  By clicking &quot;Get Started&quot;, you agree with{" "}
                  <a
                    className="hover:text-[#00E7F9] transition-all duration-300"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                  ,{" "}
                  <a
                    className="hover:text-[#00E7F9] transition-all duration-300"
                    href="#"
                  >
                    Privacy policy
                  </a>
                  ,{" "}
                  <a
                    className="hover:text-[#00E7F9] transition-all duration-300"
                    href="#"
                  >
                    Subscription Terms
                  </a>
                </p>
                <p className="text-[10px] mt-[19px] min-[1280px]:mt-[7px]">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="min-[1280px]:absolute min-[1280px]:left-[662px] min-[1280px]:-mt-[30px]">
            <Image
              alt="Fametonic"
              loading="lazy"
              width="666"
              height="679"
              src="/images/homepage-bg.png"
              className="text-transparent"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
