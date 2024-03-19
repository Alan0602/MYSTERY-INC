import { QrScanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styles from "./QrScanner.module.css";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

import qr from "./assets/QR.png";
import close from "./assets/Close.png";

const QRScanner = () => {
  const [result, setResult] = useState("");
  const [isNotScanning, setIsNotScanning] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      // Check for camera permission
      const permissionStatus = await navigator.permissions.query({
        name: "camera" as any,
      });

      // Handle the permission status
      if (permissionStatus.state === "granted") {
        // Permission already granted, start scanning
        setIsNotScanning(false);
      } else if (permissionStatus.state === "prompt") {
        // Permission is not granted yet, request access by trying to use the camera
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          // If successful, stop the stream and start scanning
          stream.getTracks().forEach((track) => track.stop());
          setIsNotScanning(false);
        } catch (error) {
          // Error or permission denied
          console.error("Camera access denied:", error);
          toast.error("Camera permission denied");
        }
      } else {
        // Permission is denied
        toast.error("Camera access is required to scan QR codes.");
      }
    } catch (error) {
      console.error("Error checking camera permission:", error);
      toast.error("Error checking camera permission");
    }

    setIsNotScanning(false);
    setTimeout(() => {
      setIsNotScanning(true);
    }, 15000);
  };

  const fetchProgress = async () => {
    const session = await supabase.auth.getSession();
    if (session.data.session?.user.id) {
      let { data: clue, error } = await supabase
        .from("clue")
        .select("*")
        // Filters
        .eq("id", session.data.session.user.id);
      if (error) {
        throw error.message;
      } else if (clue) {
        setCurrentProgress(clue[0]?.progress! || 0);
      }
    }
  };

  useEffect(() => {
    fetchProgress();
  });

  const fetchUser = async (num: string) => {
    const session = await supabase.auth.getSession();
    if (session.data.session?.user.id) {
      let { data: clue, error } = await supabase
        .from("clue")
        .select("*")
        // Filters
        .eq("id", session.data.session.user.id);
      if (error) {
        throw error.message;
      } else if (clue) {
		  if (clue.length === 0) {
			console.log("Creating new clue");
          if (num === "25638") {
            const { data: newClue, error: insertError } = await supabase
              .from("clue")
              .insert([
                {
                  id: session.data.session.user.id,
                  clue_id: "25638",
                  progress: 1,
                  data: session.data.session.user.user_metadata,
                },
              ])
              .select();
            if (newClue) {
              navigate("/25638");
              return newClue;
            } else if (insertError) {
              throw insertError.message;
            }
          } else {
            toast.error("Not the first clue");
          }
        } else if (clue[0].progress === 1 && num === "45856") {
          const { data: newClue, error: insertError } = await supabase
            .from("clue")
            .update({
              clue_id: "45856",
              progress: 2,
            })
            .eq("id", session.data.session.user.id)
            .select();
          if (newClue) {
            navigate("/45856");
            return newClue;
          } else if (insertError) {
            throw insertError.message;
          }
        } else if (clue[0].progress === 2 && num === "22258963") {
          const { data: newClue, error: insertError } = await supabase
            .from("clue")
            .update({
              clue_id: "22258963",
              progress: 3,
            })
            .eq("id", session.data.session.user.id)
            .select();
          if (newClue) {
            navigate("/22258963");
            return newClue;
          } else if (insertError) {
            throw insertError.message;
          }
        } else if (clue[0].progress === 3 && num === "1012578") {
          const { data: newClue, error: insertError } = await supabase
            .from("clue")
            .update({
              clue_id: "1012578",
              progress: 4,
            })
            .eq("id", session.data.session.user.id)
            .select();
          if (newClue) {
            navigate("/1012578");
            return newClue;
          } else if (insertError) {
            throw insertError.message;
          }
        } else if (clue[0].progress === 4 && num === "30125789653") {
          const { data: newClue, error: insertError } = await supabase
            .from("clue")
            .update({
              clue_id: "30125789653",
              progress: 5,
            })
            .eq("id", session.data.session.user.id)
            .select();
          if (newClue) {
            navigate("/30125789653");
            return newClue;
          } else if (insertError) {
            throw insertError.message;
          }
        } else if (clue[0].progress === 5 && num === "253") {
          const { data: newClue, error: insertError } = await supabase
            .from("clue")
            .update({
              clue_id: "253",
              progress: 6,
            })
            .eq("id", session.data.session.user.id)
            .select();
          if (newClue) {
            navigate("/253");
            return newClue;
          } else if (insertError) {
            throw insertError.message;
          }
        } else if (clue[0].progress === 6 && num === "21220922") {
          const { data: newClue, error: insertError } = await supabase
            .from("clue")
            .update({
              clue_id: "Last clue",
              progress: 7,
            })
            .eq("id", session.data.session.user.id)
            .select();
          if (newClue) {
            navigate("/sucessreached");
            return newClue;
          } else if (insertError) {
            throw insertError.message;
          }
        } else if (num === "2563") {
          throw "You have found a fake QR code";
        } else {
          throw "You have already solved this clue or you are scanning the clue in wrong order";
        }
      }
    } else {
      toast.error("Please sign in first");
      navigate("/login");
    }
  };

  const handleDecode = () => {
    setIsNotScanning(true);
    if (result) {
      const match = result.match(/(\d+)(https?:\/\/\S+)/);
      if (match && match.length >= 3) {
        const number = match[1];
        fetchUser(number)
          .then(() => {
            toast.success("Scan Success!");
          })
          .catch((error) => {
            toast.error(error);
          });
      }
    }
  };

  useEffect(() => {
    handleDecode();
  }, [result]);

  return (
    <div className={styles.scannerContainer}>
      {currentProgress >= 0 && (
        <div
          onClick={() => {
            navigate("/");
          }}
          className={styles.NavigateButton}
        >
          0
        </div>
      )}
      {currentProgress >= 1 && (
        <div
          onClick={() => {
            navigate("/25638");
          }}
          className={styles.NavigateButton}
        >
          1
        </div>
      )}
      {currentProgress >= 2 && (
        <div
          onClick={() => {
            navigate("/45856");
          }}
          className={styles.NavigateButton}
        >
          2
        </div>
      )}
      {currentProgress >= 3 && (
        <div
          onClick={() => {
            navigate("/22258963");
          }}
          className={styles.NavigateButton}
        >
          3
        </div>
      )}
      {currentProgress >= 4 && (
        <div
          onClick={() => {
            navigate("/1012578");
          }}
          className={styles.NavigateButton}
        >
          4
        </div>
      )}
      {currentProgress >= 5 && (
        <div
          onClick={() => {
            navigate("/30125789653");
          }}
          className={styles.NavigateButton}
        >
          5
        </div>
      )}
      {currentProgress >= 6 && (
        <div
          onClick={() => {
            navigate("/253");
          }}
          className={styles.NavigateButton}
        >
          6
        </div>
      )}
      {currentProgress >= 7 && (
        <div
          onClick={() => {
            navigate("/21220922");
          }}
          className={styles.NavigateButton}
        >
          7
        </div>
      )}
      {!isNotScanning && (
        <QrScanner
          onDecode={(result) => {
            console.log("QR Code Result:", result);
            setResult(result);
            handleDecode();
          }}
          onError={(error) => toast.error(error?.message)}
          stopDecoding={isNotScanning}
        />
      )}
      {isNotScanning ? (
        <div onClick={handleClick} className={styles.Outline}>
          <img src={qr} alt="" />
        </div>
      ) : (
        <div
          onClick={() => {
            setIsNotScanning(true);
          }}
          className={styles.Outline}
        >
          <img src={close} alt="" />
        </div>
      )}
    </div>
  );
};

export default QRScanner;
