/*==============================================================*/
/* Table: EMPRESA                                               */
/*==============================================================*/
create table EMPRESA 
(
   EMPRESA_ID           integer                        not null,
   NOME                 varchar(100)                   not null,
   LOCALIZACAO          varchar(100)                   null,
   ENDERECO             varchar(100)                   null,
   TELEFONE             integer                        null,
   E_MAIL               varchar(100)                   null,
   NUMERO_DE_FUNCIONARIOS integer                        null,
   PAIS                 varchar(100)                   null,
   CNPJ                 integer                        null,
   constraint PK_EMPRESA primary key (EMPRESA_ID)
);

/*==============================================================*/
/* Index: EMPRESA_PK                                            */
/*==============================================================*/
create unique index EMPRESA_PK on EMPRESA (
EMPRESA_ID ASC
);

/*==============================================================*/
/* Table: FUNCIONARIOS                                          */
/*==============================================================*/
create table FUNCIONARIOS 
(
   FUNCIONARIO_ID       integer                        not null,
   EMPRESA_ID           integer                        not null,
   NOME                 varchar(100)                   not null,
   SOBRENOME            varchar(100)                   not null,
   E_MAIL               varchar(100)                   not null,
   TELEFONE             integer                        null,
   IDADE                integer                        null,
   GENERO               varchar(30)                    null,
   PASSWORD             varchar(100)                   not null,
   NUMERO_DE_CONTRIBUINTE varchar(100)                   null,
   DEPARTAMENTO         varchar(100)                   null,
   constraint PK_FUNCIONARIOS primary key (FUNCIONARIO_ID)
);

/*==============================================================*/
/* Index: FUNCIONARIOS_PK                                       */
/*==============================================================*/
create unique index FUNCIONARIOS_PK on FUNCIONARIOS (
FUNCIONARIO_ID ASC
);

/*==============================================================*/
/* Index: TEM_VARIOS_FK                                         */
/*==============================================================*/
create index TEM_VARIOS_FK on FUNCIONARIOS (
EMPRESA_ID ASC
);
/*==============================================================*/
/* Table: RECURSOS_HUMANOS                                      */
/*==============================================================*/
create table RECURSOS_HUMANOS 
(
   FUNCIONARIO_ID       integer                        not null,
   RECURSOSHUMANOS_ID   integer                        not null,
   EMPRESA_ID           integer                        null,
   NOME                 varchar(100)                   not null,
   SOBRENOME            varchar(100)                   not null,
   E_MAIL               varchar(100)                   not null,
   TELEFONE             integer                        null,
   IDADE                integer                        null,
   GENERO               varchar(30)                    null,
   PASSWORD             varchar(100)                   not null,
   NUMERO_DE_CONTRIBUINTE varchar(100)                   null,
   DEPARTAMENTO         varchar(100)                   null,
   constraint PK_RECURSOS_HUMANOS primary key (FUNCIONARIO_ID, RECURSOSHUMANOS_ID)
);

/*==============================================================*/
/* Index: RECURSOS_HUMANOS_PK                                   */
/*==============================================================*/
create unique index RECURSOS_HUMANOS_PK on RECURSOS_HUMANOS (
FUNCIONARIO_ID ASC,
RECURSOSHUMANOS_ID ASC
);

/*==============================================================*/
/* Index: INHERITANCE_1_FK                                      */
/*==============================================================*/
create index INHERITANCE_1_FK on RECURSOS_HUMANOS (
FUNCIONARIO_ID ASC
);
/*==============================================================*/
/* Table: ADMINISTRADOR                                         */
/*==============================================================*/
create table ADMINISTRADOR 
(
   FUNCIONARIO_ID       integer                        not null,
   ADMINISTRADOR_ID     integer                        not null,
   EMPRESA_ID           integer                        null,
   NOME                 varchar(100)                   not null,
   SOBRENOME            varchar(100)                   not null,
   E_MAIL               varchar(100)                   not null,
   TELEFONE             integer                        null,
   IDADE                integer                        null,
   GENERO               varchar(30)                    null,
   PASSWORD             varchar(100)                   not null,
   NUMERO_DE_CONTRIBUINTE varchar(100)                   null,
   DEPARTAMENTO         varchar(100)                   null,
   constraint PK_ADMINISTRADOR primary key (FUNCIONARIO_ID, ADMINISTRADOR_ID)
);

/*==============================================================*/
/* Index: ADMINISTRADOR_PK                                      */
/*==============================================================*/
create unique index ADMINISTRADOR_PK on ADMINISTRADOR (
FUNCIONARIO_ID ASC,
ADMINISTRADOR_ID ASC
);

/*==============================================================*/
/* Index: INHERITANCE_3_FK                                      */
/*==============================================================*/
create index INHERITANCE_3_FK on ADMINISTRADOR (
FUNCIONARIO_ID ASC
);

/*==============================================================*/
/* Table: TOMADA_INTELIGENTE                                    */
/*==============================================================*/
create table TOMADA_INTELIGENTE 
(
   TOMADAINTELIGENTE_ID integer                        not null,
   FUNCIONARIO_ID       integer                        null,
   COLABORADOR_ID       integer                        null,
   constraint PK_TOMADA_INTELIGENTE primary key (TOMADAINTELIGENTE_ID)
);

/*==============================================================*/
/* Index: TOMADA_INTELIGENTE_PK                                 */
/*==============================================================*/
create unique index TOMADA_INTELIGENTE_PK on TOMADA_INTELIGENTE (
TOMADAINTELIGENTE_ID ASC
);

/*==============================================================*/
/* Index: POSSUI2_FK                                            */
/*==============================================================*/
create index POSSUI2_FK on TOMADA_INTELIGENTE (
FUNCIONARIO_ID ASC,
COLABORADOR_ID ASC
);

/*==============================================================*/
/* Table: CONSUMOS                                              */
/*==============================================================*/
create table CONSUMOS 
(
   CONSUMOS_ID          integer                        not null,
   TOMADAINTELIGENTE_ID integer                        null,
   GASTO_ATUAL          decimal                        not null,
   GASTO_DIARIO         decimal                        not null,
   GASTO_MENSAL         decimal                        not null,
   constraint PK_CONSUMOS primary key (CONSUMOS_ID)
);

/*==============================================================*/
/* Index: CONSUMOS_PK                                           */
/*==============================================================*/
create unique index CONSUMOS_PK on CONSUMOS (
CONSUMOS_ID ASC
);

/*==============================================================*/
/* Index: FAZ_FK                                                */
/*==============================================================*/
create index FAZ_FK on CONSUMOS (
TOMADAINTELIGENTE_ID ASC
);

/*==============================================================*/
/* Table: CONTRATO                                              */
/*==============================================================*/
create table CONTRATO 
(
   CONTRACT_ID          integer                        not null,
   FUNCIONARIO_ID       integer                        not null,
   RECURSOSHUMANOS_ID   integer                        not null,
   TARIFA               numeric                        not null,
   INICIO               date                           not null,
   FIM                  date                           not null,
   constraint PK_CONTRATO primary key (CONTRACT_ID)
);

/*==============================================================*/
/* Index: CONTRATO_PK                                           */
/*==============================================================*/
create unique index CONTRATO_PK on CONTRATO (
CONTRACT_ID ASC
);

/*==============================================================*/
/* Index: APROVAM_FK                                            */
/*==============================================================*/
create index APROVAM_FK on CONTRATO (
FUNCIONARIO_ID ASC,
RECURSOSHUMANOS_ID ASC
);


/*==============================================================*/
/* Table: COLABORADOR                                           */
/*==============================================================*/
create table COLABORADOR 
(
   FUNCIONARIO_ID       integer                        not null,
   COLABORADOR_ID       integer                        not null,
   TOMADAINTELIGENTE_ID integer                        not null,
   CONTRACT_ID          integer                        not null,
   EMPRESA_ID           integer                        null,
   NOME                 varchar(100)                   not null,
   SOBRENOME            varchar(100)                   not null,
   E_MAIL               varchar(100)                   not null,
   TELEFONE             integer                        null,
   IDADE                integer                        null,
   GENERO               varchar(30)                    null,
   PASSWORD             varchar(100)                   not null,
   NUMERO_DE_CONTRIBUINTE varchar(100)                   null,
   DEPARTAMENTO         varchar(100)                   null,
   constraint PK_COLABORADOR primary key (FUNCIONARIO_ID, COLABORADOR_ID)
);

/*==============================================================*/
/* Index: COLABORADOR_PK                                        */
/*==============================================================*/
create unique index COLABORADOR_PK on COLABORADOR (
FUNCIONARIO_ID ASC,
COLABORADOR_ID ASC
);

/*==============================================================*/
/* Index: POSSUI_FK                                             */
/*==============================================================*/
create index POSSUI_FK on COLABORADOR (
TOMADAINTELIGENTE_ID ASC
);

/*==============================================================*/
/* Index: PRETENCE_FK                                           */
/*==============================================================*/
create index PRETENCE_FK on COLABORADOR (
CONTRACT_ID ASC
);

/*==============================================================*/
/* Index: INHERITANCE_2_FK                                      */
/*==============================================================*/
create index INHERITANCE_2_FK on COLABORADOR (
FUNCIONARIO_ID ASC
);






/*==============================================================*/
/* Table: RELATORIO                                             */
/*==============================================================*/
create table RELATORIO 
(
   RELATORIO_COMPLETO_ID2 integer                        not null,
   FUNCIONARIO_ID       integer                        not null,
   COLABORADOR_ID       integer                        not null,
   constraint PK_RELATORIO primary key (RELATORIO_COMPLETO_ID2)
);

/*==============================================================*/
/* Index: RELATORIO_PK                                          */
/*==============================================================*/
create unique index RELATORIO_PK on RELATORIO (
RELATORIO_COMPLETO_ID2 ASC
);

/*==============================================================*/
/* Index: TEM_ACESSO_FK                                         */
/*==============================================================*/
create index TEM_ACESSO_FK on RELATORIO (
FUNCIONARIO_ID ASC,
COLABORADOR_ID ASC
);

/*==============================================================*/
/* Table: RELATORIO_COMPLETO                                    */
/*==============================================================*/
create table RELATORIO_COMPLETO 
(
   RELATORIO_COMPLETO_ID integer                        not null,
   REC_FUNCIONARIO_ID   integer                        not null,
   RECURSOSHUMANOS_ID   integer                        not null,
   FUNCIONARIO_ID       integer                        not null,
   ADMINISTRADOR_ID     integer                        not null,
   constraint PK_RELATORIO_COMPLETO primary key (RELATORIO_COMPLETO_ID)
);

/*==============================================================*/
/* Index: RELATORIO_COMPLETO_PK                                 */
/*==============================================================*/
create unique index RELATORIO_COMPLETO_PK on RELATORIO_COMPLETO (
RELATORIO_COMPLETO_ID ASC
);

/*==============================================================*/
/* Index: TEM_TOTAL_ACESSO_A_FK                                 */
/*==============================================================*/
create index TEM_TOTAL_ACESSO_A_FK on RELATORIO_COMPLETO (
REC_FUNCIONARIO_ID ASC,
RECURSOSHUMANOS_ID ASC
);

/*==============================================================*/
/* Index: TEM_TOTAL_ACESSO_FK                                   */
/*==============================================================*/
create index TEM_TOTAL_ACESSO_FK on RELATORIO_COMPLETO (
FUNCIONARIO_ID ASC,
ADMINISTRADOR_ID ASC
);


alter table ADMINISTRADOR
   add constraint FK_ADMINIST_INHERITAN_FUNCIONA foreign key (FUNCIONARIO_ID)
      references FUNCIONARIOS (FUNCIONARIO_ID)
      on update no action
      on delete no action;

alter table COLABORADOR
   add constraint FK_COLABORA_INHERITAN_FUNCIONA foreign key (FUNCIONARIO_ID)
      references FUNCIONARIOS (FUNCIONARIO_ID)
      on update no action
      on delete no action;

alter table COLABORADOR
   add constraint FK_COLABORA_POSSUI_TOMADA_I foreign key (TOMADAINTELIGENTE_ID)
      references TOMADA_INTELIGENTE (TOMADAINTELIGENTE_ID)
      on update no action
      on delete no action;

alter table COLABORADOR
   add constraint FK_COLABORA_PRETENCE_CONTRATO foreign key (CONTRACT_ID)
      references CONTRATO (CONTRACT_ID)
      on update no action
      on delete no action;

alter table CONSUMOS
   add constraint FK_CONSUMOS_FAZ_TOMADA_I foreign key (TOMADAINTELIGENTE_ID)
      references TOMADA_INTELIGENTE (TOMADAINTELIGENTE_ID)
      on update no action
      on delete no action;

alter table CONTRATO
   add constraint FK_CONTRATO_APROVAM_RECURSOS foreign key (FUNCIONARIO_ID, RECURSOSHUMANOS_ID)
      references RECURSOS_HUMANOS (FUNCIONARIO_ID, RECURSOSHUMANOS_ID)
      on update no action
      on delete no action;

alter table FUNCIONARIOS
   add constraint FK_FUNCIONA_TEM_VARIO_EMPRESA foreign key (EMPRESA_ID)
      references EMPRESA (EMPRESA_ID)
      on update no action
      on delete no action;

alter table RECURSOS_HUMANOS
   add constraint FK_RECURSOS_INHERITAN_FUNCIONA foreign key (FUNCIONARIO_ID)
      references FUNCIONARIOS (FUNCIONARIO_ID)
      on update no action
      on delete no action;

alter table RELATORIO
   add constraint FK_RELATORI_TEM_ACESS_COLABORA foreign key (FUNCIONARIO_ID, COLABORADOR_ID)
      references COLABORADOR (FUNCIONARIO_ID, COLABORADOR_ID)
      on update no action
      on delete no action;

alter table RELATORIO_COMPLETO
   add constraint FK_RELATORI_TEM_TOTAL_ADMINIST foreign key (FUNCIONARIO_ID, ADMINISTRADOR_ID)
      references ADMINISTRADOR (FUNCIONARIO_ID, ADMINISTRADOR_ID)
      on update no action
      on delete no action;

alter table RELATORIO_COMPLETO
   add constraint FK_RELATORI_TEM_TOTAL_RECURSOS foreign key (REC_FUNCIONARIO_ID, RECURSOSHUMANOS_ID)
      references RECURSOS_HUMANOS (FUNCIONARIO_ID, RECURSOSHUMANOS_ID)
      on update no action
      on delete no action;

alter table TOMADA_INTELIGENTE
   add constraint FK_TOMADA_I_POSSUI2_COLABORA foreign key (FUNCIONARIO_ID, COLABORADOR_ID)
      references COLABORADOR (FUNCIONARIO_ID, COLABORADOR_ID)
      on update no action
      on delete no action;
