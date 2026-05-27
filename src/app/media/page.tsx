import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media & Brand Assets | Arcon Solutions Inc.",
  description: "Download Arcon Solutions brand assets, logos, and guidelines.",
};

export default function MediaPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#6b1e98] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1
            className="text-4xl sm:text-5xl font-black uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            Media
          </h1>
          <p className="text-purple-200">Brand assets and guidelines for partners and press.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-8"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            Brand Assets
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            The following assets are available for press and partner use. Please contact us if you
            need additional formats or have questions about proper brand usage.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Primary Logo (PNG)", file: "/images/arcon-logo.png" },
              { label: "Logo on Dark Background (PNG)", file: "/images/footer-logo.png" },
            ].map((asset) => (
              <div
                key={asset.label}
                className="border border-gray-200 rounded-lg p-6 flex flex-col gap-4"
              >
                <div className="h-24 bg-gray-50 rounded flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset.file} alt={asset.label} className="max-h-full max-w-full object-contain p-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{asset.label}</span>
                  <a
                    href={asset.file}
                    download
                    className="text-xs px-3 py-1.5 bg-[#6b1e98] text-white rounded hover:bg-[#4e1570] transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3">Brand Colors</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded" style={{ background: "#6b1e98" }} />
                <div>
                  <p className="text-sm font-medium text-gray-700">Primary Purple</p>
                  <p className="text-xs text-gray-400">#6b1e98</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded" style={{ background: "#2d2a26" }} />
                <div>
                  <p className="text-sm font-medium text-gray-700">Dark Charcoal</p>
                  <p className="text-xs text-gray-400">#2d2a26</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-600 text-sm">
              For additional assets or media inquiries, please{" "}
              <Link href="/contact" className="text-[#6b1e98] hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
