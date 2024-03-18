import { Navbar } from "../../Components/Navbar/Navbar";
import { Filtersvg, Searchsvg } from "../../assets/svg";
import styles from "./Message.module.css";

type Props = {};

interface MessageData {
  image: string;
  name: string;
  message: string;
  LastMsgtime: string; // Assuming this is a time string like "HH:MM AM/PM"
  unread: number;
}

export const Message: React.FC<Props> = (_props) => {
  const data: MessageData[] = [
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 1,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 0,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 0,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 5,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 5,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 5,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 1,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 0,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 30,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "13:45 AM",
      unread: 5,
    },
  ];

const truncateMessage = (message: string, maxChars: number = 15): string => {
  if (message.length > maxChars) {
    return `${message.slice(0, maxChars - 3)}...`; // Subtract 3 for the ellipsis
  }
  return message;
};

const getTimeDifference = (lastMsgTime: string): string => {
  const currentTime = new Date();
  const [time, modifier] = lastMsgTime.split(" ");
  let [hours, minutes] = time.split(":").map((num) => parseInt(num, 10));

  // Convert to 24-hour format
  if (modifier === "PM" && hours < 12) {
    hours += 12;
  } else if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  // Assuming the message date is today for simplicity
  // Adjust as needed for your application's logic
  const datePortion = `${currentTime.getFullYear()}-${String(
    currentTime.getMonth() + 1
  ).padStart(2, "0")}-${String(currentTime.getDate()).padStart(2, "0")}`;
  const messageDateTime = new Date(
    `${datePortion} ${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:00`
  );

  // Ensure the comparison is done in the same timezone
  const difference = currentTime.getTime() - messageDateTime.getTime();
  const diffMinutes = Math.floor(difference / 60000);
  const diffHours = Math.floor(diffMinutes / 60);

  if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffMinutes > 0)
    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  return "Just now";
};

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Header}>
          <h1>Messages</h1>
          <button>
            <Filtersvg />
          </button>
        </div>
        <div className={styles.SearchBox}>
          <Searchsvg />
          <input type="text" placeholder="search" />
        </div>
        <div className={styles.BodyWrapper}>
          <h3>Messages</h3>
          <div className={styles.ContentsWrap}>
            {data.map(({ image, name, message, LastMsgtime, unread }) => (
              <div className={styles.Individual}>
                <div className={styles.Leftside}>
                  <img src={image} alt="" />
                  <div>
                    <h3>{name}</h3>
                    <p>{truncateMessage(message)}</p>
                  </div>
                </div>
                <div className={styles.TimeAndUnread}>
                  <p>{getTimeDifference(LastMsgtime)}</p>
                  {unread > 0 && <p className={styles.unread}>{unread}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};
