import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PTSignUpAdmin.module.css";
import React, { useState } from "react";

const SignUpAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    admin_name: "",
    address: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    password: "",
    companyname: "",
    companyImage: null,
  });

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

  const onSignInTextClick = useCallback(() => {
    navigate("/pt-sign-in-admin");
  }, [navigate]);
  console.log(formData);
  const onSignUpClick = useCallback(async () => {
    try {
      const formDataWithImage = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'companyImage') {
          formDataWithImage.append('companyImage', value);
        } else {
          formDataWithImage.append(key, value);
        }
      });

      const response = await fetch("http://localhost/Psi/backend/routes.php/admin", {
        method: "POST",
        body: formDataWithImage,
      });

      if (!response.ok) {
        console.error("Erro na solicitação:", response.statusText);
        // Lógica para lidar com o erro
        return;
      }

      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error("Erro na solicitação:", error.message);
    }
    navigate("/sign-in-admin");
  }, [formData, navigate]);


  const onBackButtonClick = useCallback(() => {
    navigate("/pt-main");
  }, [navigate]);

  return (
    <div className={styles.signUpAdmin}>
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
          <b className={styles.signUpYour}>Atribuir um Administrador</b>
          <div className={styles.welcomeEnterYour}>
            Bem-vindo! Insira os detalhes do seu administrador:
          </div>
        </div>

        <input
          className={styles.admin_name}
          name="admin_name"
          id="admin_name"
          placeholder="Nome"
          type="text"
          onChange={handleInputChange}
          value={formData.admin_name}
        />

        <input
          className={styles.email}
          name="email"
          id="email"
          placeholder="Email"
          type="email"
          onChange={handleInputChange}
          value={formData.email}
        />

        <input
          className={styles.password}
          name="password"
          id="password"
          placeholder="Palavra-passe"
          type="password"
          onChange={handleInputChange}
          value={formData.password}
        />

        <input
          className={styles.companyName}
          name="companyname"
          id="companyname"
          placeholder="Nome da Empresa"
          type="text"
          onChange={handleInputChange}
          value={formData.companyname}
        />

        <select
          className={styles.gender}
          required={true}
          name="gender"
          id="gender"
          onChange={handleInputChange}
          value={formData.gender}
        >
          <option value="Male">Masculino</option>
          <option value="Female">Feminino</option>
          <option value="Other">Outro</option>
        </select>
        <input
          className={styles.employeesNumber}
          name="age"
          id="age"
          placeholder="Idade"
          type="integer"
          onChange={handleInputChange}
          value={formData.age}
        />
        <input
          className={styles.phone}
          name="phone"
          id="phone"
          placeholder="Telefone"
          type="integer"
          onChange={handleInputChange}
          value={formData.phone}
        />

        <input
          className={styles.address}
          name="address"
          id="address"
          placeholder="Morada"
          type="text"
          onChange={handleInputChange}
          value={formData.address}
        />

        <div className={styles.addYourCompany}>Adicione a sua Imagem de Perfil</div>

        <label
          htmlFor="fileInput"
          className={styles.iconCamera}
          onClick={handleImageClick}
        >
          <img
            loading="eager"
            alt=""
            src="/camera@3x.png"
            className={styles.img}
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
      </div>
      <div className={styles.buttonlargeprimary} onClick={onSignUpClick}>
        <b className={styles.button}>Registar</b>
      </div>

      <div className={styles.byCreatingAnAccountMeansY} />
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
  );
};

export default SignUpAdmin;


        