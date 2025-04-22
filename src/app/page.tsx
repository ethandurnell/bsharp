'use client';

import dynamic from 'next/dynamic';
import * as React from 'react';
import '@/lib/env';

const CanvasArea = dynamic(() => import('@/components/CanvasArea'), {
  ssr: false,
});

import Toolbar from '@/components/Toolbar';

export default function HomePage() {
  return (
    <main className="relative w-screen h-screen overflow-auto bg-neutral-100">
      {/* Giant scrollable canvas area */}
      <div className="w-[5000px] h-[5000px] relative">
        <CanvasArea />
      </div>

      {/* Fixed toolbar at the bottom center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Toolbar />
      </div>
    </main>
  );
}
