import logo from "./Assets/logo.png";
import alvaro_sarmiento from "./Assets/alvaro sarmiendo.jpg";
import firma_pedro_santos from "./Assets/firma Pedro de los Santos Meneses.jpg";


const Inicio = () => {
  return (
    <div className="">
      <main className="bg-[linear-gradient(to_bottom,rgba(255,255,0,0.7),rgba(0,0,0,0.5)),url('/src/Screen/Assets/fondo_inicio.jpg')] flex w-full h-screen justify-around items-center">
        <p className="w-1/4 h-1/4 text-[#f8f4e1] font-extrabold ">
          El Centro de Historia de Pinchote Álvaro Sarmiento Santander es un
          lugar ideal para aprender sobre la rica historia y cultura del
          municipio. Es una visita obligada para cualquier persona que esté
          interesada en conocer más sobre el pasado de Colombia.
        </p>

        <img
          className="w-[200px] h-[200px] rounded-full
          md:w-[300px] md:h-[300px]"
          src={logo}
          alt="Logo del centro de historia de Pinchote."
        />
      </main>

      <section
        className="bg-center bg-no-repeat bg-cover bg-fixed w-full h-screen flex 
      justify-around items-center bg-[linear-gradient(to_bottom,rgba(0,200,0,0.5),rgba(0,0,0,0.5)),url('/src/Screen/Assets/fondo2.jpg')]"
      >
        <img
          className="w-[200px] h-[325px] 
      md:w-[300px] md:h-[425px] rounded" /*Aumentar un poquito el redondeo de bordes*/
          src={alvaro_sarmiento}
          alt="Logo del centro de historia de Pinchote."
        />
        <p className="w-2/4 h-1/4 text-[#f8f4e1] font-extrabold">
          Álvaro Sarmiento Santander, nacido en 1944 en Charalá-Santander, fue
          abogado con un postgrado en Derecho Laboral y Seguridad Social de la
          Universidad Externado de Colombia. Ejerció como juez y funcionario
          público. Dedicó más de 40 años a la historia, asesorando la obra
          "Concejo de Bogotá 450 años" y otros programas institucionales.
          Durante más de 11 años, investigó en el Archivo General de la Nación
          sobre temas como la Revolución de los Comuneros y la historia
          santandereana, reflejados en sus libros "Batalla Perdida" (2010) y
          "Del infierno a la gloria" (2017), además de escritos inéditos. Fue
          ponente en la Cátedra Comunera y la Cátedra de Santandereanidad, y
          escribió para R.C.N. radio sobre la Batalla del Pienta. Co-fundador
          del Centro de Historia de Pinchote, dejó un importante legado
          documental.
        </p>
      </section>

      <section
        className="bg-center bg-no-repeat bg-cover bg-fixed w-full h-screen flex 
      justify-around items-center bg-[linear-gradient(to_bottom_right,rgba(139,0,0,0.5),rgba(0,0,0,0.5)),url('/src/Screen/Assets/fondo2.jpg')]"
      >
        <p className="w-1/4 h-1/4 text-[#f8f4e1] font-extrabold">
          El Centro de Historia “Álvaro Sarmiento Santander” se vincula a la
          conmemoración de los 241 años de la firma de la erección de la
          vice-parroquia de Pinchote, dando a conocer la firma y rúbrica de uno
          de sus más ilustres personajes, “Pedro de los Santos Meneses”, que,
          gracias a su motivación, decisión y gestión, logró que este hermoso
          terruño paradisíaco, existiera.
        </p>

        <img
          className="w-[200px] h-[325px] 
      md:w-[800px] md:h-[360px] rounded"
          src={firma_pedro_santos}
          alt="Logo del centro de historia de Pinchote."
        />
      </section>
    </div>
  );
};

export default Inicio;
