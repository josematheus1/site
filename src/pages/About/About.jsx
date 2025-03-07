import { useEffect, useState } from "react"
import Service from "./Service"
import Testmonial from "./Testmonial";

const servicesData = [
  {
    "title": "Web design",
    "icon": "/images/icon-design.svg",
    "description": "The most modern and high-quality design made at a professional level."
  },
  {
    "title": "Web development",
    "icon": "/images/icon-dev.svg",
    "description": "High-quality development of sites at the professional level."
  },
  {
    "title": "Mobile apps",
    "icon": "/images/icon-app.svg",
    "description": "Professional development of applications for iOS and Android."
  },
  {
    "title": "Photography",
    "icon": "/images/icon-photo.svg",
    "description": "I make high-quality photos of any category at a professional level."
  }
]
const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      // console.log(data)
      setTestimonials(data)
    })
  }, [])
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About</h2>
      </header>
      <section className="about-text">
        <p>José Matheus é um desenvolvedor apaixonado por tecnologia, sempre em busca de aprendizado e inovação. Com experiência em diversas linguagens e ferramentas, ele se dedica a criar soluções eficientes e funcionais para os desafios da programação. Seu interesse por novas tecnologias o motiva a explorar constantemente novas abordagens, aprimorando suas habilidades e expandindo seu conhecimento na área.</p>

        <p>Com foco na escrita de códigos limpos e bem estruturados, José Matheus busca desenvolver projetos de alta qualidade e desempenho. Sempre aberto a novos desafios, ele está pronto para contribuir com seu conhecimento e crescer profissionalmente no universo da programação, colaborando em projetos que fazem a diferença.</p>
      </section>

      {/* service */}
      <section className="service">
        <h2 className="h2 service-title">o que estou fazendo</h2>
        <ul className="service-list">
          {
            servicesData.map((service, index) => (
              <Service key={index} title={service.title} icon={service.icon} description={service.description}/>
            ))
          }
        </ul>
      </section>

      {/*Testimonials section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Depoimentos</h3>
        <ul className="testimonials-list has-scrollbar">
          {
            testimonials.map((testimonial, index) =>(
              <Testmonial key={index} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial}/>
            ))
          }
        </ul>
      </section>

      {/* clients logo */}
      <section className="clients">
        <h3 className="h3 clients-title">Clientes</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default About