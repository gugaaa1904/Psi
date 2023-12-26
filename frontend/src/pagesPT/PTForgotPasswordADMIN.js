import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PTForgotPasswordADMIN.module.css";

const ForgotPasswordADMIN = () => {
  const navigate = useNavigate();

  const onBackToSignInClick = useCallback(() => {
    navigate("/pt-sign-in-admin");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/pt-sign-up-admin");
  }, [navigate]);

  return (
    <div className={styles.forgotPasswordAdmin}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
        </div>
        <div className={styles.header}>
          <b className={styles.resetYourPassword}>Redefina sua senha</b>
          <div className={styles.enterTheEmail}>
            Digite o endereço de e-mail associado à sua conta e nós enviaremos
            um link para redefinir sua senha.
          </div>
        </div>
        <input
          className={styles.resetPassword}
          name="New Password"
          id="newpassword"
          placeholder="Insira a sua nova palavra-passe"
          type="text"
        />
        <div className={styles.buttonContinue}>
          <b className={styles.button}>Continuar</b>
        </div>
        <div className={styles.backToSignIn} onClick={onBackToSignInClick}>
          <b className={styles.backToSign}>Voltar para Iniciar Sessão</b>
        </div>
        <div className={styles.dontHaveAnContainer}>
          <span>Não tem uma conta?</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <b className={styles.signUp} onClick={onSignUpTextClick}>
          Registar
        </b>
      </div>
    </div>
  );
};

export default ForgotPasswordADMIN;
