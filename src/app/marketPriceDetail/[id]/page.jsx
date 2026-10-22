import React from "react";

const MarketPricePage = async({ params }) => {

    const {id} = await params

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`)
    const data = await res.json()
    const marketData = data.markets

    const { overallMin, overallMax } = marketData.reduce(
  (acc, current) => {
    if (current.min < acc.overallMin) acc.overallMin = current.min;
    if (current.max > acc.overallMax) acc.overallMax = current.max;
    return acc;
  },
  { overallMin: Infinity, overallMax: -Infinity }
);

  return (
    <div className="min-h-screen bg-[#EEF2ED] p-4 md:p-8 text-[#2D3748]">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Top Header Card */}
        <div className="bg-[#FAFBF9] rounded-2xl p-6 shadow-sm border border-gray-200/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Image Placeholder */}
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200/80">
              <span className="text-2xl">{data.image}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{data.nameBn}</h1>
              <p className="text-xs text-gray-500 mt-0.5">প্রতি {data.unit} • {data.categoryNameBn}</p>
              <p className="text-xs text-gray-600 mt-2">
                গতকালকের তুলনায় আজ দাম <span className="font-semibold text-gray-900">
                  {data.change.dir === "up" ? 
                  `বেড়েছে · ${data.today - data.yesterday}` : `কমেছে · ${data.yesterday - data.today}`}
                    টাকা</span>
              </p>
            </div>
          </div>

          {/* Today's Price Badge */}
          <div className="bg-[#E4EBE3] rounded-xl p-4 w-full md:w-36 text-center">
            <span className="text-xs text-gray-600 font-medium">আজকের দাম</span>
            <div className="text-2xl font-bold text-gray-900 my-0.5">{data.today}</div>
            <div className="text-xs text-gray-600">টাকা / {data.unit}</div>
            <div className="text-xs font-semibold text-red-500 mt-1 flex items-center justify-center gap-0.5">
              {data.change.dir === "up" ? 
              <span className="text-red-600 mr-5">▲{data.change.pct}%</span> :
            <span className="text-green-600 mr-5">▼{-data.change.pct}%</span>}
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="bg-[#FAFBF9] rounded-2xl p-6 shadow-sm border border-gray-200/60 space-y-8">
          
          {/* Summary Cards Section */}
          <div>
            <h2 className="text-base font-bold text-gray-800 mb-4">দামের সারসংক্ষেপ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Minimum Price */}
              <div className="bg-[#FAFBF9] border border-gray-200/80 rounded-xl p-4">
                <p className="text-xs text-gray-500 font-medium">সর্বনিম্ন দাম</p>
                <p className="text-xl font-bold text-emerald-600 mt-1">{overallMin}</p>
                <p className="text-[11px] text-gray-400 mt-2">সবচেয়ে কম দামের বাজার</p>
              </div>

              {/* Maximum Price */}
              <div className="bg-[#FAFBF9] border border-gray-200/80 rounded-xl p-4">
                <p className="text-xs text-gray-500 font-medium">সর্বাধিক দাম</p>
                <p className="text-xl font-bold text-red-500 mt-1">{overallMax}</p>
                <p className="text-[11px] text-gray-400 mt-2">সবচেয়ে বেশি দামের বাজার</p>
              </div>

              {/* Average Price */}
              <div className="bg-[#FAFBF9] border border-gray-200/80 rounded-xl p-4">
                <p className="text-xs text-gray-500 font-medium">গড় দাম</p>
                <p className="text-xl font-bold text-emerald-600 mt-1">{(overallMax + overallMin)/2}</p>
                <p className="text-[11px] text-gray-400 mt-2">প্রতি {data.unit}-এর হিসাবে</p>
              </div>

            </div>
          </div>

          {/* Table Section */}
          <div>
            <h2 className="text-base font-bold text-gray-800 mb-4">বাজারভিত্তিক আজকের দাম</h2>
            
            <div className="overflow-x-auto border border-gray-200/80 rounded-xl bg-[#FAFBF9]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs text-gray-500">
                    <th className="py-3.5 px-4 font-medium">বাজার</th>
                    <th className="py-3.5 px-4 font-medium">বিভাগ</th>
                    <th className="py-3.5 px-4 font-medium text-center">সর্বনিম্ন</th>
                    <th className="py-3.5 px-4 font-medium text-center">সর্বাধিক</th>
                    <th className="py-3.5 px-4 font-medium text-right">গড়</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/70 text-xs">
                  {marketData.map((row,i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3 px-4 font-bold text-gray-800">{row.market}</td>
                      <td className="py-3 px-4 text-gray-600">{row.division}</td>
                      <td className="py-3 px-4 text-center text-gray-700">{row.min}</td>
                      <td className="py-3 px-4 text-center text-gray-700">{row.max}</td>
                      <td className="py-3 px-4 text-right font-bold text-gray-900">{(row.min + row.max)/2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MarketPricePage;