export const metadata = {
  title: "Novo projeto do curso.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
