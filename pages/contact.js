import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { SocialLink } from "../components/SocialLink";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoIosLink,
  IoMdGlasses,
} from "react-icons/io";
export default function Contact() {
  return (
    <Layout>
      <Container>
        {/* Start presentation div */}
        <div className="flex flex-col justify-center items-center mt-10 tracking-wide">
          <h1 className="text-5xl font-extrabold text-gray-900 text-center">
            Si quieres contactarme puedes hacerlo en mis diferentes redes
            sociales
          </h1>
          <IoMdGlasses className="text-5xl" />
        </div>
        {/* End presentation div */}

        <div className="pt-5">
          <SocialLink
            link={"https://twitter.com/hectorairy"}
            icon={<IoLogoTwitter className="mr-2 text-sky-500" />}
            social={"Twitter"}
          />
        </div>
        <div className="pt-5">
          <SocialLink
            link={"https://github.com/hectorairy"}
            icon={<IoLogoGithub className="mr-2 text-black" />}
            social={"GitHub"}
          />
        </div>
        <div className="pt-5">
          <SocialLink
            link={"https://www.linkedin.com/in/hectorairy/"}
            icon={<IoLogoLinkedin className="mr-2 text-blue-500" />}
            social={"LinkedIn"}
          />
        </div>
        <div className="pt-5">
          <SocialLink
            link={"https://sites.hectorairy.com/"}
            icon={<IoIosLink className="mr-2 text-sky-500" />}
            social={"Mis sitios"}
          />
        </div>
      </Container>
    </Layout>
  );
}
