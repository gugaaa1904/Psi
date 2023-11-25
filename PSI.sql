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
DROP DATABASE IF EXISTS infocharge;
CREATE DATABASE IF NOT EXISTS infocharge CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

DROP TABLE IF EXISTS Admin;
DROP TABLE IF EXISTS Company;
DROP TABLE IF EXISTS Consuming;
DROP TABLE IF EXISTS Collaborator;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE Admin (
    ADMIN_ID int NOT NULL AUTO_INCREMENT,
    COMPANY_ID int(11) NOT NULL,
    NAME varchar(100) NOT NULL,
    COMPANYNAME varchar(100) NOT NULL,
    EMAIL varchar(100) NOT NULL,
    PHONE int(11) DEFAULT NULL,
    AGE int(11) DEFAULT NULL,
    GENDER varchar(30) DEFAULT NULL,
    PASSWORD  varchar(100) NOT NULL,
    ADDRESS  varchar(255) DEFAULT NULL,
    PRIMARY KEY (ADMIN_ID)
);
-- --------------------------------------------------------

--
-- Table structure for table `colaborator`
--

CREATE TABLE Collaborator (
    COLABORATOR_ID int NOT NULL AUTO_INCREMENT,
    COMPANY_ID int(11) NOT NULL,
    NAME varchar(100) NOT NULL,
    COMPANYNAME varchar(100) NOT NULL,
    EMAIL varchar(100) NOT NULL,
    PHONE int(11) DEFAULT NULL,
    AGE int(11) DEFAULT NULL,
    GENDER varchar(30) DEFAULT NULL,
    PASSWORD  varchar(100) NOT NULL,
    ADDRESS  varchar(255) DEFAULT NULL,
    TARIFF decimal(10,0) NOT NULL,
    START_DATE date NOT NULL,
    END_DATE date NOT NULL,
    PLAFOND decimal(10,0) NOT NULL,
    PRIMARY KEY (COLABORATOR_ID)
);
-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE Company (
    COMPANY_ID int(11) NOT NULL AUTO_INCREMENT,
    NAME varchar(100) NOT NULL,
    ADDRESS varchar(100) DEFAULT NULL,
    PHONE int(11) DEFAULT NULL,
    EMAIL varchar(100) DEFAULT NULL,
    NUMBER_EMPLOYEES int(11) DEFAULT NULL,
    CNPJ int(11) DEFAULT NULL,
    PRIMARY KEY (COMPANY_ID)
);
-- --------------------------------------------------------

--
-- Table structure for table `consuming`
--

CREATE TABLE Consuming (
    CONSUMING_ID int(11) NOT NULL AUTO_INCREMENT,
    COLABORATOR_ID int(11) DEFAULT NULL,
    ENERGY_USAGE decimal(10,0) NOT NULL,
    DAILY_EXPENSE decimal(10,0) NOT NULL,
    MONTHLY_EXPENSE decimal(10,0) NOT NULL,
    CURRENT_POWER decimal(10,0) NOT NULL,
    PRIMARY KEY (CONSUMING_ID)
);
-- --------------------------------------------------------