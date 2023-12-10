-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 05:46 PM
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
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ADMIN_ID`, `COMPANY_ID`, `NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`) VALUES
(3, 2, 'admin', 'dhl', 'admin@gmail.com', 968912443, 4324, '', 'momo', 'Av 8 De Marco'),
(35, 4, 'admin2', 'nike', 'admin2@gmail.com', 968912443, 32, 'Female', '123', 'Av 8 De Marco'),
(37, 2, 'rute', 'dhl', 'rute@gmail.com', 23, 23, 'Female', 'rute1', 'rua');

-- --------------------------------------------------------

--
-- Table structure for table `collaborator`
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
  `IP_PLUG` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `collaborator`
--

INSERT INTO `collaborator` (`COLLABORATOR_ID`, `COMPANY_ID`, `NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`, `TARIFF`, `PLAFOND`, `START_DATE`, `END_DATE`, `EMAIL_PLUG`, `PASSWORD_PLUG`, `IP_PLUG`) VALUES
(3, 2, 'collaborator', 'dhl', 'joao57rafa@gmail.com', 968912443, 5435345, 'Female', 'agua', 'Av 8 De Marco', 0.00, 20.00, '2023-10-31', '2023-11-15', 'joao57rafa@gmail.com', 'Novaims1', '192.168.1.6'),
(35, 2, 'odete', 'dhl', 'joao67rafa@gmail.com', 6546456, 6546456, 'Male', 'BENFICA', 'AFRICA', 0.00, 654.00, '2023-12-01', '2023-12-15', 'joao67rafa@gmail.com', 'Novaims1', '192.168.1.5'),
(37, 2, 'badjarda', '', 'badjarda@gmail.com', 526562, 5426, 'Other', 'badjarda', 'whgerthgwr', 999.99, 999.99, '2023-12-04', '2023-12-19', NULL, NULL, NULL),
(50, 2, 'paula', '', 'paula@gmail.com', 657, 237456, 'Female', 'paula', 'shtfhs', 0.30, 45.00, '2023-12-11', '2023-12-27', 'paula@gmail.com', 'paula', '32366');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `COMPANY_ID` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `ADDRESS` varchar(255) DEFAULT NULL,
  `PHONE` int(11) DEFAULT NULL,
  `NUMBER_EMPLOYEES` int(11) DEFAULT NULL,
  `CNPJ` int(11) DEFAULT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `PHOTO` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`COMPANY_ID`, `NAME`, `ADDRESS`, `PHONE`, `NUMBER_EMPLOYEES`, `CNPJ`, `EMAIL`, `PHOTO`) VALUES
(2, 'dhl', 'Av 8 De Marco', 968912443, 432423, 423423, 'dhl@gmail.com', NULL),
(4, 'nike', 'Av 8 De Marco', 968912443, 321, 232, 'nike@gmail.com', NULL),
(5, 'puma', 'puma street', 968912443, 2, 32, 'puma@gmail.com', NULL),
(6, 'hluz', 'Av 8 De Marco', 543543534, 543, 432, 'hluz@gmail.com', NULL),
(8, 'adidas', 'fsd', 968912443, 32, 123, 'adidas@mail.com', NULL),
(9, 'hfg', 'gdg', 432, 432, 645, 'hfg@gmail.com', NULL),
(10, 'hrth', 'fg', 432, 423, 535, 'hfg@gmail.com', NULL),
(11, 'hfg', '543', 543, 543, 543, 'joao57rafa@hotmail.com', NULL),
(12, 'ggdf', '321fsd', 43242, 43, 432, 'fds@gmail.com', NULL),
(13, 'Numero 7 , 2*esquerdo', 'Av 8 De Marco', 968912443, 432, 432, 'joao57rafa@hotmail.com', NULL),
(14, 'Numero 7 , 2*esquerdo', 'Av 8 De Marco', 968912443, 654, 654, 'joao67rafa@gmail.com', NULL),
(15, 'Numero 7 , 2*esquerdo', 'Av 8 De Marco', 968912443, 654, 6456, 'joao57rafa@gmail.com', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `consuming`
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
-- Dumping data for table `consuming`
--

INSERT INTO `consuming` (`CONSUMING_ID`, `COLLABORATOR_ID`, `DAILY_USAGE`, `DAILY_RUNTIME`, `DAY`, `MONTH_YEAR`, `WEEKLY_USAGE`, `MONTHLY_USAGE`, `YEAR`) VALUES
(4, 35, 50, 60, 9, '12', 30, 40, NULL),
(49, 3, 16, 878, 9, '12', 16, 50, 2023),
(50, 35, 0, 311, 9, '12', 0, 0, 2023),
(51, 3, 25, 878, 10, '12', 17, 51, 2023);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ADMIN_ID`),
  ADD KEY `FK_ADMIN_RELATIONS_COMPANY` (`COMPANY_ID`);

--
-- Indexes for table `collaborator`
--
ALTER TABLE `collaborator`
  ADD PRIMARY KEY (`COLLABORATOR_ID`),
  ADD KEY `FK_COLLABOR_RELATIONS_COMPANY` (`COMPANY_ID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`COMPANY_ID`);

--
-- Indexes for table `consuming`
--
ALTER TABLE `consuming`
  ADD PRIMARY KEY (`CONSUMING_ID`),
  ADD KEY `FK_CONSUMIN_RELATIONS_COLLABOR` (`COLLABORATOR_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ADMIN_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `collaborator`
--
ALTER TABLE `collaborator`
  MODIFY `COLLABORATOR_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `COMPANY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `consuming`
--
ALTER TABLE `consuming`
  MODIFY `CONSUMING_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK_ADMIN_RELATIONS_COMPANY` FOREIGN KEY (`COMPANY_ID`) REFERENCES `company` (`COMPANY_ID`);

--
-- Constraints for table `collaborator`
--
ALTER TABLE `collaborator`
  ADD CONSTRAINT `FK_COLLABOR_RELATIONS_COMPANY` FOREIGN KEY (`COMPANY_ID`) REFERENCES `company` (`COMPANY_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
