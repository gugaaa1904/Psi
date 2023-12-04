-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Dez-2023 às 16:29
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
  `ADDRESS` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `admin`
--

INSERT INTO `admin` (`ADMIN_ID`, `COMPANY_ID`, `NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`) VALUES
(3, 2, 'joao', 'pila', 'ffasfa@gmail.com', 968912443, 4324, '', 'momo', 'Av 8 De Marco'),
(4, 2, 'JOAO', 'pila', 'joao57rafa@hotmail.com', 968912443, 323, '', 'FDSSD', 'Av 8 De Marco'),
(5, 2, 'João', 'pila', 'ffasfa@gmail.com', 968912443, 43, '', 'pila', 'Av 8 De Marco'),
(6, 5, 'puma dono', 'puma', 'pumadono@gmail.com', 968912443, 432, '', 'momo', 'fsfsdfsd'),
(7, 6, 'joao', 'hluz', 'joao57rafa@hotmail.com', 968912443, 0, '', 'fdsfsd', 'Av 8 De Marco');

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

--
-- Extraindo dados da tabela `collaborator`
--

INSERT INTO `collaborator` (`COLLABORATOR_ID`, `COMPANY_ID`, `NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`, `TARIFF`, `PLAFOND`, `START_DATE`, `END_DATE`) VALUES
(3, 2, 'João', 'pila', 'joao57rafa@hotmail.com', 968912443, 5435345, 'Female', '4324234', 'Av 8 De Marco', 50, 432, '2023-10-31', '2023-11-15'),
(4, 2, 'RandomName', 'RandomCompany', 'random@example.com', 6546456, 6546456, 'Male', 'RandomPassword', 'RandomAddress', 654, 654, '2023-12-01', '2023-12-15'),
(5, 2, 'joni', 'pila', 'fdsf@gmail.com', 432423, 432, 'female', 'pila', 'gdfgdfg', 543, 543, '2023-12-13', '2023-12-21');

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
(2, 'pila', 'Av 8 De Marco', 968912443, 432423, 423423, 'joao57rafa@hotmail.com'),
(3, 'Numero 7 , 2*esquerdo', 'Av 8 De Marco', 968912443, 43242, 0, 'fdsfsd@gmail.com'),
(4, 'nike', 'Av 8 De Marco', 968912443, 321, 232, 'nike@gmail.com'),
(5, 'puma', 'puma street', 968912443, 2, 32, 'puma@gmail.com'),
(6, 'hluz', 'Av 8 De Marco', 543543534, 543, 432, 'hluz@gmail.com');

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
(3, 3, 30, 30, 8, '8', 50, 80),
(4, 35, 50, 60, 9, '8', 30, 40),
(5, 35, 78, 90, 10, '9', 30, 65),
(6, 11, 2, 3, 3, '3', 3, 3),
(7, 35, 3, 3, 3, '3', 3, 3);

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
  MODIFY `ADMIN_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `collaborator`
--
ALTER TABLE `collaborator`
  MODIFY `COLLABORATOR_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `company`
--
ALTER TABLE `company`
  MODIFY `COMPANY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
