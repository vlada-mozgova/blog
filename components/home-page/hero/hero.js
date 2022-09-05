import Image from "next/image";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/vlada.jpg"
          alt="An image showing Vlada"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Vlada</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
};

export default Hero;
