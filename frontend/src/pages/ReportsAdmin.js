import React, { useState, useEffect, useCallback, Component } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReportsAdmin.module.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const CompanyInfo = () => {
  const navigate = useNavigate();

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-admin");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-admin");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-admin");
  }, [navigate]);
    
    const onCompanyInformationContainerClick = useCallback(() => {
        navigate("/company-info");
    }, [navigate]);

  const onCollaboratorInformationContainerClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/remove-user");
  }, [navigate]);

  const onAddUserContainerClick = useCallback(() => {
    navigate("/add-user");
  }, [navigate]);

  return (
    <div className={styles.companyInfo}>
      <div className={styles.content}>
        <div className={styles.background1} />
        <div className={styles.header}>
          <div className={styles.generalOverview}>Reports</div>
        </div>
      </div>
      <div className={styles.header1}>
        <b className={styles.companyInformation}>Company Information</b>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.settings} onClick={onSettingsContainerClick}>
          <div className={styles.settings1}>Settings</div>
        </div>
        <div className={styles.help} onClick={onHelpContainerClick}>
          <div className={styles.help1}>Help</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.profile} onClick={onProfileContainerClick}>
            <div className={styles.profile1}>Profile</div>
          </div>
          <div className={styles.reports}>
            <div className={styles.reports1}>Reports</div>
          </div>
          <div
            className={styles.collaboratorInformation}
            onClick={onCollaboratorInformationContainerClick}
          >
            <div className={styles.profile1}>Collaborator Information</div>
          </div>
          
          <div
            className={styles.companyInformation1}
            onClick={onCompanyInformationContainerClick}
          >
            <div className={styles.companyInformation2}>Company Information</div>
          </div>
                  
          <div
            className={styles.removeUser}
            onClick={onRemoveUserContainerClick}
          >
            <div className={styles.profile1}>Remove User</div>
          </div>
          <div className={styles.addUser} onClick={onAddUserContainerClick}>
            <div className={styles.profile1}>Add User</div>
          </div>
          <b className={styles.menu1}>MENU</b>
        </div>
        <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default CompanyInfo;
