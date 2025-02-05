import React, { useEffect, useRef } from "react";

const Slider = () => {
  const courses = [
    { id: 1, image: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, image: "https://images.pexels.com/photos/897064/pexels-photo-897064.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, image: "https://media.istockphoto.com/id/1356510492/es/foto/mujer-atl%C3%A9tica-decidida-que-corre-en-cinta-mientras-practica-en-un-gimnasio.jpg?b=1&s=612x612&w=0&k=20&c=jeFPPQYZJVlJ_V6ziNLRGMWB7gpxOg_mratrynzZWm4=" },
    { id: 4, image: "https://images.pexels.com/photos/4164772/pexels-photo-4164772.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, image: "https://images.pexels.com/photos/4761785/pexels-photo-4761785.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const slider = sliderRef.current;
      if (slider) {
        const firstImageWidth = slider.children[0].offsetWidth;
        slider.scrollLeft += firstImageWidth;

        // Si llegamos al final, volvemos al principio (ciclo infinito)
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
    }, 3000); // Desplazamiento cada 3 segundos

    return () => clearInterval(interval); // Limpiar intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="mt-10 w-full overflow-hidden bg-white py-8">
      <div
        ref={sliderRef}
        className="container mx-auto flex space-x-6 overflow-hidden no-scrollbar scroll-smooth"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {/* Renderizamos las imágenes y luego las duplicamos para crear el efecto de ciclo */}
        {courses.concat(courses).map((course, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 rounded-xl shadow-2xl bg-white transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={course.image}
              alt={`Course ${course.id}`}
              className="w-full h-64 object-cover rounded-xl transition-all duration-500 ease-in-out hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
