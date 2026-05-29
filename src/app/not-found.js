import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PrimaryButton } from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="font-display text-4xl font-bold">404</h1>
        <p className="mt-3 max-w-md text-slate-400">
          That page doesn&apos;t exist, or your result link may have expired.
        </p>
        <PrimaryButton href="/" className="mt-8">
          Back home
        </PrimaryButton>
      </main>
      <SiteFooter />
    </>
  );
}
