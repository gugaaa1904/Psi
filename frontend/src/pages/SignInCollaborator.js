import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useId } from "react";
import styles from "./SignInCollaborator.module.css";


const SignInCollaborator = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonLargePrimaryContainerClick = async () => {
  try {
    const response = await fetch(
      "http://localhost/Psi/backend/services/logincollaborator.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    )
      
    const data = await response.json();
    console.log(data);
        
    if (data.status === "success") {
      setId(data.id);
      // Credenciais válidas, redirecionar para company-info
      navigate("/dashboard");
    } else {
          // Se a resposta não for bem-sucedida, mostrar o erro
      const errorMessage = data.error || "Erro desconhecido";
      console.error("Credenciais inválidas. Erro:", errorMessage);
    }
  } catch (error) {
        // Se ocorrer um erro durante a solicitação
    console.error("Erro ao processar a solicitação:", error);
  }
}

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgot-password-collaborator");
  }, [navigate]);

  return (
    <>
      <div>
        <img
          className={styles.backButtonIcon}
          alt=""
          src="/back-button.svg"
          onClick={onBackButtonClick}
        />
      </div>
      <div className={styles.signInCollaborator}>
        <div className={styles.content}>
          <div
            className={styles.buttonlargeprimary}
            onClick={onButtonLargePrimaryContainerClick}
          >
            <b className={styles.button}>Sign In</b>
          </div>
          <div className={styles.forgotPassword}>
            <b
              className={styles.forgotPassword1}
              onClick={onForgotPasswordTextClick}
            >
              Forgot Password?
            </b>
          </div>
          <div className={styles.input}>
            <input
              className={styles.email}
              name="email"
              id="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.password}
              name="password"
              id="password"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.header}>
            <b className={styles.tittle1}>Sign In to your Account</b>
            <div className={styles.body1}>
              Welcome back! please enter your detail
            </div>
          </div>
          <div className={styles.logo}>
            <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInCollaborator;
SignInCollaborator.propTypes = {
  setId: PropTypes.func.isRequired
}
