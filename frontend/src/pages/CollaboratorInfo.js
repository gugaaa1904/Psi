import { useNavigate } from "react-router-dom";
import styles from "./CollaboratorInfo.module.css";
import React, { useState, useEffect, useCallback , Component } from "react";
import ReactApexChart from "react-apexcharts";
import axios from 'axios';

class ApexChartClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Expected Consume",
          data: [], // Preencheremos isso com os valores da coluna "MONTHLY_USAGE" multiplicados por 2.5
        },
        {
          name: "Actually Charged",
          data: [], // Array dinâmico com o mesmo comprimento da série "Consuming"
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
        title: {
          text: "General Consuming",
          align: "center",
          style: {
            fontFamily: "Inter, sans-serif",
          },
        },
        xaxis: {
          categories: [], // Preencheremos isso com os valores da coluna "MONTH_YEAR"
        },
        yaxis: {
          
        },
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
      const response = await axios.get('http://localhost/Psi/backend/services/consumingAdmin.php');
      const dataFromServer = response.data;
      console.log(dataFromServer)
      // Preencher o array de Consuming multiplicando por 2.5
      const consumingData = dataFromServer.map((item) => item.DAILY_USAGE );

      // Preencher o array de Plafond based on Contract com valores fixos (por exemplo, [50, 50])
      const plafondData = Array(consumingData.length).fill(50);

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
            categories: dataFromServer.map((item) => item.DAY),
          },
        },
      });
    } catch (error) {
      console.error("Erro ao buscar dados do servidor:", error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

const CollaboratorInfo = () => {
  const navigate = useNavigate();
  const [averageWeeklyUsage, setAverageWeeklyUsage] = useState(null);
  const [minDailyUsage, setMinDailyUsage] = useState(null);
  const [maxDailyUsage, setMaxDailyUsage] = useState(null);
  
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

  useEffect(() => {
    // Função para buscar os dados do backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/Psi/backend/services/consumingAdmin2.php'); // Substitua pelo caminho correto
        const data = await response.json();
        setAverageWeeklyUsage(data[0].average_weekly_usage);
        setMinDailyUsage(data[0].min_daily_usage);
        setMaxDailyUsage(data[0].max_daily_usage);


      } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
      }
    };

    // Chama a função de busca de dados ao montar o componente
    fetchData();
  }, []); // O array vazio significa que isso só será executado uma vez, equivalente ao componentDidMount


  return (
    <div className={styles.collaboratorInfo}>
      <div className={styles.content}>
        <div
          className={styles.maxPowerAchieved}
        >
          <div className={styles.bigCard}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.bg} />
          
          <div className={styles.data}>{maxDailyUsage && `${maxDailyUsage} kWh`}</div>
          <img className={styles.redIcon} alt="" src="/red-icon1.svg" />
          <div className={styles.maxPowerAchieved1}>Max Power Achieved</div>
        </div>
        <div
          className={styles.minPowerAchieved}
        >
          <div className={styles.bigCard}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.bg1} />
          
          <div className={styles.data1}>{minDailyUsage && `${minDailyUsage} kWh`}</div>
          <div className={styles.minPowerAchieved1}>Min Power Achieved</div>
          <img className={styles.greenIcon} alt="" src="/green-icon.svg" />
        </div>
        <div className={styles.averageCostIn}>
          <div className={styles.bigCard2}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.backgroundCopy2} />
          <div className={styles.data2}>{averageWeeklyUsage && `${(averageWeeklyUsage * 0.2).toFixed(1)} €`}</div>
          <div className={styles.averageCostIn1}>{`Average Cost in € `}</div>
        </div>
        <div
          className={styles.averageEnergyConsumptionIn}
        >
          <div className={styles.bigCard2}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.backgroundCopy2} />
          <div className={styles.data3}>{averageWeeklyUsage && `${averageWeeklyUsage} kWh`}</div>
          <div
            className={styles.averageEnergyConsumption}
          >{`Average Energy Consumption in kWh `}</div>
        </div>
        <div
          className={styles.listOfCollaborators}
        >
          <div className={styles.bigCard4}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.backgroundCopy2} />
          <div className={styles.employee4}>
            <div className={styles.bigCard5}>
              <div className={styles.bigCardChild} />
            </div>
            <div className={styles.employee4Child} />
            <b className={styles.name}>Nuno Bernardino</b>
            <div className={styles.position}>
              <p className={styles.dhlEmployee}>DHL - Employee</p>
            </div>
            <img
              className={styles.image21Icon}
              alt=""
              src="/image-211@2x.png"
            />
          </div>
          <div className={styles.employee3}>
            <div className={styles.bigCard5}>
              <div className={styles.bigCardChild} />
            </div>
            <div className={styles.employee4Child} />
            <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
            <b className={styles.name}>Diogo Correia</b>
            <div className={styles.position}>
              <p className={styles.dhlEmployee}>DHL - Employee</p>
            </div>
          </div>
          <div className={styles.employee2}>
            <div className={styles.bigCard5}>
              <div className={styles.bigCardChild} />
            </div>
            <div className={styles.employee4Child} />
            <b className={styles.name}>João Santos</b>
            <div className={styles.position}>
              <p className={styles.dhlEmployee}>DHL - Employee</p>
            </div>
            <img className={styles.image21Icon} alt="" src="/image-19@2x.png" />
          </div>
          <div className={styles.employee}>
            <div className={styles.bigCard5}>
              <div className={styles.bigCardChild} />
            </div>
            <div className={styles.employee4Child} />
            <b className={styles.name}>Afonso Mendes</b>
            <div className={styles.position}>
              <p className={styles.dhlEmployee}>DHL - Employee</p>
            </div>
            <img className={styles.image21Icon} alt="" src="/image-20@2x.png" />
          </div>
          <div className={styles.listOfCollaborators1}>
            List of Collaborators
          </div>
        </div>
        <div
          className={styles.generalConsuming}
        >
          <div className={styles.bigCard9}>
            <div className={styles.bigCardChild} />
          </div>
            <div className={styles.background} />
              <ApexChartClass />
            <div className={styles.graph}>
              <div className={styles.graph1}>
              
              </div>
            
            </div>
          </div>
        <div className={styles.generalOverview}>
          <div className={styles.divider} />
          <div className={styles.generalOverview1}>General Overview</div>
        </div>
      </div>
      <div className={styles.header}>
        <b className={styles.collaboratorInformation}>
          Collaborator Information
        </b>
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
        <div className={styles.line} />
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
      </div>
    </div>
  );
};

export default CollaboratorInfo;
