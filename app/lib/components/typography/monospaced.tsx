type MonospacedProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children?: React.ReactNode;
};

export default function Monospaced({
  children,
  className,
  ...props
}: MonospacedProps) {
  return (
    <p className={`font-mono uppercase ${className ?? ""}`} {...props}>
      {children}
    </p>
  );
}
