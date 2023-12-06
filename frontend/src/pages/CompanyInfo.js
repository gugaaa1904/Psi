import React, { useState, useEffect, useCallback , Component } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompanyInfo.module.css";

const CompanyInfo = () => {
  const navigate = useNavigate();
  const [averageWeeklyUsage, setAverageWeeklyUsage] = useState(null);
  const [averageMonthlyUsage, setAverageMonthlyUsage] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Weekly');

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-admin");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-admin");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-admin");
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

  useEffect(() => {
    // Função para buscar os dados do backend
    const fetchData = async () => {
      try {
        const companyId = sessionStorage.getItem('company_id');
        const response = await fetch(`http://localhost/Psi/backend/services/companyinfo.php?company_id=${companyId}`);
        const data = await response.json();
        setAverageWeeklyUsage(data[0].average_weekly_usage);
        setAverageMonthlyUsage(data[0].average_monthly_usage);


      } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
      }
    };

    // Chama a função de busca de dados ao montar o componente
    fetchData();
  }, []);

  return (
    <div className={styles.companyInfo}>
      <div className={styles.content}>
        <div className={styles.reductionOfCo2Emissions}>
          <div className={styles.background} />
          <div className={styles.graph}>
            <div className={styles.background} />
            <div className={styles.uiElements6Line1pxCopy5Parent}>
              <div className={styles.uiElements6Line1pxCopy5}>
                <div className={styles.rectangle} />
              </div>
              <div className={styles.groupParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>38 %</div>
                  <div className={styles.services}>Expected</div>
                  <img
                    className={styles.rectangleCopy3}
                    alt=""
                    src="/rectangle-copy-3.svg"
                  />
                </div>
                <div className={styles.group}>
                  <div className={styles.div1}>41 %</div>
                  <div className={styles.volume}>Values</div>
                  <div className={styles.rectangleCopy5} />
                  <div className={styles.rectangleCopy31} />
                </div>
                <div className={styles.rectangle1} />
              </div>
            </div>
            <div className={styles.rectangleCopy8Parent}>
              <div className={styles.rectangleCopy8} />
              <div className={styles.rectangleCopy9} />
            </div>
            <div className={styles.group11Copy2}>
              <div className={styles.rectangleCopy81} />
              <div className={styles.rectangleCopy91} />
            </div>
            <div className={styles.group11Copy3}>
              <div className={styles.rectangleCopy92} />
              <div className={styles.rectangleCopy82} />
            </div>
            <div className={styles.group11Copy5}>
              <div className={styles.rectangleCopy92} />
              <div className={styles.rectangleCopy83} />
            </div>
            <div className={styles.group11Copy4}>
              <div className={styles.rectangleCopy92} />
              <div className={styles.rectangleCopy84} />
            </div>
            <div className={styles.group11Copy}>
              <div className={styles.rectangleCopy85} />
              <div className={styles.rectangleCopy95} />
            </div>
          </div>
          <div className={styles.totalRevenue}>
            The Reduction of CO2 Emissions signifies the overall decrease in the
            amount of carbon dioxide released into the environment. On average,
            we assume 0.245 kg of CO2 emissions per kilometer traveled by a
            fossil-fueled car. An electric car might need approximately 0.2 kWh
            of electricity to travel 1 kilometer.
          </div>
          <div className={styles.reductionOfCo2}>
            Reduction of CO2 Emissions
          </div>
        </div>
        <div className={styles.totalSpendingsIn}>
          <div className={styles.background} />
          <div className={styles.value}>
            {selectedOption === 'Weekly' && averageWeeklyUsage && `${(averageWeeklyUsage * 0.2).toFixed(1)} €`}
            {selectedOption === 'Monthly' && averageMonthlyUsage && `${(averageMonthlyUsage * 0.2).toFixed(1)} €`}
          </div>
          <div
            className={styles.text}
          >{`The Total Spendings in euros (€) represent the cumulative sum of all expenditures incurred by various collaborators within the company. `}</div>
          <div className={styles.totalSpendingsIn1}>Total Spendings in €</div>
          <select
            className={styles.monthsDropDown}
            id="select_weekly_monthly"
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className={styles.totalConsumedInKwh}>
          <div className={styles.background} />
          <div className={styles.kwh}>
            {selectedOption === 'Weekly' && averageWeeklyUsage && `${averageWeeklyUsage} kWh`}
            {selectedOption === 'Monthly' && averageMonthlyUsage && `${averageMonthlyUsage} kWh`}
          </div>
          <div className={styles.text}>
            The Total Energy Consumed in kilowatt-hours (kWh) is the sum of
            energy consumed by all individuals or entities associated with the
            company.
          </div>
          <div className={styles.totalConsumedIn}>Total Consumed in kWh</div>
          <select
            className={styles.monthsDropDown}
            id="select_weekly_monthly"
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className={styles.header}>
          <div className={styles.divider} />
          <div className={styles.generalOverview}>General Overview</div>
        </div>
      </div>
      <div className={styles.header1}>
        <b className={styles.companyInformation}>Company Information</b>
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
          <div className={styles.profile} onClick={onProfileContainerClick}>
            <div className={styles.profile1}>Profile</div>
          </div>
          <div
            className={styles.collaboratorInformation}
            onClick={onCollaboratorInformationContainerClick}
          >
            <div className={styles.profile1}>Collaborator Information</div>
          </div>
          <div className={styles.companyInformation1}>
            <b className={styles.companyInformation2}>Company Information</b>
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
        <div className={styles.line} />
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
      </div>
    </div>
  );
};

export default CompanyInfo;
