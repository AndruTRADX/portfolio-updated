interface ButtonType {
  text: string
  state?: boolean
  textState?: string
}


const Button = ({ text, state, textState }: ButtonType) => {
  return (
    <button
      type="submit"
      className="flex justify-center items-center relative rounded-md cursor-pointer w-fit outline-none font-medium shadow-md shadow-dark-0 group"
    >
      <div className="relative bg-dark-2 px-7 py-2.5 rounded text-light-2 group-hover:text-light-1 z-20 border border-dark-3 scale-x-95 scale-y-90 text-lg transition capitalize">
        {state && textState ? textState : text}
      </div>

      <div className="absolute opacity-0 top-0 group-hover:opacity-100 w-full h-full rounded-md blinking-color transition" />
    </button>
  );
};

export default Button;
