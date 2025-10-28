const SkeletonCard = () => {
    return (
        <div className="group animate-pulse">
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg z-10 h-[513px]">

                {/* Image skeleton */}
                <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-gradient-to-r from-[#1313130D] to-[#6160600d]"></div>

                {/* Content skeleton */}
                <div className="p-6 space-y-4">
                    {/* Category */}
                    <div className="h-8 w-32 bg-gray-200 rounded-full"></div>

                    {/* Title */}
                    <div className="h-6 w-3/4 bg-gray-200 rounded"></div>

                    {/* Description */}
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>

                {/* Buttons skeleton */}
                <div className="p-6 pt-0 -mt-2">
                    <div className="flex justify-between items-center">
                        <div className="h-8 w-24 bg-gray-200 rounded-lg"></div>
                        <div className="h-8 w-24 bg-gray-200 rounded-lg"></div>
                    </div>

                    {/* Bottom full button */}
                    <div className="mt-4 h-10 w-full bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
