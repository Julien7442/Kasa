import { useState, useRef, useEffect } from 'react'; //import des hooks de base react
import Chevron from '../../assets/images/vectorBas.svg';

export default function Collapse(props) {
  const [toggle, setToggle] = useState(false); // State du toggle définit (false par default)
  const [heightEl, setHeightEl] = useState(); // State de la hauteur du collapse

  const toggleState = () => {
    // Fonction togglestate qui modifie la valeur du toggle
    setToggle(!toggle);
  };

  const refHeight = useRef(); //récupère et conserve la valeur de hauteur du collapse déplié

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`); //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight
  }, []);

  return (
    // permet d'afficher le collapse replié par default, ouverture au clic puis fermeture au clic avec disparition du texte et style
    <div className={`collapse ${props.aboutStyle}`}>
      <div onClick={toggleState} className="collapse__visible">
        <h2>{props.aboutTitle}</h2>
        <img
          className={toggle ? 'chevron rotated' : 'chevron'}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight}
        className={toggle ? 'collapse__toggle animated' : 'collapse__toggle'}
        style={{ height: toggle ? `${heightEl}` : '0px' }}
      >
        <p aria-hidden={toggle ? 'true' : 'false'}>{props.aboutText}</p>
      </div>
    </div>
  );
}
