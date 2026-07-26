const LiHover = ({
  children,
  content,
  active,
}: {
  children: React.ReactNode;
  content: string;
  active?: boolean;
}) => {
  return (
    <li>
      <a
        className={`dark:text-neutral-400 hover:text-light-1 py-1  group transition-colors flex items-center max-w-min li-hover ${
          active ? "text-light-1" : ""
        }`}
        href={`#${content.toLowerCase()}`}
      >
        {children}
        {content}
      </a>
    </li>
  );
};

export default LiHover;
