import { createContext, useEffect } from "react";
import { useState } from "react";
import netlifyIdentity from "netlify-identity-widget";
import Swal from "sweetalert2";
//login min modal
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  useEffect(() => {
    netlifyIdentity.setLocale("fr");

    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      Toast.fire({
        icon: "success",
        title: "Connexion réussie",
      });
      console.log("login event");
    });

    //set user session to null when he logged out
    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });
    netlifyIdentity.on("init", (user) => {
      setUser(user);
      setAuthReady(true);
      console.log("init event");
    });
    //init netlify identity connection
    netlifyIdentity.init();
    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => {
    netlifyIdentity.open("login"); //open model (login)
  };
  const signUp = () => {
    netlifyIdentity.open("signup");
  };
  const logout = () => {
    {
      Swal.fire({
        icon: "question",
        title: "Etes-vous certain de vouloir déconnecter ?",
        showCancelButton: true,
        confirmButtonText: "Oui",
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deconnecté", "", "success");
          netlifyIdentity.logout();
        }
      });
    }
  };

  const context = { user, login, logout, signUp, authReady };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
export default AuthContext;
