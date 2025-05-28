
export const getActiveClass = ({ isActive }) =>
    isActive
        ? "bg-rose-100 text-rose-600 font-bold px-4 py-3 transition rounded-md"
        : "px-4 py-3 hover:bg-neutral-100 transition font-semibold";