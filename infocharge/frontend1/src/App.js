import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ChooseThe3TypesUser from "./pages/ChooseThe3TypesUser";
import VerifyEmailHR from "./pages/VerifyEmailHR";
import SignUpCompany from "./pages/SignUpCompany";
import MAX from "./pages/MAX";
import MIN from "./pages/MIN";
import MinMaxPowerAchived from "./pages/MinMaxPowerAchived";
import AverageCostIn from "./pages/AverageCostIn";
import AverageEnergyConsumptionIn from "./pages/AverageEnergyConsumptionIn";
import GeneralConsuming from "./pages/GeneralConsuming";
import FullReportsCollaborators from "./pages/FullReportsCollaborators";
import CollaboratorInfo from "./pages/CollaboratorInfo";
import SignInCollaborator2 from "./pages/SignInCollaborator2";
import SignInAdmin2 from "./pages/SignInAdmin2";
import ForgotPasswordADMIN from "./pages/ForgotPasswordADMIN";
import ReportsCollaborator from "./pages/ReportsCollaborator";
import RemoveUser from "./pages/RemoveUser";
import AddUser from "./pages/AddUser";
import HelpHR from "./pages/HelpHR";
import SettingsHR from "./pages/SettingsHR";
import HelpADMIN from "./pages/HelpADMIN";
import SettingsADMIN from "./pages/SettingsADMIN";
import RemoveColaborator from "./pages/RemoveColaborator";
import ProfileHR from "./pages/ProfileHR";
import AddColaborator from "./pages/AddColaborator";
import ForgotPasswordHR from "./pages/ForgotPasswordHR";
import SignInHR from "./pages/SignInHR";
import ProfileCollaborator from "./pages/ProfileCollaborator";
import Timeline from "./pages/Timeline";
import HelpCollaborator from "./pages/HelpCollaborator";
import SettingsCollaborator from "./pages/SettingsCollaborator";
import VariationBasedOnContract from "./pages/VariationBasedOnContract";
import Activity from "./pages/Activity";
import Dashboard from "./pages/Dashboard";
import ForgotPasswordCollaborator from "./pages/ForgotPasswordCollaborator";
import CompanyInfo from "./pages/CompanyInfo";
import ProfileADMIN from "./pages/ProfileADMIN";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/verify-email-hr":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-company":
        title = "";
        metaDescription = "";
        break;
      case "/max":
        title = "";
        metaDescription = "";
        break;
      case "/min":
        title = "";
        metaDescription = "";
        break;
      case "/minmax-power-achived":
        title = "";
        metaDescription = "";
        break;
      case "/average-cost-in":
        title = "";
        metaDescription = "";
        break;
      case "/average-energy-consumption-in-kw":
        title = "";
        metaDescription = "";
        break;
      case "/general-consuming":
        title = "";
        metaDescription = "";
        break;
      case "/full-reports-collaborators":
        title = "";
        metaDescription = "";
        break;
      case "/collaborator-info":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-collaborator-2":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-admin-2":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-admin":
        title = "";
        metaDescription = "";
        break;
      case "/reports-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/remove-user":
        title = "";
        metaDescription = "";
        break;
      case "/add-user":
        title = "";
        metaDescription = "";
        break;
      case "/help-hr":
        title = "";
        metaDescription = "";
        break;
      case "/settings-hr":
        title = "";
        metaDescription = "";
        break;
      case "/help-admin":
        title = "";
        metaDescription = "";
        break;
      case "/settings-admin":
        title = "";
        metaDescription = "";
        break;
      case "/remove-colaborator":
        title = "";
        metaDescription = "";
        break;
      case "/profile-hr":
        title = "";
        metaDescription = "";
        break;
      case "/add-colaborator":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-hr":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-hr":
        title = "";
        metaDescription = "";
        break;
      case "/profile-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/timeline":
        title = "";
        metaDescription = "";
        break;
      case "/help-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/settings-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/variation-based-on-contract":
        title = "";
        metaDescription = "";
        break;
      case "/activity":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/company-info":
        title = "";
        metaDescription = "";
        break;
      case "/profile-admin":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ChooseThe3TypesUser />} />
      <Route path="/verify-email-hr" element={<VerifyEmailHR />} />
      <Route path="/sign-up-company" element={<SignUpCompany />} />
      <Route path="/max" element={<MAX />} />
      <Route path="/min" element={<MIN />} />
      <Route path="/minmax-power-achived" element={<MinMaxPowerAchived />} />
      <Route path="/average-cost-in" element={<AverageCostIn />} />
      <Route
        path="/average-energy-consumption-in-kw"
        element={<AverageEnergyConsumptionIn />}
      />
      <Route path="/general-consuming" element={<GeneralConsuming />} />
      <Route
        path="/full-reports-collaborators"
        element={<FullReportsCollaborators />}
      />
      <Route path="/collaborator-info" element={<CollaboratorInfo />} />
      <Route path="/sign-in-collaborator-2" element={<SignInCollaborator2 />} />
      <Route path="/sign-in-admin-2" element={<SignInAdmin2 />} />
      <Route path="/forgot-password-admin" element={<ForgotPasswordADMIN />} />
      <Route path="/reports-collaborator" element={<ReportsCollaborator />} />
      <Route path="/remove-user" element={<RemoveUser />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/help-hr" element={<HelpHR />} />
      <Route path="/settings-hr" element={<SettingsHR />} />
      <Route path="/help-admin" element={<HelpADMIN />} />
      <Route path="/settings-admin" element={<SettingsADMIN />} />
      <Route path="/remove-colaborator" element={<RemoveColaborator />} />
      <Route path="/profile-hr" element={<ProfileHR />} />
      <Route path="/add-colaborator" element={<AddColaborator />} />
      <Route path="/forgot-password-hr" element={<ForgotPasswordHR />} />
      <Route path="/sign-in-hr" element={<SignInHR />} />
      <Route path="/profile-collaborator" element={<ProfileCollaborator />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/help-collaborator" element={<HelpCollaborator />} />
      <Route path="/settings-collaborator" element={<SettingsCollaborator />} />
      <Route
        path="/variation-based-on-contract"
        element={<VariationBasedOnContract />}
      />
      <Route path="/activity" element={<Activity />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/forgot-password-collaborator"
        element={<ForgotPasswordCollaborator />}
      />
      <Route path="/company-info" element={<CompanyInfo />} />
      <Route path="/profile-admin" element={<ProfileADMIN />} />
    </Routes>
  );
}
export default App;
