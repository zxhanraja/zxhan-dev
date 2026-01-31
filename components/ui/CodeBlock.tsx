import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'go' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-10 md:opacity-20 md:group-hover:opacity-40 transition duration-1000" />

      {/* Main container wrapper to handle button pinning */}
      <div className="relative bg-zinc-950 rounded-lg border border-zinc-800 overflow-hidden">
        {/* Copy Button - Pinned to the top-right corner of the container, not the scrollable content */}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700 border border-zinc-700/50 transition-all opacity-0 group-hover:opacity-100 z-20 shadow-xl"
          title="Copy code"
        >
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>

        {/* Scrollable content area */}
        <div className="p-6 overflow-x-auto font-mono text-sm text-zinc-100 custom-scrollbar">
          <pre className="text-zinc-100">
            <code className={`language-${language} text-zinc-100`}>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;