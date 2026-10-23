export default function Loading() {
    return (
        <div
            role="status"
            aria-live="polite"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-3xl font-bold text-white"
        >
            Loading...
        </div>
    );
}
