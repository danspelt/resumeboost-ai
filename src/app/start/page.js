import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ResumeForm from "@/components/ResumeForm";

export const metadata = {
  title: "Start your application package",
};

export default async function StartPage({ searchParams }) {
  const params = await searchParams;
  const canceled = params?.canceled === "1";

  return (
    <>
      <SiteHeader />
      <main className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="font-display text-3xl font-bold sm:text-4xl">
              Almost there
            </h1>
            <p className="mt-3 text-slate-400">
              Paste your resume and the job posting. We&apos;ll tailor everything before
              you pay.
            </p>
          </div>
          <ResumeForm canceled={canceled} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
