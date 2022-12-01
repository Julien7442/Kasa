import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Collapse from '../../components/Collapse/Collapse';
import aboutArray from '../../datas/aboutArray.json'; // Creation d'un fichier json concernant la page about

export default function About() {
  return (
    <>
      <AboutBanner />
      {aboutArray.map((rule, id) => (
        <Collapse
          key={id}
          aboutTitle={rule.aboutTitle}
          aboutText={rule.aboutText}
          aboutStyle="about-style"
        />
      ))}
    </>
  );
}
