import React from 'react';

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,20,147,0.15),transparent_70%)] animate-gradient-xy opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(0,255,255,0.1),transparent_70%)] animate-gradient-xy opacity-70" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
      </div>
    </>
  );
}