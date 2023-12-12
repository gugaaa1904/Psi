-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Dez-2023 às 01:58
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

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
  `ADDRESS` varchar(255) DEFAULT NULL,
  `PHOTOO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `admin`
--

INSERT INTO `admin` (`ADMIN_ID`, `COMPANY_ID`, `NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`, `PHOTOO`) VALUES
(51, 54, 'Diogo Correia', 'DHL', 'admin@gmail.com', 351, 21, '', '123', 'Rua das Inspirações , Póvoa de Santa Iria', 'services/images/351 963876956.png'),
(52, 54, 'Rogério', 'DHL', 'admin2@gmail.com', 351, 25, '', '123', 'Rua de Odivelas', 'services/images/351 964567478.png');

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
  `TARIFF` decimal(5,2) NOT NULL,
  `PLAFOND` decimal(5,2) NOT NULL,
  `START_DATE` date NOT NULL,
  `END_DATE` date NOT NULL,
  `EMAIL_PLUG` varchar(255) DEFAULT NULL,
  `PASSWORD_PLUG` varchar(255) DEFAULT NULL,
  `IP_PLUG` varchar(15) DEFAULT NULL,
  `PHOTOO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `collaborator`
--

INSERT INTO `collaborator` (`COLLABORATOR_ID`, `COMPANY_ID`, `NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`, `TARIFF`, `PLAFOND`, `START_DATE`, `END_DATE`, `EMAIL_PLUG`, `PASSWORD_PLUG`, `IP_PLUG`, `PHOTOO`) VALUES
(77, 54, 'Nuno Bernardino', '', 'collaborator@gmail.com', 351, 20, '', '123', 'Rua dos Descobrimentos', 0.25, 30.00, '2023-12-11', '2023-12-15', 'joao57rafa@gmail.com', 'Novaims1', '192.168.1.2', NULL),
(78, 54, 'Diogo Correia', '', 'collaborator2@gmail.com', 351, 25, '', '123', 'Costa da caparica', 0.30, 30.00, '2023-12-05', '2024-02-06', 'joao67rafa@gmail.com', 'Novaims1', '192.168.1.5', NULL);

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
  `EMAIL` varchar(100) NOT NULL,
  `PHOTO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `company`
--

INSERT INTO `company` (`COMPANY_ID`, `NAME`, `ADDRESS`, `PHONE`, `NUMBER_EMPLOYEES`, `CNPJ`, `EMAIL`, `PHOTO`) VALUES
(54, 'DHL', 'Av. Luis de Camões , Lisboa', 351, 500, 423423, 'dhl@gmail.com', 'services/images/423423.png');

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
  `MONTHLY_USAGE` int(11) DEFAULT NULL,
  `YEAR` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `consuming`
--

INSERT INTO `consuming` (`CONSUMING_ID`, `COLLABORATOR_ID`, `DAILY_USAGE`, `DAILY_RUNTIME`, `DAY`, `MONTH_YEAR`, `WEEKLY_USAGE`, `MONTHLY_USAGE`, `YEAR`) VALUES
(155, 77, 12, 38, 6, '12', 18, 38, 2023),
(156, 77, 2, 38, 7, '12', 20, 40, 2023),
(157, 77, 15, 38, 8, '12', 35, 55, 2023),
(158, 77, 5, 38, 9, '12', 40, 60, 2023),
(159, 77, 4, 38, 10, '12', 44, 64, 2023),
(160, 77, 3, 39, 11, '12', 47, 67, 2023),
(163, 78, 1, 56, 10, '12', 1, 15, 2023),
(165, 78, 6, 56, 11, '12', 7, 22, 2023);

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
  MODIFY `ADMIN_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de tabela `collaborator`
--
ALTER TABLE `collaborator`
  MODIFY `COLLABORATOR_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT de tabela `company`
--
ALTER TABLE `company`
  MODIFY `COMPANY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de tabela `consuming`
--
ALTER TABLE `consuming`
  MODIFY `CONSUMING_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;

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
