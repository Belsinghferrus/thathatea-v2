import { ArrowRight } from "lucide-react";
import socialBg from "../../assets/images/contact/8868f0f1-0a52-4842-a6e1-51fdc36bb33f 1.png";
import curvedShape from "../../assets/images/contact/Vector.png";
import greenLeavesBranch from "../../assets/images/contact/pngtree-fresh-tea-leaves-green-branch-camellia-sinensis-plant-png-image_16126042 1.png";

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const socialChannels = [
  {
    name: "Instagram",
    handle: "@thathatea",
    url: "https://www.instagram.com/thathatea",
    icon: InstagramIcon,
    iconColor: "text-[#E1306C]",
    bgColor: "bg-[#E1306C]/10",
  },
  {
    name: "Facebook",
    handle: "/thathatea",
    url: "https://www.facebook.com/thathatea",
    icon: FacebookIcon,
    iconColor: "text-[#1877F2]",
    bgColor: "bg-[#1877F2]/10",
  },
  {
    name: "YouTube",
    handle: "@thathatea",
    url: "https://www.youtube.com/@thathatea",
    icon: YoutubeIcon,
    iconColor: "text-[#FF0000]",
    bgColor: "bg-[#FF0000]/10",
  },
  {
    name: "X",
    handle: "@thathatea",
    url: "https://x.com/thathatea",
    icon: XIcon,
    iconColor: "text-[#000000]",
    bgColor: "bg-[#000000]/10",
  },
  {
    name: "LinkedIn",
    handle: "/company/thathatea",
    url: "https://www.linkedin.com/company/thathatea",
    icon: LinkedinIcon,
    iconColor: "text-[#0A66C2]",
    bgColor: "bg-[#0A66C2]/10",
  },
];

function SocialMedia() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6DFC0] py-20 lg:py-28">
      {/* Background Illustrated Image with Tea Kettle, Cup & Table on the Right */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={socialBg}
          alt=""
          className="h-full w-full object-cover object-right-bottom opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6DFC0]/95 via-[#F6DFC0]/60 to-transparent lg:from-[#F6DFC0]/90 lg:via-[#F6DFC0]/40" />
      </div>

      {/* Decorative Curved Peach Shape on Upper-Left */}
      <div className="pointer-events-none absolute -top-16 -left-16 z-0 w-64 sm:w-80 lg:w-96 opacity-50">
        <img src={curvedShape} alt="" className="w-full object-contain" />
      </div>

      {/* Decorative Tea Leaves in Bottom-Right */}
      <div className="pointer-events-none absolute -bottom-16 -right-12 z-10 w-48 sm:w-60 lg:w-72">
        <img src={greenLeavesBranch} alt="" className="w-full object-contain rotate-120" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Description, and Social Media Cards */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <h2 className="font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-[#2C1810] sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem]">
              GOOD TEA,
              <br />
              GREAT CONVERSATIONS,
              <br />
              <span className="text-[#A76024]">ALWAYS</span>
            </h2>

            <p className="mt-4 max-w-[480px] font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base">
              Follow us for new brews, behind-the-counter stories, offers, and a little bit of everyday warmth in your feed.
            </p>

            {/* Social Media Cards in 2-Column Desktop Grid */}
            <div className="mt-9 grid w-full max-w-[620px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
              {socialChannels.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-full bg-white/95 px-4 py-2.5 shadow-md border border-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full ${item.bgColor}`}>
                        <IconComponent className={`h-5 w-5 ${item.iconColor}`} />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-mona text-xs font-bold text-[#2C1810]">
                          {item.name}
                        </span>
                        <span className="font-mona text-[11px] text-[#2C1810]/60">
                          {item.handle}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F6EEDF] px-3 py-1 font-mona text-[10px] font-bold uppercase tracking-wider text-[#2C1810] transition-colors group-hover:bg-[#A76024] group-hover:text-white">
                      <span>FOLLOW</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column Spacer (The artwork from the background extends here) */}
          <div className="hidden lg:col-span-5 lg:block" />
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
