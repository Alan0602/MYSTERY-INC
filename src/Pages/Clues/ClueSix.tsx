import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import QRScanner from "../QRScanner";
import styles from "./Clue.module.css";


export const ClueSix = () => {
	const navigate = useNavigate();

    const fetchUser = async () => {
        const session = await supabase.auth.getSession();
        if (session.data.session?.user.id) {
            let { data: clue, error } = await supabase
                .from("clue")
                .select("*")
                // Filters
                .eq("id", session.data.session.user.id);
            if (error) {
                throw error.message;
            }
            const progress = clue?.[0]?.progress;
            if (progress < 6) {
                console.log(progress);
                navigate("/2563");
                return;
            }
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);
  return (
    <div className={styles.Clue6}>
   
      <QRScanner />
    </div>
  );
};
