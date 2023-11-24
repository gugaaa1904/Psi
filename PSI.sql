-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2023 at 02:13 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infocharge`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ADMIN_ID` int(11) NOT NULL,
  `EMPRESA_ID` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `COMPANYNAME` varchar(100) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `PHONE` int(11) DEFAULT NULL,
  `AGE` int(11) DEFAULT NULL,
  `GENDER` varchar(30) DEFAULT NULL,
  `PASSWORD` varchar(100) NOT NULL,
  `ADDRESS` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `colaborator`
--

CREATE TABLE `colaborator` (
  `COLABORATOR_ID` int(11) NOT NULL,
  `CONTRACT_ID` int(11) NOT NULL,
  `EMPRESA_ID` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `PHONE` int(11) DEFAULT NULL,
  `AGE` int(11) DEFAULT NULL,
  `GENDER` varchar(30) DEFAULT NULL,
  `PASSWORD` varchar(100) NOT NULL,
  `ADDRESS` varchar(255) DEFAULT NULL,
  `COMPANYNAME` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `EMPRESA_ID` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `ADDRESS` varchar(100) DEFAULT NULL,
  `PHONE` int(11) DEFAULT NULL,
  `EMAIL` varchar(100) DEFAULT NULL,
  `NUMBER_EMPLOYEES` int(11) DEFAULT NULL,
  `CNPJ` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`EMPRESA_ID`, `NAME`, `ADDRESS`, `PHONE`, `EMAIL`, `NUMBER_EMPLOYEES`, `CNPJ`) VALUES
(1, 'wthrth', 'Rua Maria José Cardo n14 1DT', 465735467, 'goncalocustodioo@gmail.com', 23457246, 45676234);

-- --------------------------------------------------------

--
-- Table structure for table `consuming`
--

CREATE TABLE `consuming` (
  `CONSUMING_ID` int(11) NOT NULL,
  `COLABORATOR_ID` int(11) DEFAULT NULL,
  `ENERGY_USAGE` decimal(10,0) NOT NULL,
  `DAILY_EXPENSE` decimal(10,0) NOT NULL,
  `MONTHLY_EXPENSE` decimal(10,0) NOT NULL,
  `CURRENT_POWER` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contract`
--

CREATE TABLE `contract` (
  `CONTRACT_ID` int(11) NOT NULL,
  `TARIFF` decimal(10,0) NOT NULL,
  `START_DATE` date NOT NULL,
  `END_DATE` date NOT NULL,
  `PLAFOND` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ADMIN_ID`),
  ADD UNIQUE KEY `ADMIN_PK` (`ADMIN_ID`),
  ADD KEY `TEM_VARIOS_FK` (`EMPRESA_ID`);

--
-- Indexes for table `colaborator`
--
ALTER TABLE `colaborator`
  ADD PRIMARY KEY (`COLABORATOR_ID`),
  ADD UNIQUE KEY `COLABORATOR_PK` (`COLABORATOR_ID`),
  ADD KEY `PRETENCE_FK` (`CONTRACT_ID`),
  ADD KEY `RELATIONSHIP_4_FK` (`EMPRESA_ID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`EMPRESA_ID`),
  ADD UNIQUE KEY `COMPANY_PK` (`EMPRESA_ID`);

--
-- Indexes for table `consuming`
--
ALTER TABLE `consuming`
  ADD PRIMARY KEY (`CONSUMING_ID`),
  ADD UNIQUE KEY `CONSUMING_PK` (`CONSUMING_ID`),
  ADD KEY `RELATIONSHIP_7_FK` (`COLABORATOR_ID`);

--
-- Indexes for table `contract`
--
ALTER TABLE `contract`
  ADD PRIMARY KEY (`CONTRACT_ID`),
  ADD UNIQUE KEY `CONTRACT_PK` (`CONTRACT_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `EMPRESA_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK_ADMIN_TEM_VARIO_COMPANY` FOREIGN KEY (`EMPRESA_ID`) REFERENCES `company` (`EMPRESA_ID`);

--
-- Constraints for table `colaborator`
--
ALTER TABLE `colaborator`
  ADD CONSTRAINT `FK_COLABORA_PRETENCE_CONTRACT` FOREIGN KEY (`CONTRACT_ID`) REFERENCES `contract` (`CONTRACT_ID`),
  ADD CONSTRAINT `FK_COLABORA_RELATIONS_COMPANY` FOREIGN KEY (`EMPRESA_ID`) REFERENCES `company` (`EMPRESA_ID`);

--
-- Constraints for table `consuming`
--
ALTER TABLE `consuming`
  ADD CONSTRAINT `FK_CONSUMIN_RELATIONS_COLABORA` FOREIGN KEY (`COLABORATOR_ID`) REFERENCES `colaborator` (`COLABORATOR_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
