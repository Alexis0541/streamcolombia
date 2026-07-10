export const metadata = {
  title: 'StreamColombia | IPTV Premium',
  description: 'Landing page de StreamColombia IPTV premium'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: '#0a0a1a' }}>{children}</body>
    </html>
  );
}
