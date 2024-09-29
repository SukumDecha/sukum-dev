/* eslint-disable react/no-unescaped-entities */
const About = () => {
  // TODO: More details about me
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="prose dark:prose-invert">
        <p>
          Hello! I'm a passionate web developer with expertise in modern
          technologies like React, Next.js, and Node.js. I love creating
          intuitive and performant web applications that solve real-world
          problems.
        </p>
        <h2>My Skills</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>HTML / CSS / Tailwind CSS</li>
          <li>Database design and management</li>
          <li>RESTful API development</li>
        </ul>
        <h2>My Journey</h2>
        <p>
          I started my coding journey in college and quickly fell in love with
          web development. Since then, I've worked on various projects, from
          small personal websites to large-scale enterprise applications. I'm
          always eager to learn new technologies and improve my skills.
        </p>
        <h2>Let's Connect</h2>
        <p>
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me through my social media profiles or send me an email
          at ninemaster12gt@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default About;
