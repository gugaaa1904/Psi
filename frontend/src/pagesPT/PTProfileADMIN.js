import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PTProfileADMIN.module.css";
import React, { Component, useState, useEffect } from 'react';

const ProfileADMIN = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [Age , setAge] = useState('');
  const [Gender , setGender] = useState('');
  const [Phone , setPhone] = useState('');
  const [Address , setAddress] = useState('');
  const[Email, setEmail] = useState('');
  const [CompanyName , setCompanyName] = useState('');
  const [photo, setPhoto] = useState('');
  const [imageBaseUrl, setImageBaseUrl] = useState('');
  const [imageBaseUrll, setImageBaseUrll] = useState('');

  
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-admin");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-admin");
  }, [navigate]);

  const onCollaboratorInformationContainerClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onCompanyInformationContainerClick = useCallback(() => {
    navigate("/company-info");
  }, [navigate]);

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/remove-user");
  }, [navigate]);

  const onAddUserContainerClick = useCallback(() => {
    navigate("/add-user");
  }, [navigate]);

  const [formData, setFormData] = useState({
    COLLABORATOR: sessionStorage.getItem('id')
  });

  useEffect(() => {
    const idString = sessionStorage.getItem('admin_id');
    if(!idString){
      navigate("/sign-in-admin")
    }
    
    async function fetchData() {
      const idString = sessionStorage.getItem('admin_id');
      const companyId = sessionStorage.getItem('company_id');
      console.log({admin_id: idString});
      try {
        const response = await fetch(
          'http://localhost/Psi/backend/services/profileadmin.php',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({admin_id: idString,company_id: companyId})
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
        setImageBaseUrl('http://localhost/Psi/backend/' + data.PHOTO);
        setImageBaseUrll('http://localhost/Psi/backend/' + data.PHOTOO);
      }catch(error){
          return [];
      }
    }
    fetchData();
    }, [formData, navigate]); 

  return (
    <div className={styles.profileAdmin}>
      <div className={styles.content}>
        <div className={styles.backgroundImage}>
          <img className={styles.unsplashNwaetf6qo0Icon} alt="" src={imageBaseUrl}/>
        </div>
        <div>
          <input
            type="file"
            id="uploadInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="uploadInput" className={styles.editPhotoButton}>
            <b className={styles.button}>Edit Photo</b>
          </label>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileInfoChild} />
          <div className={styles.fullNameContainer}>

              <b className={styles.fullName}>{`Full Name : `}</b>
              <span className={styles.josAlbertoDos}>{fullName}</span>

            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>Age:</b>
              <span> {Age}</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b>Gender:</b>
              <span className={styles.fullName}> {Gender}</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>Phone Number:</b>
              <span> {Phone}</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>Address:</b>
              <span> {Address}</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>Company:</b>
              <span> {CompanyName}</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>

            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b>&nbsp;</b>
            </p>
          </div>

          <b className={styles.name}>{fullName}</b>
        </div>
        <img className={styles.profileIcon} alt="" src={imageBaseUrll} />
      </div>
      <div className={styles.header}>
        <b className={styles.profile}>Profile</b>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.settings} onClick={onSettingsContainerClick}>
          <div className={styles.settings1}>Settings</div>
        </div>
        <div className={styles.help} onClick={onHelpContainerClick}>
          <div className={styles.help1}>Help</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.profile1}>
            <b className={styles.profile2}>Profile</b>
          </div>
          <div
            className={styles.collaboratorInformation}
            onClick={onCollaboratorInformationContainerClick}
          >
            <div className={styles.collaboratorInformation1}>
              Collaborator Information
            </div>
          </div>
          <div
            className={styles.companyInformation}
            onClick={onCompanyInformationContainerClick}
          >
            <div className={styles.collaboratorInformation1}>
              Company Information
            </div>
          </div>
          <div
            className={styles.removeUser}
            onClick={onRemoveUserContainerClick}
          >
            <div className={styles.collaboratorInformation1}>Remove User</div>
          </div>
          <div className={styles.addUser} onClick={onAddUserContainerClick}>
            <div className={styles.collaboratorInformation1}>Add User</div>
          </div>
          <b className={styles.menu1}>MENU</b>
        </div>

        <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default ProfileADMIN;
