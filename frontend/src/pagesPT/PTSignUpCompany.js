import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PTSignUpCompany.module.css";
import React, { useState } from "react";

const SignUpCompany = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    telephone: "",
    email: "",
    funcs: "",
    cnpj: "",
    companyImage: null, // Adicione o estado para a imagem aqui
  });

  const onSignInTextClick = useCallback(() => {
    navigate("/pt-sign-in-admin");
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      companyImage: image,
    }));
  };

  const onSignUpClick = useCallback(() => {
    const formDataForBackend = new FormData();
    formDataForBackend.append("name", formData.name);
    formDataForBackend.append("address", formData.address);
    formDataForBackend.append("telephone", formData.telephone);
    formDataForBackend.append("email", formData.email);
    formDataForBackend.append("funcs", formData.funcs);
    formDataForBackend.append("cnpj", formData.cnpj);
    formDataForBackend.append("companyImage", formData.companyImage);
  
    fetch("http://localhost/Psi/backend/routes.php/company", {
      method: "POST",
      body: formDataForBackend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
      navigate("/pt-sign-in-admin");
  }, [formData, navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/pt-main");
  }, [navigate]);


  return (
    <div className={styles.signUpCompany}>
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button.svg"
        onClick={onBackButtonClick}
      />

      <div className={styles.content}>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
        </div>
        <div className={styles.header}>
          <b className={styles.signUpYour}>Registar Empresa</b>
          <div className={styles.welcomeEnterYour}>
            Bem-vindo! Insira os detalhes da sua empresa:
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        <input
          className={styles.companyName}
          name="name"
          id="company_name"
          placeholder="Nome da Empresa"
          type="text"
          onChange={handleInputChange}
          value={formData.name}
        />

        <input
          className={styles.cnpj}
          name="cnpj"
          id="cnpj"
          placeholder="CNPJ (Registro Nacional de Pessoas Jurídicas)"
          type="integer"
          onChange={handleInputChange}
          value={formData.cnpj}
        />

        <input
          className={styles.companyEmail}
          name="email"
          id="company_email"
          placeholder="Email da Empresa"
          type="email"
          onChange={handleInputChange}
          value={formData.email}
        />

        <input
          className={styles.company_address}
          name="address"
          id="company_address"
          placeholder="Morada da Empresa"
          type="text"
          onChange={handleInputChange}
          value={formData.address}
        />

        <input
          className={styles.employeesNumber}
          name="funcs"
          id="employess_number"
          placeholder="Número de Funcionários"
          type="integer"
          onChange={handleInputChange}
          value={formData.funcs}
        />

        <input
          className={styles.phoneNumber}
          name="telephone"
          id="phone_number"
          placeholder="Telefone"
          type="integer"
          onChange={handleInputChange}
          value={formData.telephone}
        />

        <div className={styles.byCreatingAnAccountMeansY}>
          <input
            className={styles.checkbox}
            required={true}
            id="terms_conditions"
            type="checkbox"
          />
      <div className={styles.byCreatingAnContainer}>
        <p className={styles.byCreatingAnAccountMeansY1}>
          <span>{`Ao criar uma conta, significa que você concorda com os `}</span>
          <span className={styles.terms}>Termos & Condições</span>
          <span>{` e a nossa `}</span>
          <span className={styles.privacyPolicy}>Politica de Privacidade</span>
        </p>
      </div>
        </div>

        <div className={styles.addYourCompany}>Adicione a sua Imagem de Perfil da Empresa</div>
        <label
          htmlFor="fileInput"
          className={styles.iconCamera}
          onClick={handleImageClick}
        >
          <img
            className={styles.img}
            loading="eager"
            alt=""
            src="/camera@3x.png"
          />
        </label>
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          name="fileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        <div className={styles.buttonlargeprimary} onClick={onSignUpClick}>
          <b className={styles.button}>Registar</b>
        </div>

        <div className={styles.orSignInWith}>
          <div className={styles.line} />
          <div className={styles.orSignIn}>Ou Inicie a Sessão com</div>
          <div className={styles.line1} />
        </div>

        <div className={styles.doYouAlreadyContainer}>
          <span>Já tem uma conta?</span>
          <span className={styles.span}>{` `}</span>
        </div>

        <b className={styles.signIn} onClick={onSignInTextClick}>
          Iniciar Sessão
        </b>
        </div>
    </div>
  );
};

export default SignUpCompany;