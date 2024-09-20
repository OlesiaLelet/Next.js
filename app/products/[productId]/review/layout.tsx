export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <header style={{backgroundColor: "grey", height: 50}}></header>
          {children}
          <footer style={{ height: 50}}>children here</footer>
        </body>
      </html>
    );
  }