import React, { useState, useEffect } from 'react';
import styles from "./PTPopUpAddUser.module.css";

const PopUpAddUser = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Configurando o temporizador para esconder o pop-up após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Limpando o temporizador ao desmontar o componente
    return () => clearTimeout(timer);
  }, []); // O segundo argumento vazio faz com que o efeito só seja executado uma vez, equivalente a componentDidMount

  // Renderizando o pop-up apenas se isVisible for verdadeiro
  return isVisible ? (
    <div className={styles.popUpAddUser}>
      <img className={styles.dangerSquareIcon} alt="" src="/dangersquare.svg" />
      <b className={styles.aNewUser}>Um novo utilizador foi adicionado</b>
    </div>
  ) : null
};

export default PopUpAddUser;
