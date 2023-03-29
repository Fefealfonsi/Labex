import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useProtectedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

    // utilizando ternário
    // token ? getTripDetail() : navigate('/')
  }, [navigate]);
}
