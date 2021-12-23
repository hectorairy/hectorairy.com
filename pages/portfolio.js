import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { CardProject } from "../components/CardProject";
export default function Portfolio() {
  return (
    <Layout>
      <Container>
        {/* Start presentation div */}
        <div className="mt-10 flex justify-between items-center lg:flex-col tracking-wide">
          <h1 className=" text-5xl font-extrabold text-gray-900 lg:text-center">
            Conoce mis proyectos
          </h1>
        </div>
        {/* End presentation div */}
        <div className="mt-10 pt-10 tracking-wide">
          {/* Start last projects div */}
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
          {/* End last projects div */}

          {/* Start first projects div */}
          <div className="flex justify-between md:items-center md:flex-col">
            <CardProject
              image={"drakod.png"}
              title={"DrakoD"}
              description={
                "Sitio web para DrakoD, una agencia de desarrollo. Con el proposito de dar a conocer los servicios que ofrecen al publico en general."
              }
              technologies={"ReactJS - Gatsby"}
              site={"https://drakod.com/"}
              github={"https://github.com/hectorairy/gatsby-drakod"}
            />
            <CardProject
              image={"movie-app.png"}
              title={"Movie app"}
              description={
                "Sitio web para ver información de peliculas. En donde se consumen los datos de una API para mostrar datos sobre estas, por ejemplo, el trailer."
              }
              technologies={"ReactJS - API"}
              site={"https://react-movie-app-six.vercel.app/"}
              github={"https://github.com/hectorairy/react-movie-app"}
            />
            <CardProject
              image={"clone-twitter.png"}
              title={"Simulador Twitter"}
              description={
                "Simulador de tweets, hace uso del almacenamiento local para poder guardar la información de los tweets realizados dentro del sitio."
              }
              technologies={"ReactJS"}
              site={"https://react-tweet-simulator.vercel.app/"}
              github={"https://github.com/hectorairy/react-tweet-simulator"}
            />
          </div>
          {/* End firts projects div */}
        </div>
      </Container>
    </Layout>
  );
}
