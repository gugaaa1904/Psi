import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PTSignInAdmin.module.css";

const SignInAdmin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onForgotPasswordContainerClick = useCallback(() => {
    navigate("/pt-forgot-password-admin");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/pt-forgot-password-admin");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/pt-main");
  }, [navigate]);

const onButtonLargePrimaryContainerClick = async () => {
  try {
    const response = await fetch(
      "http://localhost/Psi/backend/services/loginadmin.php",
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
    //const data = await response.text();

    
    if (data.status === "success") {
      sessionStorage.setItem('admin_id', JSON.stringify(data.id));
      sessionStorage.setItem('company_id', JSON.stringify(data.company));
      // Credenciais válidas, redirecionar para company-info
      navigate("/company-info");
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

  
  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up-admin");
  }, [navigate]);

  const onSignUpCompanyClick = useCallback(() => {
    navigate("/sign-up-company");
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
      <div className={styles.signInAdmin}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
          </div>
          <div className={styles.header}>
            <b className={styles.tittle}>Iniciar Sessão Administrador</b>
            <div className={styles.body}>
              Bem-vindo de volta ! Por favor insira os seus dados
            </div>
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
              placeholder="Palavra passe"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className={styles.forgotPassword}
            onClick={onForgotPasswordContainerClick}
          >
            <b
              className={styles.forgotPassword1}
              onClick={onForgotPasswordTextClick}
            >
              Esqueceu-se da palavra passe?
            </b>
          </div>
          <div
            className={styles.buttonlargeprimary}
            onClick={onButtonLargePrimaryContainerClick}
          >
            <b className={styles.button}>Iniciar Sessão</b>
          </div>
          <b className={styles.signUp} onClick={onSignUpTextClick}>
            Registar
          </b>
          <div className={styles.dontHaveAnContainer}>
            <span>Não tem uma conta?</span>
            <span className={styles.span}>{` `}</span>
          </div>

          <b className={styles.signUpCompany1} onClick={onSignUpCompanyClick}>
            Registar Empresa
          </b>
          <div className={styles.dontHaveAContainer}>
            <span>Não tem uma empresa?</span>
            <span className={styles.span}>{` `}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInAdmin;
