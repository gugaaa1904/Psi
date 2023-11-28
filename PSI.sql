-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Nov-2023 às 03:11
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `infocharge`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `admin`
--

CREATE TABLE `admin` (
  `ADMIN_ID` int(11) NOT NULL,
  `COMPANY_ID` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `COMPANYNAME` varchar(100) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `PHONE` int(11) DEFAULT NULL,
  `AGE` int(11) DEFAULT NULL,
  `GENDER` varchar(30) DEFAULT NULL,
  `PASSWORD` varchar(100) NOT NULL,
  `ADDRESS` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `admin`
--

INSERT INTO `admin` (`ADMIN_ID`, `COMPANY_ID`, `NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`) VALUES
(1, 1, 'Xantos', 'DHL', 'xantos@gmail.com', 12443, 69, 'Other', 'xantos', '42134');

-- --------------------------------------------------------

--
-- Estrutura da tabela `collaborator`
--

CREATE TABLE `collaborator` (
  `COLLABORATOR_ID` int(11) NOT NULL,
  `COMPANY_ID` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `COMPANYNAME` varchar(100) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `PHONE` int(11) DEFAULT NULL,
  `AGE` int(11) DEFAULT NULL,
  `GENDER` varchar(30) DEFAULT NULL,
  `PASSWORD` varchar(100) NOT NULL,
  `ADDRESS` varchar(255) DEFAULT NULL,
  `TARIFF` decimal(10,0) NOT NULL,
  `PLAFOND` decimal(10,0) NOT NULL,
  `START_DATE` date NOT NULL,
  `END_DATE` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `company`
--

CREATE TABLE `company` (
  `COMPANY_ID` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `ADDRESS` varchar(255) DEFAULT NULL,
  `PHONE` int(11) DEFAULT NULL,
  `NUMBER_EMPLOYEES` int(11) DEFAULT NULL,
  `CNPJ` int(11) DEFAULT NULL,
  `EMAIL` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `company`
--

INSERT INTO `company` (`COMPANY_ID`, `NAME`, `ADDRESS`, `PHONE`, `NUMBER_EMPLOYEES`, `CNPJ`, `EMAIL`) VALUES
(1, 'DHL', '1324', 12214132, 41234, 123, 'dhl@gmail.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `consuming`
--

CREATE TABLE `consuming` (
  `CONSUMING_ID` int(11) NOT NULL,
  `COLLABORATOR_ID` int(11) NOT NULL,
  `DAILY_USAGE` decimal(10,0) NOT NULL,
  `DAILY_RUNTIME` decimal(10,0) NOT NULL,
  `DAY` decimal(10,0) NOT NULL,
  `MONTH_YEAR` varchar(100) NOT NULL,
  `WEEKLY_USAGE` int(11) DEFAULT NULL,
  `MONTHLY_USAGE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `consuming`
--

INSERT INTO `consuming` (`CONSUMING_ID`, `COLLABORATOR_ID`, `DAILY_USAGE`, `DAILY_RUNTIME`, `DAY`, `MONTH_YEAR`, `WEEKLY_USAGE`, `MONTHLY_USAGE`) VALUES
(13, 2, 45, 1328, 27, '11_2023', 270, 472),
(14, 2, 0, 0, 28, '11_2023', 232, 468);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ADMIN_ID`),
  ADD KEY `FK_ADMIN_RELATIONS_COMPANY` (`COMPANY_ID`);

--
-- Índices para tabela `collaborator`
--
ALTER TABLE `collaborator`
  ADD PRIMARY KEY (`COLLABORATOR_ID`),
  ADD KEY `FK_COLLABOR_RELATIONS_COMPANY` (`COMPANY_ID`);

--
-- Índices para tabela `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`COMPANY_ID`);

--
-- Índices para tabela `consuming`
--
ALTER TABLE `consuming`
  ADD PRIMARY KEY (`CONSUMING_ID`),
  ADD KEY `FK_CONSUMIN_RELATIONS_COLLABOR` (`COLLABORATOR_ID`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `admin`
--
ALTER TABLE `admin`
  MODIFY `ADMIN_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `collaborator`
--
ALTER TABLE `collaborator`
  MODIFY `COLLABORATOR_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `company`
--
ALTER TABLE `company`
  MODIFY `COMPANY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `consuming`
--
ALTER TABLE `consuming`
  MODIFY `CONSUMING_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK_ADMIN_RELATIONS_COMPANY` FOREIGN KEY (`COMPANY_ID`) REFERENCES `company` (`COMPANY_ID`);

--
-- Limitadores para a tabela `collaborator`
--
ALTER TABLE `collaborator`
  ADD CONSTRAINT `FK_COLLABOR_RELATIONS_COMPANY` FOREIGN KEY (`COMPANY_ID`) REFERENCES `company` (`COMPANY_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
