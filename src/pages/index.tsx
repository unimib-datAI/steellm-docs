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
    name: "Advanced Entity Disambiguation",
    description:
      "stEELlm leverages the fine-tuned Mixtral 8x7B model to accurately distinguish and annotate entities within tables.",
    icon: SquareChartGantt,
  },
  {
    name: "Generative Table Annotation",
    description:
      "Designed to handle diverse datasets, stEELlm generates meaningful cell annotations by processing tables and entity lists.",
    icon: SquarePen,
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="stEELlm">
      <main>
        <img
          src="/steellm-docs/img/bblurryeel.svg"
          className="absolute opacity-30 -top-[10rem] -right-[-30rem] max-w-7xl"
        />
        <section className="mx-auto max-w-6xl relative z-10">
          <div className="mx-4 place-content-center lg:gap-12 xl:gap-12 lg:grid-cols-12 pb-12 pt-12">
            <div className="justify-center flex flex-col md:flex-row max-w-8xl gap-12 pb-2 mx-auto">
              <div className="place-content-center max-w-lg pl-2">
                <h1 className="pt-12 leading-none text-greenblue sm:text-4xl md:text-5xl lg:text-6xl dark:text-neonblue font-bold tracking-wide">
                  stEELlm
                </h1>
                <p className=" text-stone-800 dark:text-stone-100 sm:text-xl lg:mb-8 md:text-xl lg:text-2xl">
                  Leading the Future of Semantic Table Interpretation with
                  Advanced CEA Task Focus and Fine-Tuned Mixtral 8x7B Technology
                </p>
                <a
                  href="/steellm-docs/docs/introduction"
                  className="text-center inline-flex items-center border-none dark:bg-neonblue bg-greenblue dark:text-blackground dark:hover:text-blackground hover:text-stone-100 text-stone-100 font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 font-semibold"
                >
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <img
                alt="Logo"
                src="/steellm-docs/img/eel.svg"
                className="lg:mt-0 lg:col-span-4 lg:flex w-[28rem] object-fit-cover max-w-full"
              />
            </div>
          </div>
        </section>

        <div className="overflow-hidden dark:bg-darkBackground bg-lightBackground py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col justify-center lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-4 text-lg leading-6 text-gray-700 dark:text-gray-100">
                    Discover stEELlm, an innovative Semantic Table
                    Interpretation tool that transforms data analysis. Employing
                    the precisely tailored Mixtral 8x7B model, stEELlm excels at
                    producing semantic annotations across varied datasets.
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
                            className="absolute left-1 top-1 h-5 w-5 text-greenblue dark:text-neonblue"
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
                alt="Product"
                src="/steellm-docs/img/steellmimage.png"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
