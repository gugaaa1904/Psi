import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileCollaborator.module.css";
import React, { Component, useState, useEffect } from 'react';


const ProfileCollaborator = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [Age , setAge] = useState('');
  const [Gender , setGender] = useState('');
  const [Phone , setPhone] = useState('');
  const [Address , setAddress] = useState('');
  const [CompanyName , setCompanyName] = useState('');
  const [Tariff , setTariff] = useState('');
  const [Plafond , setPlafond] = useState('');
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-collaborator");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-collaborator");
  }, [navigate]);

  const onReportsContainerClick = useCallback(() => {
    navigate("/reports-collaborator");
  }, [navigate]);

  const onTimelinesContainerClick = useCallback(() => {
    navigate("/timeline");
  }, [navigate]);

  const onDashboardContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const [formData, setFormData] = useState({
    COLLABORATOR: sessionStorage.getItem('id')
  });

  useEffect(() => {
    const idString = sessionStorage.getItem('id');
    if(!idString){
      navigate("/sign-in-collaborator")
    }

    async function fetchData() {
      console.log(formData)
      try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: new URLSearchParams(formData)
        };
        const response = await fetch('http://localhost/Psi/backend/services/profilecollaborator.php', requestOptions)
        .then((response) => {
          console.log(response.json())
        })
        .then((data) => {
          // Atualiza o estado com o valor retornado pela coluna NAME
          if (data.length > 0) {
            console.log(data)
            setFullName(data[0].NAME);
            setAge(data[0].AGE);
            setGender(data[0].GENDER);
            setPhone(data[0].PHONE);
            setAddress(data[0].ADDRESS);
            setCompanyName(data[0].COMPANYNAME);
            setTariff(data[0].TARIFF);
            setPlafond(data[0].PLAFOND);
          }
        });
      }catch(error){
          return [];
      }
    }
    fetchData();
    }, []); 
  

  return (
    <div className={styles.profileCollaborator}>
      <div className={styles.content}>
        <div className={styles.backgroundImage}>
          <img
            className={styles.unsplashNwaetf6qo0Icon}
            alt=""
            src="/unsplash-nwaetf6qo0@2x.png"
          />
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileInfoChild} />
          <div className={styles.notifications}>
            <div className={styles.line} />
            <b className={styles.notifications1}>Notifications</b>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img
                className={styles.dangerSquareIcon}
                alt=""
                src="/dangersquare.svg"
              />
              <div className={styles.alertExcessiveUse}>
                Alert: Excessive use of energy!
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <img
                className={styles.dangerSquareIcon}
                alt=""
                src="/dangersquare1.svg"
              />
              <div className={styles.alertExcessiveUse}>
                Alert: Excessive use of energy!
              </div>
            </div>
            <div className={styles.notificationsChild} />
            <div className={styles.notificationsItem} />
            <div className={styles.pleaseUnplugYour}>
              Please unplug your electric car charger to prevent overloading the
              grid and conserve energy. By taking this action, you are not only
              contributing to a sustainable energy future but also preventing
              potential service disruptions.
            </div>
            <div className={styles.pleaseUnplugYour1}>
              Please unplug your electric car charger to prevent overloading the
              grid and conserve energy. By taking this action, you are not only
              contributing to a sustainable energy future but also preventing
              potential service disruptions.
            </div>
          </div>
          <div className={styles.fullNameContainer}>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>{`Full Name : `}</b>
              <span className={styles.antnioMendes}>{fullName}</span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>Age:</b>
              <span> {Age}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b>Gender:</b>
              <span className={styles.fullName}> {Gender}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>Phone Number:</b>
              <span> {Phone}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>{`Address: `}</b>
              <span>  {Address}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>Company:</b>
              <span> {CompanyName}</span>
            </p>
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            
            <p className={styles.fullNameAntnioMendes}>&nbsp;</p>
            <p className={styles.fullNameAntnioMendes}>
              <b className={styles.fullName}>Contract:</b>
              <span>{` `}</span>
            </p>
            <ul className={styles.typeConsultantTariff02}>
              <li className={styles.typeConsultant}>
                <span>{`Type: Consultant `}</span>
              </li>
              <li className={styles.typeConsultant}>
                <span>Tariff: {Tariff} kWh/€</span>
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
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <label htmlFor="uploadInput" className={styles.editPhotoButton}>
              <b className={styles.button}>Edit Photo</b>
            </label>
          </div>
        </div>
        <img
          className={styles.profilePhotoIcon}
          alt=""
          src="/profile-photo.svg"
        />
      </div>
      <div className={styles.header}>
        <b className={styles.profile}>Profile</b>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.settings} onClick={onSettingsContainerClick}>
          <img className={styles.settingsIcon} alt="" src="/settings.svg" />
          <div className={styles.settings1}>Settings</div>
        </div>
        <div className={styles.help} onClick={onHelpContainerClick}>
          <img className={styles.iconshelp} alt="" src="/iconshelp.svg" />
          <div className={styles.help1}>Help</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.profile1}>
            <b className={styles.profile2}>Profile</b>
          </div>
          <div className={styles.reports} onClick={onReportsContainerClick}>
            <div className={styles.reportsTexto}>Reports</div>
          </div>
          <div className={styles.timelines} onClick={onTimelinesContainerClick}>
            <div className={styles.timelines1}>Timelines</div>
          </div>
          <div className={styles.dashboard} onClick={onDashboardContainerClick}>
            <div className={styles.timelines1}>Dashboard</div>
          </div>
          <b className={styles.menu1}>MENU</b>
        </div>
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <div className={styles.line4} />
        <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
      </div>
    </div>
  );
};

export default ProfileCollaborator;
