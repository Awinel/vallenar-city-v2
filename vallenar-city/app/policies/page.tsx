import Copyright from "../ui/Copyright";
import { lilitaOne, nunito } from "../ui/fonts";

export default function Page() {
  return (
    <main>
      <h2
        className={`${lilitaOne.className} text-xl md:text-2xl mt-5`}
        id="about-us"
      >
        Acerca de Nosotros
        <p
          className={`${nunito.className} text-base md:text-lg mx-10 mb-10 text-start`}
        >
          Bienvenidos a nuestra plataforma, un espacio creado para centralizar
          la información más importante de nuestra ciudad, Vallenar, en la
          Región de Atacama, Chile. Nuestro propósito es reunir y organizar
          recursos, datos y servicios que sean útiles para todos los ciudadanos
          de esta hermosa localidad. A través de esta página, buscamos facilitar
          el acceso a la información y promover la circulación de datos de
          manera eficiente y organizada. Vallenar, conocida por su gente cálida,
          su rica cultura y su ubicación estratégica en el corazón del desierto
          de Atacama, merece un lugar donde los habitantes puedan encontrar
          fácilmente lo que necesitan. Queremos contribuir al bienestar y la
          calidad de vida de nuestra comunidad, proporcionándoles las
          herramientas necesarias para hacer más sencillo el día a día en
          nuestra ciudad.
        </p>
      </h2>
      <h2
        className={`${lilitaOne.className} text-xl md:text-2xl`}
        id="terms-of-use"
      >
        Terminos y Condiciones
        <p
          className={`${nunito.className} text-base md:text-lg mx-10 mb-10 text-start`}
        >
          Al acceder y utilizar este sitio web, aceptas cumplir con nuestros
          términos y condiciones. Esta plataforma está diseñada para ser un
          recurso accesible y útil para todos los ciudadanos de Vallenar y la
          Región de Atacama. Al utilizar nuestros servicios, aceptas que la
          información proporcionada se destina exclusivamente para el beneficio
          de los usuarios de nuestra ciudad y que cualquier costo asociado se
          utilizará para el mantenimiento y mejora del sitio web. Nos reservamos
          el derecho de modificar estos términos en cualquier momento, por lo
          que te recomendamos revisarlos periódicamente para asegurarte de que
          estás al tanto de las actualizaciones.
        </p>
      </h2>
      <h2 className={`${lilitaOne.className} text-xl md:text-2xl`} id="privacy">
        Politicas de Privacidad
        <p
          className={`${nunito.className} text-base md:text-lg mx-10 mb-10 text-start`}
        >
          Tu privacidad es muy importante para nosotros. Nos comprometemos a
          proteger la información personal que compartes con nosotros a través
          de este sitio web. Los datos recopilados se utilizarán únicamente para
          los fines de mejorar la experiencia del usuario y garantizar que la
          información que brindamos sea relevante y útil para los habitantes de
          Vallenar. No compartimos tus datos con terceros sin tu consentimiento.
          Si tienes alguna duda sobre cómo manejamos tus datos, no dudes en
          contactarnos. Queremos que te sientas seguro y respaldado al utilizar
          nuestra página.
        </p>
      </h2>
      <h2
        className={`${lilitaOne.className} text-xl md:text-2xl mb-5`}
        id="faq"
      >
        Preguntas Frecuentes
      </h2>
      <ol>
        <li>
          <h3 className={`${lilitaOne.className} text-base md:text-xl`}>
            ¿Cuál es el objetivo de este sitio web?
          </h3>
          <p
            className={`${nunito.className} text-base md:text-lg mx-10 mb-5 text-start`}
          >
            Nuestro objetivo es reunir la información clave de Vallenar y la
            Región de Atacama en un solo lugar, para que los ciudadanos puedan
            acceder fácilmente a ella, mejorando la circulación de datos y
            facilitando la vida diaria de todos los que viven aquí.
          </p>
        </li>
        <li>
          <h3 className={`${lilitaOne.className} text-base md:text-xl`}>
            ¿Por qué se cobra una tarifa en algunos casos?
          </h3>
          <p
            className={`${nunito.className} text-base md:text-lg mx-10 mb-5 text-start`}
          >
            Los costos asociados se destinan al mantenimiento del sitio web,
            asegurando que siga funcionando correctamente y se siga
            desarrollando para mejorar la experiencia de los usuarios de nuestra
            comunidad.
          </p>
        </li>
        <li>
          <h3 className={`${lilitaOne.className} text-base md:text-xl`}>
            ¿Qué tipo de información se recopila?
          </h3>
          <p
            className={`${nunito.className} text-base md:text-lg mx-10 mb-5 text-start`}
          >
            Recopilamos información relevante que incluye noticias locales,
            servicios, actividades culturales, tradiciones, festividades y otros
            recursos útiles para los ciudadanos de Vallenar y la Región de
            Atacama.
          </p>
        </li>
        <li>
          <h3 className={`${lilitaOne.className} text-base md:text-xl`}>
            ¿Puedo confiar en la privacidad de mis datos?
          </h3>
          <p
            className={`${nunito.className} text-base md:text-lg mx-10 mb-5 text-start`}
          >
            Sí, tu privacidad es nuestra prioridad. Nos aseguramos de proteger
            tus datos personales y solo los utilizamos para mejorar la
            experiencia en el sitio, manteniéndolos seguros y confidenciales.
          </p>
        </li>
        <li>
          <h3 className={`${lilitaOne.className} text-base md:text-xl`}>
            ¿Cómo puedo contactarlos?
          </h3>
          <p
            className={`${nunito.className} text-base md:text-lg mx-10 mb-5 text-start`}
          >
            Puedes ponerte en contacto con nosotros a través de nuestro correo
            electrónico de contacto o mediante nuestras redes sociales. También
            tenemos canales dedicados a la comunidad de Vallenar, donde te
            mantendremos informado sobre eventos y actividades locales.
          </p>
        </li>
      </ol>

      <Copyright />
    </main>
  );
}
