

export default function ProductCard({detail}) {
console.log(detail);

    return (
        <div className="w-full max-w-sm rounded-[28px] bg-[#f8faf7] p-5 shadow-sm border border-slate-100/80 font-sans">
            {/* Top Section: Icon & Title */}
            <div className="flex items-center gap-3.5 mb-5">
                {/* Rounded square container for image */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eff3ee] text-3xl p-2">
                    {/* Replace src with your rice bowl image path */}
                    {/* <img
            src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=200&auto=format&fit=crop"
            alt="চাল"
            className="h-12 w-12 object-contain"
          /> */}
                    {detail.image}
                </div>

                {/* Title and Unit */}
                <div>
                    <h3 className="text-xl font-bold text-slate-800 leading-snug">
                        {detail.nameBn}
                    </h3>
                    <p className="text-sm font-medium text-slate-500">
                        প্রতি{detail.unit}
                    </p>
                </div>
            </div>

            {/* Bottom Section: Price & Price Change Tag */}
            <div className="flex items-end justify-between">
                <div>
                    <span className="block text-xs font-semibold text-slate-500 mb-1">
                        আজকের দাম
                    </span>
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-bold text-slate-900">{detail.today}</span>
                        <span className="text-lg font-bold text-slate-800">টাকা</span>
                    </div>
                </div>

                {/* Percentage badge */}
                <div className="flex items-center gap-1 rounded-full bg-[#edf1ec] px-3 py-1.5 text-xs font-bold text-[#c53d43]">
                    {detail.change.dir === 'up' ?
                    <span className="text-red-600 mr-5">▲{detail.change.pct}%</span> :
                    <span className="text-green-600 mr-5">▼{-detail.change.pct}%</span>}
                    
                    {/* <span className="text-[10px]">▲</span>
                    <span>{detail.change.pct}</span> */}
                </div>
            </div>
        </div>
    );
}