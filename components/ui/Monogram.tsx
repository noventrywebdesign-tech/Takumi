type Props = { className?: string };

/** Hanko-style stamp mark using 匠 ("Takumi" — master craftsman), the word the restaurant is named for. */
export default function Monogram({ className = "h-10 w-10" }: Props) {
  return (
    <span className={`stamp-ring relative flex shrink-0 items-center justify-center ${className}`}>
      <span className="font-jp text-[1.15em] leading-none">匠</span>
    </span>
  );
}
