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
   CONSUMING_ID         integer                        not null AUTO_INCREMENT,
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

