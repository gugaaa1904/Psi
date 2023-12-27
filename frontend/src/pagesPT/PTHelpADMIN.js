import { useState, useCallback } from "react";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./PTHelpADMIN.module.css";

const HelpADMIN = () => {
  const navigate = useNavigate();


  const onSettingsContainerClick = useCallback(() => {
    navigate("/pt-settings-admin");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/pt-profile-admin");
  }, [navigate]);

  const onCollaboratorInformationContainerClick = useCallback(() => {
    navigate("/pt-collaborator-info");
  }, [navigate]);

  const onCompanyInformationContainerClick = useCallback(() => {
    navigate("/pt-company-info");
  }, [navigate]);

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/pt-remove-user");
  }, [navigate]);

  const onAddUserContainerClick = useCallback(() => {
    navigate("/pt-add-user");
  }, [navigate]);

  return (
    <>
      <div className={styles.helpAdmin}>
         <div className={styles.content}>
           <div className={styles.wereHereForWhateverYouNe} />
           <div className={styles.faqFrequentlyAskedQuestion}>
             <div className={styles.divider} />
             <div className={styles.faqFrequentlyAsked}>
               FAQ (Perguntas Frequentes)
             </div>
           </div>
           <div className={styles.rectangleParent}>
             <div className={styles.groupChild} />
             <div className={styles.weHopeWeve}>
               Esperamos ter conseguido ajudar! Agora, aproveite a InfoCharge.
             </div>
             <div className={styles.whatCanYouContainer}>
               <ul className={styles.whatCanYouDoInTheAddUse}>
                 <li className={styles.whatCanYouDoInTheAddUse1}>
                   <span>O que podes fazer na secção de Dashboards?</span>
                 </li>
               </ul>
               <p
                 className={styles.theActivityAnd}
               >{`  > Os dashboards de Atividade e Variação com base no Contrato podem ser visualizados de forma expandida ao serem clicados, enquanto os dashboards de Energia e Despesas Mensais são informativos e têm ambos o botão de menu suspenso para escolher visualizar os dados semanalmente ou mensalmente.`}</p>
               <p
                 className={styles.theActivityAnd}
               >{`  > O conteúdo é visual, informativo e não interativo, com o propósito de fornecer uma visão mais detalhada sobre o histórico de cobranças e seus custos respectivos.`}</p><p className={styles.blankLine}>&nbsp;</p>
               <ul className={styles.whatCanYouDoInTheAddUse}>
                 <li className={styles.whatCanYouDoInTheAddUse1}>
                   <span>O que podes fazer na secção de Relatórios?</span>
                 </li>
               </ul>
               <p
                 className={styles.theActivityAnd}
               >{`  > Um relatório baseado nos Dashboards, não interativo.`}</p>
               <p className={styles.theActivityAnd}>&nbsp;</p>
               <ul className={styles.whatCanYouDoInTheAddUse}>
                 <li className={styles.whatCanYouDoInTheAddUse1}>
                   <span>O que podes fazer na secção de Perfil?</span>
                 </li>
               </ul>
               <p
                 className={styles.theActivityAnd}
               >{`  > Editar a sua foto de perfil e ver as suas notificações.`}</p>
               <p className={styles.theActivityAnd}>&nbsp;</p>
               <ul className={styles.whatCanYouDoInTheAddUse}>
                 <li className={styles.whatCanYouDoInTheAddUse1}>
                   <span>O que podes fazer na secção de Definições?</span>
                 </li>
               </ul>
               <p
                 className={styles.theActivityAnd}
               >{`  > Alterar o idioma da aplicação, mudar a sua senha e fazer logout. Também disponível as nossas Políticas de Privacidade e Termos e Condições.`}</p>
             </div>
             <div className={styles.wereHereFor}>
               Estamos aqui para o que precisar!
             </div>
           </div>
         </div>

        <div className={styles.header}>
          <b className={styles.help}>Ajuda</b>
        </div>

        <div className={styles.ifYouHaveContainer}>
           <span>
              Se tiver alguma pergunta adicional, envie um e-mail para a nossa equipa de suporte -
           </span>
           <span className={styles.infochargegmailcom}>
             {" "}
             infocharge@gmail.com
           </span>
         </div>
        <div className={styles.sidebar}>
          <div className={styles.settings} onClick={onSettingsContainerClick}>
            <div className={styles.settings1}>Definições</div>
          </div>
          <div className={styles.help1}>
            <b className={styles.help2}>Ajuda</b>
          </div>
          <div className={styles.menu}>
            <div className={styles.profile} onClick={onProfileContainerClick}>
              <div className={styles.profile1}>Perfil</div>
            </div>
            <div
              className={styles.collaboratorInformation}
              onClick={onCollaboratorInformationContainerClick}
            >
              <div className={styles.profile1}>Colaboradores</div>
            </div>
            <div
              className={styles.companyInformation}
              onClick={onCompanyInformationContainerClick}
            >
              <div className={styles.profile1}>Empresa</div>
            </div>
            <div
              className={styles.removeUser}
              onClick={onRemoveUserContainerClick}
            >
              <div className={styles.profile1}>Remover Utilizador</div>
            </div>
            <div className={styles.addUser} onClick={onAddUserContainerClick}>
              <div className={styles.profile1}>Adicionar Utilizador</div>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>

          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
          <div className={styles.line} />
        </div>
      </div>
    </>
  );
};

export default HelpADMIN;
