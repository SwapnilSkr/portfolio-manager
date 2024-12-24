export default function Loading({ className }: { className?: string }) {
  return (
    <div
      className={`${className} flex justify-center items-center w-full h-screen`}
    >
      <div className={` flex flex-row gap-2`}>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
}
