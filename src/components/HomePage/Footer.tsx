interface footerType {
  title: string;
  sublink: string[];
}

const testimonials: footerType[] = [
  {
    title: "Home",
    sublink: ["Features", "Pricing", "Reviews", "Updates"],
  },
  {
    title: "Features",
    sublink: ["Task Management", "Collaboration", "Reporting", "Integrations"],
  },
  {
    title: "Follow Us",
    sublink: ["Facebook", "Twitter", "LinkedIn", "Instagram"],
  },
];

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black rounded-t-4xl p-6 md:p-10 lg:p-14 gap-10">
      <div>
        <h1 className="h1-custom">Ready to boost your productivity</h1>
      </div>

      <div className="w-full flex flex-wrap sm:flex-nowrap gap-8">
        <div className=" flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-1">
            <h1 className="h4-custom text-white">Testify</h1>
            <p className="p-custom text-gray-300">
              Designed to help teams and individuals stay organized, focused and
              on track
            </p>
          </div>
          <div className="flex-2 flex flex-wrap sm:flex-nowrap gap-10 justify-between">
            {testimonials.map((footer: footerType, index: number) => (
              <div key={index} className="flex flex-col gap-3">
                <h1 className="h4-custom text-white">{footer.title}</h1>
                <ul className="flex flex-col gap-2">
                  {footer.sublink.map((link: string, idx: number) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-300 hover:text-white hover:cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
