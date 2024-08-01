import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

import {
  Check,
  ArrowRight,
  SquarePen,
  SquareChartGantt,
  Blocks,
} from "lucide-react";

const features = [
  {
    name: "Advanced Entity Retrieval",
    description:
      "Leveraging LamAPI (Label Matching API), s-elBat excels in IR-based Entity Retrieval (ER) with enhanced type-based filtering features for superior precision.",
    icon: SquareChartGantt,
  },
  {
    name: "Dynamic Entity Disambiguation",
    description:
      "Adapts seamlessly to your data environment, employing tailored techniques for both scenarios with and without training datasets.",
    icon: SquarePen,
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="stEELlm"
    >
      <main>
        <img
          src="/steellm-docs/img/bblurryselbat.svg"
          className="absolute opacity-20 -top-[45rem]"
        />
        <section className="relative z-10">
          <div className="place-content-center mx-4 lg:gap-12 xl:gap-12 lg:pt-10 lg:grid-cols-12 pb-12">
            <h1 className="md:text-center pt-12 mb-12 leading-none text-purple sm:text-6xl md:text-7xl lg:text-8xl dark:text-lightpurple font-bold tracking-widest">
              stEELlm
            </h1>
            <div className="justify-center flex flex-col md:flex-row max-w-6xl gap-20 pb-2 mx-auto">
              <img
                alt="Logo"
                src="/steellm-docs/img/steellm.svg"
                className="lg:mt-0 lg:col-span-4 lg:flex w-[20rem] object-fit-cover h-auto max-w-full"
              />
              <div className="place-content-center max-w-lg pl-2">
                <p className=" text-gray-800 dark:text-gray-100 sm:text-xl lg:mb-8 md:text-2xl lg:text-3xl">
                  {" "}
                  Supervised and Unsupervised Semantic Table Interpretation
                  Approach with Feature/Vector Entity Retrieval and
                  Disambiguation Techniques
                </p>
                <a
                  href="/steellm-docs/docs/introduction"
                  className="hover:text-gray-100 text-center inline-flex items-center border-none dark:bg-lightpurple dark:text-gray-900 text-gray-100 font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-purple font-semibold"
                >
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />{" "}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden dark:bg-darkBackground bg-lightBackground py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col justify-center lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-4 text-lg leading-6 text-gray-700 dark:text-gray-100">
                    Discover s-elBat, the cutting-edge solution for Semantic
                    Table Interpretation (STI) that sets a new standard.
                    Combining both supervised and unsupervised approaches,
                    s-elBat effectively addresses all key STI challenges,
                    offering unparalleled accuracy and efficiency.
                  </p>
                  <p className="mt-4 text-lg leading-6 text-gray-700 dark:text-gray-100">
                    Key Features:
                  </p>
                  <div className="mt-6 max-w-xl space-y-4 text-base leading-5 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-8">
                        <div className="inline font-bold text-gray-900 dark:text-gray-300">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute left-1 top-1 h-5 w-5 text-primaryGreen dark:text-secondaryGreen"
                          />
                          {feature.name}
                        </div>
                        <span className="inline pl-3 text-gray-600 dark:text-gray-200">
                          {feature.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <img
                alt="Product screenshot"
                src="/mantistable-ui-docs/img/mantisUI.png"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
