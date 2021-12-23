import Avatar from "react-avatar";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { TextGradient } from "../components/TextGradient";
import { CardProject } from "../components/CardProject";
import { SocialLink } from "../components/SocialLink";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoIosLink,
} from "react-icons/io";

export default function Home() {
  return (
    <Layout>
      <Container>
        {/* Start presentation div */}
        <div className="mt-10 flex justify-between items-center lg:flex-col tracking-wide">
          <div className="text-md md:text-justify  text-gray-400 mb-2">
            <h1 className="pb-6 text-5xl font-extrabold text-gray-900 lg:text-center">
              Héctor Airy
            </h1>
            <TextGradient size="text-xl" pb={"pb-6"}>
              FullStack JS Developer.
            </TextGradient>
            <div>
              Apasionado por diseñar y desarrollar tecnología impactante.
              <br /> Un entusiasta del long-term thinking.
              <br /> Creyente fiel de que no existe nada que no puedas aprender.
            </div>
          </div>
          <Avatar
            size="200"
            facebookId="104457655398749"
            round
            className="lg:mt-5"
          />
        </div>
        {/* End presentation div */}
        {/* Start projects div */}
        <div className="mt-10 pt-10 tracking-wide">
          <h1 className="pb-6 text-3xl font-bold text-gray-900  lg:text-center">
            Mis ultimos proyectos
          </h1>
          <div className="flex justify-between md:items-center md:flex-col">
            <CardProject
              image={"fingame.png"}
              title={"Fingame"}
              description={
                "Una aplicación de finanzas personales diseñada como un juego. Motivación diaria para desarrollar hábitos de gestión del dinero."
              }
              technologies={"React Native - Firebase - NodeJS"}
              site={"https://fingame.app/"}
            />
            <CardProject
              image={"sites.png"}
              title={"Tarjeta personal"}
              description={
                "Una tarjeta de presentación personal diseñada en base a Linktree. Añade los links a todos los sitios de redes sociales y canales de contenido."
              }
              technologies={"ReactJS"}
              site={"https://sites.hectorairy.com/"}
              github={"https://github.com/hectorairy/hectorairy-sites"}
            />
            <CardProject
              image={"losPlebes.png"}
              title={"Los Plebes"}
              description={
                "Una aplicación de uso como menú para el restaurante 'Los Plebes'. Se incluye un administrador que se encarga de recibir las ordenes y avisar los tiempos de entrega."
              }
              technologies={"React Native - Firebase - PHP"}
              site={"https://losplebesrestaurant.com/"}
            />
          </div>
        </div>
        {/* End projects div */}

        <div className="mt-10 pt-10 tracking-wide">
          <h1 className="pb-6 text-3xl font-bold text-gray-900  lg:text-center">
            Me puedes encontrar en:
          </h1>
          <div className="flex justify-between md:items-center md:flex-col">
            <SocialLink
              link={"https://twitter.com/hectorairy"}
              icon={<IoLogoTwitter className="mr-2 text-sky-500" />}
              social={"Twitter"}
              border={"border-b-[1px]"}
            />
            <SocialLink
              link={"https://github.com/hectorairy"}
              icon={<IoLogoGithub className="mr-2 text-black" />}
              social={"GitHub"}
              border={"border-b-[1px]"}
            />
            <SocialLink
              link={"https://www.linkedin.com/in/hectorairy/"}
              icon={<IoLogoLinkedin className="mr-2 text-blue-500" />}
              social={"LinkedIn"}
              border={"border-b-[1px]"}
            />
            <SocialLink
              link={"https://sites.hectorairy.com/"}
              icon={<IoIosLink className="mr-2 text-sky-500" />}
              social={"Mis sitios"}
              border={"border-b-[1px]"}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
