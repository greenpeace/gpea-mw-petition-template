"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import PASS_CODE from "../passcode.json";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from 'next/router';
/**
 * Provider for global context
 */


const globalContext = createContext(
  undefined
);

const GlobalContextProvider = globalContext.Provider;

export const GlobalProvider = (props) => {
  const [current, setCurrent] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(null);

  const handleLogin = (passCode) => {
    const isUser = PASS_CODE?.list.includes(passCode);

    if (isUser) {
      if (typeof window !== "undefined" && window.localStorage) {
      setLoggedIn("loggedIn");
      localStorage.setItem("gpea-project", "loggedIn");
      localStorage.setItem("gpea-project-passCode", passCode);
      return true;
      }
    }

    return false;
  };

  const userType = (passCode) => {

    let checkCode = "";

    if (typeof window !== "undefined" && window.localStorage) {
      if(passCode){
        checkCode = passCode
      } else {
        checkCode = localStorage.getItem("gpea-project-passCode") ?? null
      }
    }

    if (PASS_CODE.list.includes(checkCode) && checkCode.startsWith("RG")) {
      return "rg-user";
    } else if (PASS_CODE.list.includes(checkCode)) {
      return "user";
    }

    return "guest";
  };

  const [signUp, setSignUp] = useState({
    LeadSource: "",
    Petition_Interested_In_Arctic__c: false,
    Petition_Interested_In_Climate__c: false,
    Petition_Interested_In_Forest__c: false,
    Petition_Interested_In_Health__c: false,
    Petition_Interested_In_Oceans__c: false,
    Petition_Interested_In_Plastics__c: false,
    CampaignData1__c: "",
    CampaignData2__c: "",
    CampaignData3__c: "",
    CampaignData4__c: "",
    CampaignData5__c: "",
  });
  const router = useRouter();

  const envProjectName = process.env.projectName;
  const envProjectMarket = process.env.projectMarket;
  const themeEndpointURL = process.env.NEXT_PUBLIC_THEME_ENDPOINT;

  // Pending
  // const schemaEndpoint = `${themeEndpointURL}?q={"Market":"${envProjectMarket}"}`;

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem("gpea-project");
      setLoggedIn(storedData);
    }

    // showGlobalHeader(false);
    setCurrent("main");

    let FormObj = {};
    const selectForm = document.forms["mc-form"];
    const documentFormsArray = Array?.from(selectForm);

    if (documentFormsArray) {
      documentFormsArray.map((data) => {
        // missing default value in field
        if (!data?.defaultValue) {
          return;
        }
        // format MobilePhone and CountryCode field
        if (data?.name === "MobilePhone") {
          FormObj["MobileCountryCode"] = data?.defaultValue
            ?.split(" ")[0]
            .replace("+", "");
          FormObj["MobilePhone"] = data?.defaultValue?.split(" ")[1];
          return;
        }
        // format Birthdate field
        if (data?.name === "Birthdate") {
          FormObj["Birthdate"] = `${data?.defaultValue
            ?.split("/")[2]
            .substring(0, 4)}-01-01`;
          return;
        }
        // other normal field
        FormObj[`${data?.name}`] = data?.defaultValue ?? "";
      });
    }

    setSignUp((prevState) => ({
      ...prevState,
      ...FormObj,
    }));
  }, [router]);

  return (
    <GlobalContextProvider
      value={{
        siteName: "Greenpeace HK",
        page: current,
        signUp,
        isLoggedIn,
        setLoggedIn,
        handleLogin,
        userType,
        isRGUser: userType() === "rg-user",
      }}
    >
      {props.children}
    </GlobalContextProvider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(globalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }

  return context;
};
