export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} Ebubekir Yilmaz
        </p>
      </div>
    </footer>
  );
}
