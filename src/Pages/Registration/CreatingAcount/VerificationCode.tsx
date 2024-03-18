type Props = {};

export const VerificationCode = (_props: Props) => {
  return (
    <div>
      <div>
        <h1>00:42</h1>
        <p>Type the verification code we’ve sent you</p>
      </div>
      <div>
        <input type="text" placeholder="7" />
        <input type="text" placeholder="7" />
        <input type="text" placeholder="7" />
        <input type="text" placeholder="7" />
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button></button>
        <button>0</button>
        <button>x</button>
      </div>
      <button>Send Again</button>
    </div>
  );
};
