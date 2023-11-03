const LiHover = ({
  children,
  content,
}: {
  children: JSX.Element;
  content: string;
}) => {
  return (
    <a
      className="dark:text-neutral-400 hover:text-light-1 py-1  group transition-colors flex items-center max-w-min li-hover"
      href={`#${content.toLowerCase()}`}
    >
      {children}
      {content}
    </a>
  );
};

export default LiHover;
