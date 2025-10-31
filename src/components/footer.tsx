import Link from "next/link";
import Container from "./container";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-16 bg-bg-secondary-default text-text-primary-inverted">
      <Container>
        <div className="pt-16 flex md:flex-row flex-col justify-between">
          <div className="inline-flex flex-col gap-6 items-start  pb-16 md:pb-0">
            <Link href="/">Logo</Link>
            <p className="text-base leading-6 font-normal w-[320px] wrap">
              Company name empower teams hlep you choose something batter that
              actual called home
            </p>
            <div className="inline-flex gap-4 justify-center items-center">
              <Link href="/" replace>
                <BiLogoFacebookCircle size={24} />
              </Link>
              <Link href="/" replace>
                <BiLogoInstagramAlt size={24} />
              </Link>
              <Link href="/" replace>
                <BiLogoTwitter size={24} />
              </Link>
              <Link href="/" replace>
                <BiLogoLinkedinSquare size={24} />
              </Link>
              <Link href="/" replace>
                <BiLogoYoutube size={24} />
              </Link>
            </div>
          </div>
          <div className="flex gap-14 items-center flex-wrap">
            <div className="flex gap-8 flex-col items-start justify-center shrink-0">
              <p className="text-lg font-medium leading-6">Product</p>
              <div className="flex gap-6 flex-col items-start justify-center">
                <Link href="/" className="text-base font-normal leading-6">
                  Feature
                </Link>
                <Link href="/" className="text-base font-normal leading-6">
                  Pricing
                </Link>
                <Link href="/" className="text-base font-normal leading-6">
                  Interrogation
                </Link>
                <Link href="/" className="text-base font-normal leading-6">
                  Changelog
                </Link>
              </div>
            </div>
            <div className="flex gap-8 flex-col items-start justify-center shrink-0">
              <p className="text-lg font-medium leading-6">Product</p>
              <div className="flex gap-6 flex-col items-start justify-center">
                <Link href="/" className="text-base font-normal leading-6">
                  Feature
                </Link>
                <Link href="/" className="text-base font-normal leading-6">
                  Pricing
                </Link>
                <Link href="/" className="text-base font-normal leading-6">
                  Interrogation
                </Link>
                <Link href="/" className="text-base font-normal leading-6">
                  Changelog
                </Link>
              </div>
            </div>
            <div className="flex gap-8 flex-col items-start justify-center shrink-0">
              <p className="text-lg font-medium leading-6">Product</p>
              <div className="flex gap-6 flex-col items-start justify-center">
                <Link href="/" className="text-base font-normal leading-6">
                  Feature
                </Link>
                <Link href="/" className="text-base font-normal leading-6">
                  Pricing
                </Link>
                <Link href="/" className="text-base font-normal leading-6">
                  Interrogation
                </Link>
                <Link href="/" className="text-base font-normal leading-6">
                  Changelog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-8" />

        <div className="py-4 flex flex-col md:flex-row md:row md:justify-between gap-2 justify-center items-center">
          <p className="text-base font-normal leading-6">
            &copy; {new Date().getFullYear()} name. All right reserved
          </p>
          <div className="flex gap-2">
            <Link href="/" className="text-base font-normal leading-6">
              Privacy Policy
            </Link>
            <Link href="/" className="text-base font-normal leading-6">
              Terms of Services
            </Link>
            <Link href="/" className="text-base font-normal leading-6">
              Cookies Setting
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
