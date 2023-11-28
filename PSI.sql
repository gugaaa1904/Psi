<<<<<<< HEAD
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
=======
/*==============================================================*/
/* Table: ADMIN                                                 */
/*==============================================================*/
create table Admin 
(
   ADMIN_ID             integer                        not null AUTO_INCREMENT,
   COMPANY_ID           integer                        not null,
   NAME                 varchar(100)                   not null,
   COMPANYNAME          varchar(100)                   not null,
   EMAIL                varchar(100)                   not null,
   PHONE                integer                        null,
   AGE                  integer                        null,
   GENDER               varchar(30)                    null,
   PASSWORD             varchar(100)                   not null,
   ADDRESS              varchar(255)                   null,
   constraint PK_ADMIN primary key (ADMIN_ID)
);

/*==============================================================*/
/* Table: COLLABORATOR                                          */
/*==============================================================*/
create table Collaborator 
(
   COLLABORATOR_ID      integer                        not null AUTO_INCREMENT,
   COMPANY_ID           integer                        not null,
   NAME                 varchar(100)                   not null,
   COMPANYNAME          varchar(100)                   not null,
   EMAIL                varchar(100)                   not null,
   PHONE                integer                        null,
   AGE                  integer                        null,
   GENDER               varchar(30)                    null,
   PASSWORD             varchar(100)                   not null,
   ADDRESS              varchar(255)                   null,
   TARIFF               decimal                        not null,
   PLAFOND              decimal                        not null,
   START_DATE           date                           not null,
   END_DATE             date                           not null,
   constraint PK_COLLABORATOR primary key (COLLABORATOR_ID)
);

/*==============================================================*/
/* Table: COMPANY                                               */
/*==============================================================*/
create table Company
(
   COMPANY_ID           integer                        not null AUTO_INCREMENT,
   NAME                 varchar(100)                   not null,
   ADDRESS              varchar(255)                   null,
   PHONE                integer                        null,
   NUMBER_EMPLOYEES     integer                        null,
   CNPJ                 integer                        null,
   EMAIL                varchar(100)                   not null,
   constraint PK_COMPANY primary key (COMPANY_ID)
);

/*==============================================================*/
/* Table: CONSUMING                                             */
/*==============================================================*/
create table CONSUMING 
(
   CONSUMING_ID         integer                        not null,
   COLLABORATOR_ID      integer                        not null,
   DAILY_USAGE          numeric                        not null,
   DAILY_RUNTIME        numeric                        not null,
   DAY                  numeric                        not null,
   MONTH_YEAR           varchar(100)                   not null,
   constraint PK_CONSUMING primary key (CONSUMING_ID)
);

alter table Admin
   add constraint FK_ADMIN_RELATIONS_COMPANY foreign key (COMPANY_ID)
      references Company (COMPANY_ID);

alter table Collaborator
   add constraint FK_COLLABOR_RELATIONS_COMPANY foreign key (COMPANY_ID)
      references Company (COMPANY_ID);

alter table Consuming
   add constraint FK_CONSUMIN_RELATIONS_COLLABOR foreign key (COLLABORATOR_ID)
      references Collaborator (COLLABORATOR_ID);

>>>>>>> nodejs
