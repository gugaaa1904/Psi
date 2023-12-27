import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PTSignInCollaborator.module.css";


const SignInCollaborator = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onBackButtonClick = useCallback(() => {
    navigate("/pt-main");
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
    console.log(data.id);
        
    if (data.status === "success") {
      sessionStorage.setItem('collaborator_id', JSON.stringify(data.id));
      // Credenciais válidas, redirecionar para company-info
      navigate("/pt-dashboard");
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
    navigate("/pt-forgot-password-collaborator");
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
            <b className={styles.button}>Iniciar Sessão</b>
          </div>
          <div className={styles.forgotPassword}>
            <b
              className={styles.forgotPassword1}
              onClick={onForgotPasswordTextClick}
            >
              Esqueceu-se da Palavra-passe?
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
              placeholder="Palavra-passe"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.header}>
            <b className={styles.tittle1}>Inicie sessão na sua conta</b>
            <div className={styles.body1}>
              Bem-vindo de volta! Por favor, insira seus detalhes:
            </div>
          </div>
          <div className={styles.logo}>
            <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInCollaborator;
