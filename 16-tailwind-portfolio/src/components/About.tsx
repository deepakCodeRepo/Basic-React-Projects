import about from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={about} className="w-full h-64" />
        <article>
          <SectionTitle text="eat sleep code repeat" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            nemo necessitatibus similique modi praesentium pariatur doloribus
            eos facere reprehenderit sint hic veritatis suscipit fugit
            blanditiis cum aliquid fugiat? Sit, dolore.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
