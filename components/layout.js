import Head from "next/head";
export default function Layout({ children, title }) {
  return (
    <div className="bg-slate-100 pb-10">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="container mx-auto pt-8 min-h-screen">{children}</main>
    </div>
  );
}
