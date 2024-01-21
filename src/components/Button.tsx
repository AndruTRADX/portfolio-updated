interface ButtonType {
  text: string;
  state?: boolean;
  textState?: string;
  onClick?: () => void;
  outline?: boolean;
}

const Button = ({ text, state, textState, onClick, outline }: ButtonType) => {
  return (
    <button
      type="submit"
      className="flex justify-center items-center relative rounded-xl cursor-pointer w-fit outline-none font-medium group"
      onClick={onClick}
    >
      <div
        className={`${
          outline
            ? "bg-dark-2 text-light-1  group-hover:bg-dark-1"
            : "bg-primary text-dark-1 border-2 border-dark-0"
        } relative px-7 py-2.5 rounded-md group-hover:text-light-1 z-20 m-[3px] text-md transition capitalize`}
      >
        {state && textState ? textState : text}
      </div>

      <div
        className={`blinking-color absolute opacity-0 top-0 group-hover:opacity-100 w-full h-full rounded-md transition`}
      />
      <div
        className={`${
          outline ? "bg-dark-3" : ""
        } absolute opacity-100 top-0 group-hover:opacity-0 w-full h-full rounded-md transition`}
      />
    </button>
  );
};

export default Button;
