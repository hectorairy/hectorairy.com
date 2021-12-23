import Avatar from "react-avatar";
import { AiFillStar } from "react-icons/ai";
import {
  FcCommandLine,
  FcBriefcase,
  FcBusinessman,
  FcReading,
  FcGraduationCap,
  FcIpad,
  FcLike,
  FcSelfie,
} from "react-icons/fc";
import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { Paragraph } from "../components/Paragraph";
import { TextGradient } from "../components/TextGradient";
import { Subtitle } from "../components/Subtitle";
import { SkillsList } from "../components/SkillsList";
import { TechnologiesList } from "../components/TechnologiesList";
import { Timeline } from "../components/Timeline/Timeline";
import { TimelineCard } from "../components/Timeline/TimelineCard";
import { PersonalInterests } from "../components/PersonalInterests";

export default function About() {
  return (
    <Layout>
      <Container>
        <div className="mt-10 flex justify-between items-center lg:flex-col tracking-wide">
          <h1 className=" text-5xl font-extrabold text-gray-900 lg:text-center">
            ¿Quién es Héctor Airy?
          </h1>
        </div>

        <div className="mt-10 pt-10 grid grid-cols-3 gap-x-8 lg:block">
          {/* Start left column */}
          <div className="flex flex-col items-center text-md text-center mb-8">
            {" "}
            <Avatar
              size="150"
              facebookId="104457655398749"
              round
              className="mb-2"
            />
            <TextGradient size={"text-xl"}>@hectorairy</TextGradient>
          </div>
          {/* End left column */}

          {/* Start right column*/}
          <div className="col-span-2 divide-y text-gray-600 tracking-wide text-md">
            {/* Start about me div */}
            <div>
              <Paragraph>
                ¡Hola! Mi nombre es Héctor, mexicano originario del Estado de
                México. Soy freelance trabajando como fullstack JS developer,
                pero me especializo más en front-end.
              </Paragraph>
              <Paragraph>
                Soy un apasionado por la tecnología y todas las cosas que puedes
                hacer con ella. Un entusiasta del long-term thinking. Y sobre
                todo me gusta estar siempre en constante aprendizaje, aprender
                algo nuevo cada día es algo que disfruto mucho.
              </Paragraph>
            </div>
            {/* End about me div */}
            {/* Start skills div */}
            <div className="pt-10 mt-10">
              <Subtitle>
                <AiFillStar className="mr-2 text-yellow-400 text-xl" />
                Skills
              </Subtitle>
              <SkillsList />
            </div>
            {/* End skills div */}
            {/* Start techs div */}
            <div className="pt-10 mt-10">
              <Subtitle>
                <FcCommandLine className="mr-2 text-xl" />
                Tecnologías
              </Subtitle>
              <TechnologiesList />
            </div>
            {/* End techs div */}
            {/* Start experience div */}
            <div className="pt-10 mt-10">
              <Subtitle>
                <FcBriefcase className="mr-2 text-xl" />
                Experiencia
              </Subtitle>
              <Timeline>
                <TimelineCard
                  icon={<FcBusinessman className="mr-1" />}
                  title={"FullStack JS Developer"}
                  name={"DrakoD"}
                  time={"nov 2020 - actualidad"}
                  description={`Junto a un par de amigos inicie una agencia de desarrollo. Dentro de esta me encargo de la gestión de los proyectos y parte del desarrollo
                  de los sistemas.`}
                />
                <TimelineCard
                  icon={<FcBusinessman className="mr-1" />}
                  title={"Head of Engineering"}
                  name={"Fingame"}
                  time={"ene 2021 - actualidad"}
                  description={`Actualmente estoy como voluntario en la mejora y desarrollo de nuevas funciones
                  para la app de fingame.`}
                />
                <TimelineCard
                  icon={<FcBusinessman className="mr-1" />}
                  title={"Fullstack JS Developer"}
                  name={"Freelance"}
                  time={"nov 2019 - actualidad"}
                  description={`Empecé a trabajar como freelance con algunas empresas con las cuales he ayudado en desarrollos de ERP's, CMS's y apps. 
                  Aquí tuve la oportunidad de trabajar con diferentes tecnologías (React, React Native, Angular, etc.).`}
                />
                <TimelineCard
                  icon={<FcBusinessman className="mr-1" />}
                  title={"Mobile Developer"}
                  name={"Fingame"}
                  time={"sept 2019 - jul 2020"}
                  description={`Mi primer side project, me encargaba del rediseño de screens de una app hecha en react native. Más adentrado en el proyecto
                    hice algunas propuestas de funcionalidades nuevas para la app.`}
                />
                <TimelineCard
                  icon={<FcBusinessman className="mr-1" />}
                  title={"JR. Fullstack Developer"}
                  name={"Booster Digital"}
                  time={"jul 2018 - oct 2019"}
                  description={`Formaba parte del área de desarrollo trabajando en distintos proyectos tanto en Front como en Back. También me encargaba
                  de la gestión de algunos proyectos dentro de la empresa.`}
                />
              </Timeline>
            </div>
            {/* End experience div */}

            {/* Start education div */}
            <div className="pt-10 mt-10">
              <Subtitle>
                <FcGraduationCap className="mr-2 text-xl" />
                Educación
              </Subtitle>
              <Timeline>
                <TimelineCard
                  icon={<FcReading className="mr-1" />}
                  title={"Programación web"}
                  name={"Harvard University"}
                  time={"dic 2021 - actualidad"}
                  description={`Actualmente estoy tomando un curso en el cual profundizo en el diseño y la implementación de aplicaciones web con Python, JavaScript y SQL 
                  utilizando marcos como Django, React y Bootstrap. Los temas incluyen diseño de bases de datos,
                  escalabilidad, seguridad y experiencia del usuario.`}
                />
                <TimelineCard
                  icon={<FcReading className="mr-1" />}
                  title={"Ingeniería en Tecnologías"}
                  name={"Universidad Politécnica Metropolitana de Hidalgo"}
                  time={"sept 2015 - abr 2019"}
                  description={`Durante mi estancia en la UPMH formé parte de los equipos finalistas de Cisco Live en 2017. Participé en conferencias
                  para dar a conocer la carrera y trabajé en un par de proyectos de IOT.`}
                />
              </Timeline>
            </div>
            {/* End education div */}

            {/* Start personal interests */}
            <div className="pt-10 mt-10">
              <Subtitle>
                <FcIpad className="mr-2 text-xl" />
                Intereses personales
              </Subtitle>
              <PersonalInterests />
            </div>
            {/* End personal interests */}
            <div className="pt-10 mt-10 flex justify-center items-center">
              <FcSelfie className="mr-1" /> ¡Gracias por llegar hasta aquí!
              <FcLike className="ml-1" />
            </div>
          </div>
          {/* End right column */}
        </div>
      </Container>
    </Layout>
  );
}
