import { Code, Image as ImageIcon, Shapes, TerminalSquare, Text as TextIcon } from 'lucide-react';
import React, { useState } from 'react';

const Toolbar = () => {
    const [activeTool, setActiveTool] = useState<string | null>(null);

    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/40 shadow-lg rounded-xl px-6 py-5 flex gap-4 border border-gray-200">
            <button
                onClick={() => setActiveTool((prev) => (prev === 'text' ? null : 'text'))}
                className={`transform transition-transform duration-200 ease-out active:scale-90 flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium ${
                    activeTool === 'text' ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
                <TextIcon size={20} color={activeTool === 'text' ? '#1f2937' : '#9ca3af'} />
                Text
            </button>

            <button
                onClick={() => setActiveTool((prev) => (prev === 'code' ? null : 'code'))}
                className={`transform transition-transform duration-200 ease-out active:scale-90 flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium ${
                    activeTool === 'code' ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
                <Code size={20} color={activeTool === 'code' ? '#1f2937' : '#9ca3af'} />
                Code
            </button>

            <button
                onClick={() => setActiveTool((prev) => (prev === 'terminal' ? null : 'terminal'))}
                className={`transform transition-transform duration-200 ease-out active:scale-90 flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium ${
                    activeTool === 'terminal' ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
                <TerminalSquare size={20} color={activeTool === 'terminal' ? '#1f2937' : '#9ca3af'} />
                Terminal
            </button>

            <button
                onClick={() => setActiveTool((prev) => (prev === 'image' ? null : 'image'))}
                className={`transform transition-transform duration-200 ease-out active:scale-90 flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium ${
                    activeTool === 'image' ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
                <ImageIcon size={20} color={activeTool === 'image' ? '#1f2937' : '#9ca3af'} />
                Image
            </button>

            <button
                onClick={() => setActiveTool((prev) => (prev === 'shape' ? null : 'shape'))}
                className={`transform transition-transform duration-200 ease-out active:scale-90 flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium ${
                    activeTool === 'shape' ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
                <Shapes size={20} color={activeTool === 'shape' ? '#1f2937' : '#9ca3af'} />
                Shape
            </button>
        </div>
    );
};

export default Toolbar;
