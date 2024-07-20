import Link from "next/link";
import { useEffect } from "react";

export function Footer() {
  useEffect(() => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <footer className="text-secondary-foreground bg-background/50 h-8 w-full text-center">
      <div className="border-input flex items-center justify-center border-t px-4 py-2">
        <h3 className="text-sm font-semibold">
          Made by <a href="https://instagram.com/adzzakiii" className="hover:underline">Zaki</a> | &copy; <span id="year"></span> All Rights Reserved
        </h3>
      </div>
    </footer>
  );
}
