import { SideNav } from "@repo/ui/sidenav";

export default function Page() {
  return (
    <main>
      <h1>Home</h1>
      <div className="flex flex-col mt-10">
        <a href="/web">Go to Web app</a>
        <a href="/docs">Go to Docs app</a>
      </div>
      {/* <div className="flex h-screen flex-col md:flex-row">
        <SideNav />
      </div> */}
    </main>
  );
}
