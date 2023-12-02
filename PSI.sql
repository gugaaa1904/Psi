/*==============================================================*/
/* Table: ADMIN                                                 */
/*==============================================================*/
CREATE TABLE ADMIN (
   ADMIN_ID             INTEGER                        NOT NULL,
   COMPANY_ID           INTEGER                        NOT NULL,
   NAME                 VARCHAR(100)                   NOT NULL,
   COMPANYNAME          VARCHAR(100)                   NOT NULL,
   EMAIL                VARCHAR(100)                   NOT NULL,
   PHONE                INTEGER                        NULL,
   AGE                  INTEGER                        NULL,
   GENDER               VARCHAR(30)                    NULL,
   PASSWORD             VARCHAR(100)                   NOT NULL,
   ADDRESS              VARCHAR(255)                   NULL,
   CONSTRAINT PK_ADMIN PRIMARY KEY (ADMIN_ID)
);

/*==============================================================*/
/* Index: ADMIN_PK                                              */
/*==============================================================*/
CREATE UNIQUE INDEX ADMIN_PK ON ADMIN (ADMIN_ID ASC);

/*==============================================================*/
/* Index: RELATIONSHIP_2_FK                                     */
/*==============================================================*/
CREATE INDEX RELATIONSHIP_2_FK ON ADMIN (COMPANY_ID ASC);

/*==============================================================*/
/* Table: COLLABORATOR                                          */
/*==============================================================*/
CREATE TABLE COLLABORATOR (
   COLLABORATOR_ID      INTEGER                        NOT NULL,
   COMPANY_ID           INTEGER                        NOT NULL,
   ADMIN_ID             INTEGER                        NOT NULL,
   NAME                 VARCHAR(100)                   NOT NULL,
   COMPANYNAME          VARCHAR(100)                   NOT NULL,
   EMAIL                VARCHAR(100)                   NOT NULL,
   PHONE                INTEGER                        NULL,
   AGE                  INTEGER                        NULL,
   GENDER               VARCHAR(30)                    NULL,
   PASSWORD             VARCHAR(100)                   NOT NULL,
   ADDRESS              VARCHAR(255)                   NULL,
   TARIFF               DECIMAL                        NOT NULL,
   PLAFOND              DECIMAL                        NOT NULL,
   START_DATE           DATE                           NOT NULL,
   END_DATE             DATE                           NOT NULL,
   CONSTRAINT PK_COLLABORATOR PRIMARY KEY (COLLABORATOR_ID)
);

/*==============================================================*/
/* Index: COLLABORATOR_PK                                       */
/*==============================================================*/
CREATE UNIQUE INDEX COLLABORATOR_PK ON COLLABORATOR (COLLABORATOR_ID ASC);

/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                     */
/*==============================================================*/
CREATE INDEX RELATIONSHIP_1_FK ON COLLABORATOR (COMPANY_ID ASC);

/*==============================================================*/
/* Table: COMPANY                                               */
/*==============================================================*/
CREATE TABLE COMPANY (
   COMPANY_ID           INTEGER                        NOT NULL,
   NAME                 VARCHAR(100)                   NOT NULL,
   ADDRESS              VARCHAR(255)                   NULL,
   PHONE                INTEGER                        NULL,
   NUMBER_EMPLOYEES     INTEGER                        NULL,
   CNPJ                 INTEGER                        NULL,
   EMAIL                VARCHAR(100)                   NOT NULL,
   CONSTRAINT PK_COMPANY PRIMARY KEY (COMPANY_ID)
);

/*==============================================================*/
/* Index: COMPANY_PK                                            */
/*==============================================================*/
CREATE UNIQUE INDEX COMPANY_PK ON COMPANY (COMPANY_ID ASC);

/*==============================================================*/
/* Table: PLUG                                                  */
/*==============================================================*/
CREATE TABLE PLUG (
   PLUG_ID              INTEGER                        NOT NULL,
   COLLABORATOR_ID      INTEGER                        NOT NULL,
   TAPO_USERNAME        VARCHAR(255)                   NOT NULL,
   TAPO_PASSWORD        VARCHAR(255)                   NOT NULL,
   IP_ADDRESS           VARCHAR(15)                    NOT NULL,
   CONSTRAINT PK_PLUG PRIMARY KEY (PLUG_ID),
   CONSTRAINT FK_PLUG_RELATIONS_COLLABOR FOREIGN KEY (COLLABORATOR_ID) REFERENCES COLLABORATOR (COLLABORATOR_ID) ON UPDATE RESTRICT ON DELETE RESTRICT
);

/*==============================================================*/
/* Index: PLUG_PK                                               */
/*==============================================================*/
CREATE UNIQUE INDEX PLUG_PK ON PLUG (PLUG_ID ASC);

/*==============================================================*/
/* Table: CONSUMING                                             */
/*==============================================================*/
CREATE TABLE CONSUMING (
   CONSUMING_ID         INTEGER                        NOT NULL,
   PLUG_ID              INTEGER                        NOT NULL,
   DAILY_USAGE          NUMERIC                        NOT NULL,
   WEEKLY_USAGE         NUMERIC                        NOT NULL,
   MONTHLY_USAGE        NUMERIC                        NOT NULL,
   DAILY_RUNTIME        NUMERIC                        NOT NULL,
   DAY                  NUMERIC                        NOT NULL,
   MONTH_YEAR           VARCHAR(100)                   NOT NULL,
   CONSTRAINT PK_CONSUMING PRIMARY KEY (CONSUMING_ID)
);

/*==============================================================*/
/* Index: CONSUMING_PK                                          */
/*==============================================================*/
CREATE UNIQUE INDEX CONSUMING_PK ON CONSUMING (CONSUMING_ID ASC);

/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                     */
/*==============================================================*/
CREATE INDEX RELATIONSHIP_3_FK ON CONSUMING (PLUG_ID ASC);

ALTER TABLE ADMIN
   ADD CONSTRAINT FK_ADMIN_RELATIONS_COMPANY FOREIGN KEY (COMPANY_ID)
      REFERENCES COMPANY (COMPANY_ID)
      ON UPDATE RESTRICT
      ON DELETE RESTRICT;

ALTER TABLE COLLABORATOR
   ADD CONSTRAINT FK_COLLABOR_RELATIONS_COMPANY FOREIGN KEY (COMPANY_ID)
      REFERENCES COMPANY (COMPANY_ID)
      ON UPDATE RESTRICT
      ON DELETE RESTRICT;

ALTER TABLE CONSUMING
   ADD CONSTRAINT FK_CONSUMING_RELATIONS_PLUG FOREIGN KEY (PLUG_ID)
      REFERENCES PLUG (PLUG_ID)
      ON UPDATE RESTRICT
      ON DELETE RESTRICT;