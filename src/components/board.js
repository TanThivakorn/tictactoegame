"use client";

import Square from "@/components/square";

export default function Board() {
  return (
    <div className="board">
      <div>
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div>
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div>
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </div>
  );
}
