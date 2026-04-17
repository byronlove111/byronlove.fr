interface DemoProps {
  children: React.ReactNode;
  label?: string;
}

export default function Demo({ children, label = "Interactive demo" }: DemoProps) {
  return (
    <div className="my-6 rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        <span className="text-xs text-gray-400 ml-1">{label}</span>
      </div>
      <div className="p-6 bg-white flex items-center justify-center min-h-[160px]">
        {children}
      </div>
    </div>
  );
}
