import React from "react";
import { lusitana } from "@/app/ui/fonts";
import { CiBoxList } from "react-icons/ci";

export default function SixthSection() {
  return (
    <>
      <div className="">
        <div className=" pb-10">
          <div className="flex items-center justify-center  pt-20 pb-3">
            <h1
              className={`${lusitana.className} text-3xl font-bold text-secondary`}
            >
              Explore Embassies
            </h1>
            <CiBoxList size="2em" className="text-primary" />
          </div>
          <div className="flex justify-center font-thin">
            This is concise and straightforward, encouraging users to browse the
            list.{" "}
          </div>
        </div>

        <div className=" flex justify-center ">
          <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
            <caption className="caption-bottom text-sm text-gray-500 italic p-2"></caption>
            <thead>
              <tr className="bg-active">
                <th className=" text-extra border border-gray-300 px-4 py-2 text-left font-semibold ">
                  Embassy
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold  text-extra">
                  Website
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-extra">
                United States Embassy
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">
                  <a href="https://ng.usembassy.gov/" className=" underline text-primary hover:text-blue-700"> Explore United States Website</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-extra">
                United Kingdom High Commission
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">
                  <a href="https://www.gov.uk/world/organisations/british-high-commission-abuja" className=" underline text-primary hover:text-blue-700">Visit United Kingdom Website</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-extra">
                Canadian High Commission
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">
                  <a href="https://www.canada.ca/en/services/immigration-citizenship.html" className=" underline text-primary hover:text-blue-700"> Explore Canadian Website</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-extra">
                German Embassy
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">
                  <a href=" https://nigeria.diplo.de/ng-en" className=" underline text-primary hover:text-blue-700"> Visit German Website</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-extra">
                Chinese Embassy
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">
                  <a href="http://ng.china-embassy.gov.cn/" className=" underline text-primary hover:text-blue-700"> Explore Chinese Website</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-extra">
                French Embassy
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">
                  <a href="https://ng.ambafrance.org/" className=" underline text-primary hover:text-blue-700"> Visit French Website</a>
                </td>
              </tr>

               <tr>
                <td className="border border-gray-300 px-4 py-2 text-extra">
                Indian High Commission
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">
                  <a href=" https://hciabuja.gov.in/" className=" underline text-primary hover:text-blue-700"> Explore Indian  Website</a>
                </td>
              </tr>
               <tr>
                <td className="border border-gray-300 px-4 py-2 text-extra">
                South African High Commission
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">
                  <a href="http://www.dirco.gov.za/abuja/" className=" underline text-primary hover:text-blue-700"> Visit South AfricanWebsite</a>
                </td>
              </tr>
               <tr>
                <td className="border border-gray-300 px-4 py-2 text-extra">
                Japanese Embassy
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">
                  <a href="https://www.ng.emb-japan.go.jp/itprtop_en/index.html" className=" underline text-primary hover:text-blue-700"> Visit Japanese Website</a>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
