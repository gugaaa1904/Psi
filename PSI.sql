/*==============================================================*/
/* Table: ADMIN                                                 */
/*==============================================================*/
create table ADMIN 
(
   FUNCIONARIO_ID       integer                        not null,
   ADMIN_ID             integer                        not null,
   EMPRESA_ID           integer                        null,
   NAME                 varchar(100)                   not null,
   SURNAME              varchar(100)                   not null,
   E_MAIL               varchar(100)                   not null,
   PHONE                integer                        null,
   AGE                  integer                        null,
   GENDER               varchar(30)                    null,
   PASSWORD             varchar(100)                   not null,
   ROLE                 varchar(100)                   not null,
   ADDRESS              varchar(255)                   null,
   constraint PK_ADMIN primary key (FUNCIONARIO_ID, ADMIN_ID)
);

/*==============================================================*/
/* Index: ADMIN_PK                                              */
/*==============================================================*/
create unique index ADMIN_PK on ADMIN (
FUNCIONARIO_ID ASC,
ADMIN_ID ASC
);

/*==============================================================*/
/* Index: INHERITANCE_2_FK                                      */
/*==============================================================*/
create index INHERITANCE_2_FK on ADMIN (
FUNCIONARIO_ID ASC
);

/*==============================================================*/
/* Table: COLABORATOR                                           */
/*==============================================================*/
create table COLABORATOR 
(
   FUNCIONARIO_ID       integer                        not null,
   COLABORATOR_ID       integer                        not null,
   CONTRACT_ID          integer                        not null,
   EMPRESA_ID           integer                        null,
   NAME                 varchar(100)                   not null,
   SURNAME              varchar(100)                   not null,
   E_MAIL               varchar(100)                   not null,
   PHONE                integer                        null,
   AGE                  integer                        null,
   GENDER               varchar(30)                    null,
   PASSWORD             varchar(100)                   not null,
   ROLE                 varchar(100)                   not null,
   ADDRESS              varchar(255)                   null,
   constraint PK_COLABORATOR primary key (FUNCIONARIO_ID, COLABORATOR_ID)
);

/*==============================================================*/
/* Index: COLABORATOR_PK                                        */
/*==============================================================*/
create unique index COLABORATOR_PK on COLABORATOR (
FUNCIONARIO_ID ASC,
COLABORATOR_ID ASC
);

/*==============================================================*/
/* Index: PRETENCE_FK                                           */
/*==============================================================*/
create index PRETENCE_FK on COLABORATOR (
CONTRACT_ID ASC
);

/*==============================================================*/
/* Index: INHERITANCE_1_FK                                      */
/*==============================================================*/
create index INHERITANCE_1_FK on COLABORATOR (
FUNCIONARIO_ID ASC
);

/*==============================================================*/
/* Table: COMPANY                                               */
/*==============================================================*/
create table COMPANY 
(
   EMPRESA_ID           integer                        not null AUTO_INCREMENT,
   NAME                 varchar(100)                   not null,
   ADDRESS               varchar(100)                   null,
   PHONE                integer                        null,
   E_MAIL               varchar(100)                   null,
   NUMBER_EMPLOYEES     integer                        null,
   CNPJ                 integer                        null,
   constraint PK_COMPANY primary key (EMPRESA_ID)
);

/*==============================================================*/
/* Index: COMPANY_PK                                            */
/*==============================================================*/
create unique index COMPANY_PK on COMPANY (
EMPRESA_ID ASC
);

/*==============================================================*/
/* Table: CONSUMING                                             */
/*==============================================================*/
create table CONSUMING 
(
   CONSUMING_ID         integer                        not null,
   FUNCIONARIO_ID       integer                        null,
   COLABORATOR_ID       integer                        null,
   ENERGY_USAGE         numeric                        not null,
   DAILY_EXPENSE        numeric                        not null,
   MONTHLY_EXPENSE      numeric                        not null,
   CURRENT_POWER        numeric                        not null,
   constraint PK_CONSUMING primary key (CONSUMING_ID)
);

/*==============================================================*/
/* Index: CONSUMING_PK                                          */
/*==============================================================*/
create unique index CONSUMING_PK on CONSUMING (
CONSUMING_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_7_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_7_FK on CONSUMING (
FUNCIONARIO_ID ASC,
COLABORATOR_ID ASC
);

/*==============================================================*/
/* Table: CONTRACT                                              */
/*==============================================================*/
create table CONTRACT 
(
   CONTRACT_ID          integer                        not null,
   FUNCIONARIO_ID       integer                        null,
   ADMIN_ID             integer                        null,
   TARIFF               numeric                        not null,
   START_DATE           date                           not null,
   END_DATE             date                           not null,
   PLAFOND              numeric                        not null,
   constraint PK_CONTRACT primary key (CONTRACT_ID)
);

/*==============================================================*/
/* Index: CONTRACT_PK                                           */
/*==============================================================*/
create unique index CONTRACT_PK on CONTRACT (
CONTRACT_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_5_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_5_FK on CONTRACT (
FUNCIONARIO_ID ASC,
ADMIN_ID ASC
);

/*==============================================================*/
/* Table: WORKERS                                               */
/*==============================================================*/
create table WORKERS 
(
   FUNCIONARIO_ID       integer                        not null,
   EMPRESA_ID           integer                        not null,
   NAME                 varchar(100)                   not null,
   SURNAME              varchar(100)                   not null,
   E_MAIL               varchar(100)                   not null,
   PHONE                integer                        null,
   AGE                  integer                        null,
   GENDER               varchar(30)                    null,
   PASSWORD             varchar(100)                   not null,
   ROLE                 varchar(100)                   not null,
   ADDRESS              varchar(255)                   null,
   constraint PK_WORKERS primary key (FUNCIONARIO_ID)
);

/*==============================================================*/
/* Index: WORKERS_PK                                            */
/*==============================================================*/
create unique index WORKERS_PK on WORKERS (
FUNCIONARIO_ID ASC
);

/*==============================================================*/
/* Index: TEM_VARIOS_FK                                         */
/*==============================================================*/
create index TEM_VARIOS_FK on WORKERS (
EMPRESA_ID ASC
);

alter table ADMIN
   add constraint FK_ADMIN_INHERITAN_WORKERS foreign key (FUNCIONARIO_ID)
      references WORKERS (FUNCIONARIO_ID)
      on update restrict
      on delete restrict;

alter table COLABORATOR
   add constraint FK_COLABORA_INHERITAN_WORKERS foreign key (FUNCIONARIO_ID)
      references WORKERS (FUNCIONARIO_ID)
      on update restrict
      on delete restrict;

alter table COLABORATOR
   add constraint FK_COLABORA_PRETENCE_CONTRACT foreign key (CONTRACT_ID)
      references CONTRACT (CONTRACT_ID)
      on update restrict
      on delete restrict;

alter table CONSUMING
   add constraint FK_CONSUMIN_RELATIONS_COLABORA foreign key (FUNCIONARIO_ID, COLABORATOR_ID)
      references COLABORATOR (FUNCIONARIO_ID, COLABORATOR_ID)
      on update restrict
      on delete restrict;

alter table CONTRACT
   add constraint FK_CONTRACT_RELATIONS_ADMIN foreign key (FUNCIONARIO_ID, ADMIN_ID)
      references ADMIN (FUNCIONARIO_ID, ADMIN_ID)
      on update restrict
      on delete restrict;

alter table WORKERS
   add constraint FK_WORKERS_TEM_VARIO_COMPANY foreign key (EMPRESA_ID)
      references COMPANY (EMPRESA_ID)
      on update restrict
      on delete restrict;

