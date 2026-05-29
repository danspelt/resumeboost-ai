import SiteHeader from "@/components/SiteHeader";
import ResumeForm from "@/components/ResumeForm";

export default async function StartPage({ searchParams }) {
  const params = await searchParams;
  const canceled = params?.canceled === "1";

  return (
    <>
      <SiteHeader />
      <main className="bg-slate-50 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900">
              Build your application package
            </h1>
            <p className="mt-3 text-slate-600">
              Paste your resume and the job posting. We save your draft, then send
              you to secure Stripe checkout for $29 CAD.
            </p>
          </div>
          <ResumeForm canceled={canceled} />
        </div>
      </main>
    </>
  );
}
