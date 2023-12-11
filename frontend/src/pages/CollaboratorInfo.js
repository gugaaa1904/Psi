import { useNavigate } from "react-router-dom";
import styles from "./CollaboratorInfo.module.css";
import React, { useState, useEffect, useCallback, Component } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

class ApexChartClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Expected Consume",
          data: [],
          color: "#005c7d", // Preencheremos isso com os valores da coluna "MONTHLY_USAGE" multiplicados por 2.5
        },
        {
          name: "Actually Charged",
          data: [],
          color: "rgb(58, 207, 108)", // Array dinâmico com o mesmo comprimento da série "Consuming"
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [], // Preencheremos isso com os valores da coluna "MONTH_YEAR"
        },
        yaxis: {},
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "KW";
            },
          },
        },
      },
    };
  }

  fetchData = async () => {
    try {
      const collaboratorId = sessionStorage.getItem("collaborator_id");
      const response = await axios.get(
        `http://localhost/Psi/backend/services/collaboratorinfo.php?collaborator_id=${collaboratorId}`
      );
      //para mandar o company_id no get é tipo "http://localhost/Psi/backend/services/consumingAdmin.php?id=3"
      //sendo que o id é o company_id daqui -> const idString = sessionStorage.getItem('company_id');
      const dataFromServer = response.data;

      // Preencher o array de Consuming multiplicando por 2.5
      const consumingData = dataFromServer.map((item) => item.DAILY_USAGE);

      // Preencher o array de Plafond based on Contract com valores fixos (por exemplo, [50, 50])
      const plafondData = dataFromServer.map((item) => item.PLAFOND);

      this.setState({
        series: [
          {
            name: "Actually Charged",
            data: consumingData,
          },
          {
            name: "Expected Consume",
            data: plafondData,
          },
        ],
        options: {
          ...this.state.options,
          xaxis: {
            ...this.state.options.xaxis,
            categories: dataFromServer.map(
              (item) => `${item.DAY}/${item.MONTH_YEAR}`
            ),
          },
        },
      });
    } catch (error) {
      console.error("Erro ao buscar dados do servidor:", error);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCollaborator !== this.props.selectedCollaborator) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div
        id="chart"
        style={{
          position: "absolute",
          top: 70,
          width: 660,
          left: 1150,
          transform: "translateX(-50%)",
        }}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={650}
        />
      </div>
    );
  }
}

const CollaboratorInfo = () => {
  const navigate = useNavigate();
  const [averageWeeklyUsage, setAverageWeeklyUsage] = useState(null);
  const [averageMonthlyUsage, setAverageMonthlyUsage] = useState(null);
  const [minDailyUsage, setMinDailyUsage] = useState(null);
  const [maxDailyUsage, setMaxDailyUsage] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState("weekly");

  const [collaborators, setCollaborators] = useState([]);
  const [selectedCollaborator, setSelectedCollaborator] = useState("");

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

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/remove-user");
  }, [navigate]);

  const onAddUserContainerClick = useCallback(() => {
    navigate("/add-user");
  }, [navigate]);

  function addCollaborators(data) {
    for (let i = 0; i < data.length; i++) {
      collaborators.push(data[i]);
    }
  }

  useEffect(() => {
    const collaboratorID = sessionStorage.getItem("collaborator_id");
    const fetchData = async () => {
      try {
        const collaboratorID = sessionStorage.getItem("collaborator_id");
        const response = await fetch(
          `http://localhost/Psi/backend/services/consumingAdmin2.php?collaborator_id=${collaboratorID}&interval=${selectedInterval}`
        );
        const data = await response.json();
        setAverageWeeklyUsage(data[0].average_weekly_usage);
        setAverageMonthlyUsage(data[0].average_monthly_usage);
        setMinDailyUsage(data[0].min_daily_usage);
        setMaxDailyUsage(data[0].max_daily_usage);
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      }
    };

    fetchData();
  }, [selectedInterval, selectedCollaborator]);

  useEffect(() => {
    const companyID = sessionStorage.getItem("company_id");

    const fetchCollaborators = async () => {
      try {
        const response = await fetch(
          `http://localhost/Psi/backend/services/listcollaborator.php?company_id=${companyID}`
        );
        const data = await response.json();

        // Remove duplicates using a Set
        const uniqueCollaborators = Array.from(
          new Set(data.map((collaborator) => collaborator.COLLABORATOR_ID))
        ).map((collaboratorId) =>
          data.find(
            (collaborator) => collaborator.COLLABORATOR_ID === collaboratorId
          )
        );

        setCollaborators(uniqueCollaborators);

        // Set the initial selected collaborator when collaborators are fetched
        if (uniqueCollaborators.length > 0) {
          setSelectedCollaborator(uniqueCollaborators[0].COLLABORATOR_ID);
          sessionStorage.setItem(
            "collaborator_id",
            uniqueCollaborators[0].COLLABORATOR_ID
          );
        }
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      }
    };

    fetchCollaborators();
  }, []);

  const onChangeCollaborator = (selectedValue) => {
    // Update the state with the collaborator selected
    setSelectedCollaborator(selectedValue);

    // Store the COLLABORATOR_ID in sessionStorage
    sessionStorage.setItem("collaborator_id", selectedValue);
  };

  return (
    <div className={styles.collaboratorInfo}>
      <div className={styles.content}>
        <div className={styles.header}>
          <b className={styles.collaboratorInformation}>
            Collaborator Information
          </b>
        </div>

        <div className={styles.maxPowerAchieved}>
          <div className={styles.bg} />

          <div className={styles.data}>
            {maxDailyUsage && `${maxDailyUsage} kW`}
          </div>
          <img className={styles.redIcon} alt="" src="/red-icon1.svg" />
          <div className={styles.maxPowerAchieved1}>Max Power Achieved</div>
        </div>
        <div className={styles.minPowerAchieved}>
          <div className={styles.bg1} />

          <div className={styles.data1}>
            {minDailyUsage && `${minDailyUsage} kW`}
          </div>
          <div className={styles.minPowerAchieved1}>Min Power Achieved</div>
          <img className={styles.greenIcon} alt="" src="/green-icon.svg" />
        </div>
        <div
          className={styles.averageEnergyConsumptionIn}
          style={{ position: "relative", zIndex: "2" }}
        >
          <div className={styles.backgroundCopy1} />
          <div className={styles.data3}>
            {selectedInterval === "weekly"
              ? averageWeeklyUsage && `${averageWeeklyUsage} kWh`
              : averageMonthlyUsage && `${averageMonthlyUsage} kWh`}
          </div>
          <div
            className={styles.averageEnergyConsumption}
          >{`Total Energy Consumption in kWh `}</div>

          {/* Seletor para escolher entre 'monthly' e 'weekly' */}
          <select
            className={styles.monthsDropDown1}
            value={selectedInterval}
            onChange={(e) => setSelectedInterval(e.target.value)}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className={styles.backgroundlist} />
        <div className={styles.generalOverview}>
          <div className={styles.generalOverview1}>General Overview</div>
        </div>

        <div className={styles.generalConsuming}>
          <ApexChartClass selectedCollaborator={selectedCollaborator} />
          <div className={styles.graph}>
            <div className={styles.graph1}></div>
            <div className={styles.titlegeneral}>General Consuming</div>
            <select
              className={styles.dropdowncollaborator}
              id="collaboratorSelect"
              value={selectedCollaborator}
              onChange={(e) => onChangeCollaborator(e.target.value)}
            >
              <option value="">Selecione um colaborador</option>
              {collaborators.map((collaborator) => (
                <option
                  key={collaborator.COLLABORATOR_ID}
                  value={collaborator.COLLABORATOR_ID}
                >
                  {collaborator.NAME}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className={styles.averageCostIn}>
        <div className={styles.backgroundCopy2} />
        <div className={styles.data2}>
          {selectedInterval === "weekly"
            ? averageWeeklyUsage && `${averageWeeklyUsage * 0.2} kWh`
            : averageMonthlyUsage && `${averageMonthlyUsage * 0.2} kWh`}
        </div>
        <div className={styles.averageCostIn1}>{`Total Cost in € `}</div>

        {/* Seletor para escolher entre 'weekly' e 'monthly' */}
        <select
          value={selectedInterval}
          onChange={(e) => setSelectedInterval(e.target.value)}
          className={styles.monthsDropDown2}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
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
          <div className={styles.collaboratorInformation1}>
            <b className={styles.collaboratorInformation2}>
              Collaborator Information
            </b>
          </div>
          <div
            className={styles.companyInformation}
            onClick={onCompanyInformationContainerClick}
          >
            <div className={styles.profile1}>Company Information</div>
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

export default CollaboratorInfo;