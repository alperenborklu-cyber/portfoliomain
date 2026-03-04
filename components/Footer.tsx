export default function Footer() {
  const currentYear = new Date().getFullYear(); // Yılı otomatik günceller (2026 vs)

  return (
    <footer className="w-full bg-black py-8 border-t border-white/10 text-center">
      <div className="container mx-auto px-6 text-gray-400 text-sm">
        <p>&copy; {currentYear} Alperen Börklü. All rights reserved.</p>
      </div>
    </footer>
  );
}