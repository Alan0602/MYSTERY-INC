type Props = {};

export const Mobile = (_props: Props) => {
  return (
    <div>
      <div>
        {" "}
        <h1>My Mobile</h1>
        <p>
          Please enter your valid phone number. We will send you a 4-digit code
          to verify your account.{" "}
        </p>
      </div>
      <div>
        <input type="text" placeholder="+91"/>
        <input type="text" placeholder="7990443754"/>
      </div>
      <button>Continue</button>
    </div>
  );
};
