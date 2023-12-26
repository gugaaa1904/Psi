import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PTProfileCollaborator.module.css";
import React, { Component, useState, useEffect } from 'react';


const ProfileCollaborator = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [Age , setAge] = useState('');
  const [Gender , setGender] = useState('');
  const [Phone , setPhone] = useState('');
  const [Address , setAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [CompanyName , setCompanyName] = useState('');
  const [Tariff , setTariff] = useState('');
  const [Plafond , setPlafond] = useState('');
  const [imageBaseUrl, setImageBaseUrl] = useState('');
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onSettingsContainerClick = useCallback(() => {
    navigate("/pt-settings-collaborator");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/pt-help-collaborator");
  }, [navigate]);

  const onReportsContainerClick = useCallback(() => {
    navigate("/pt-reports-collaborator");
  }, [navigate]);

  const onDashboardContainerClick = useCallback(() => {
    navigate("/pt-dashboard");
  }, [navigate]);

  const [formData, setFormData] = useState({
    COLLABORATOR: sessionStorage.getItem('id')
  });

  useEffect(() => {
    const idString = sessionStorage.getItem('collaborator_id');
    if(!idString){
      navigate("/pt-sign-in-collaborator")
    }

    async function fetchData() {
      const idString = sessionStorage.getItem('collaborator_id');
      console.log({collaborator_id: idString});
      try {
        const response = await fetch(
          'http://localhost/Psi/backend/services/profilecollaborator.php',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({collaborator_id: idString})
        })
        const data = await response.json();
        console.log(data);
        setFullName(data.NAME);
        setCompanyName(data.COMPANYNAME);
        setEmail(data.EMAIL);
        setPhone(data.PHONE);
        setAge(data.AGE);
        setGender(data.GENDER);
        setAddress(data.ADDRESS);
        setTariff(data.TARIFF);
        setPlafond(data.PLAFOND);
        setImageBaseUrl('http://localhost/Psi/backend/' + data.PHOTO);
      }catch(error){
          return [];
      }
    }
    fetchData();
    }, [formData, navigate]); 
  

  return (
    <div className={styles.profileCollaborator}>
      <div className={styles.content}>
        <div className={styles.backgroundImage}>
          <img className={styles.unsplashNwaetf6qo0Icon} alt="" src={imageBaseUrl}/>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileInfoChild} />

          <div className={styles.fullNameContainer}>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>{`Nome Completo : `}</b>
              <span className={styles.antnioMendes}>{fullName}</span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>Idade:</b>
              <span> {Age}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b>Género:</b>
              <span className={styles.fullName}> {Gender}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>Telefone:</b>
              <span> {Phone}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>{`Morada: `}</b>
              <span> {Address}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>Empresa:</b>
              <span> {CompanyName}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>

            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>Contrato:</b>
              <span>{` `}</span>
            </p>
            <ul className={styles.typeConsultantTariff02}>
              <li className={styles.typeConsultant}>
                <span>{`Tipo: Consultor `}</span>
              </li>
              <li className={styles.typeConsultant}>
                <span>Tarifa: {Tariff} kWh/€</span>
              </li>
              <li className={styles.typeConsultant}>
                <span>Plafond: {Plafond}€</span>
              </li>
            </ul>
            <p className={styles.fullNameAntnioMendes}>
              <b>&nbsp;</b>
            </p>
          </div>
          <b className={styles.name}>{fullName}</b>
          <div>
            <input
              type="file"
              id="uploadInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <label htmlFor="uploadInput" className={styles.editPhotoButton}>
              <b className={styles.button}>Editar Foto</b>
            </label>
          </div>
        </div>
        <img
          className={styles.profilePhotoIcon}
          alt=""
          src="/profile-photo.svg"
        />

        <div className={styles.notifications}>
          <div className={styles.notificationsHeader}>
            <div className={styles.line} />
            <b className={styles.notificationsTitle}>Notificações</b>
          </div>

          <div className={styles.notificationGroup}>
            <div className={styles.groupChild} />
            <img
              className={styles.notificationIcon}
              alt=""
              src="/dangersquare.svg"
            />
            <div className={styles.alertExcessiveUse}>
              Alerta: Uso excessivo de energia!
            </div>
          </div>

          <div className={styles.notificationGroup}>
            <div className={styles.notificationsContent}>
              <div className={styles.pleaseUnplugYour}>
                Por favor, desligue o carregador do seu carro elétrico para evitar sobrecargas na rede e conservar energia. Ao tomar esta medida, você não está apenas contribuindo para um futuro de energia sustentável, mas também prevenindo possíveis interrupções no serviço.
              </div>
            </div>
          </div>

          <div className={styles.notificationGroup}>
            <div className={styles.groupChild} />
            <img
              className={styles.notificationIcon}
              alt=""
              src="/dangersquare1.svg"
            />
            <div className={styles.alertExcessiveUse}>
              Alerta: Uso excessivo de energia!
            </div>
          </div>

          <div className={styles.notificationGroup}>
            <div className={styles.notificationsContent}>
              <div className={styles.pleaseUnplugYour1}>
                Por favor, desligue o carregador do seu carro elétrico para evitar sobrecargas na rede e conservar energia. Ao tomar esta medida, você não está apenas contribuindo para um futuro de energia sustentável, mas também prevenindo possíveis interrupções no serviço.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <b className={styles.profile}>Perfil</b>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.settings} onClick={onSettingsContainerClick}>
          <div className={styles.settings1}>Definições</div>
        </div>
        <div className={styles.help} onClick={onHelpContainerClick}>
          <div className={styles.help1}>Ajuda</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.profile1}>
            <b className={styles.profile2}>Perfil</b>
          </div>
          <div className={styles.reports} onClick={onReportsContainerClick}>
            <div className={styles.reportsTexto}>Relatórios</div>
          </div>
          <div
            className={styles.dashboard3}
            onClick={onDashboardContainerClick}
          >
            <div className={styles.dashboard2}>Dashboards</div>
          </div>
          <b className={styles.menu1}>MENU</b>
        </div>

        <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default ProfileCollaborator;
