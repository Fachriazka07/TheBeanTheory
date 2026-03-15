'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-3xl font-playfair text-charcoal mb-4">
        Map Unavailable
      </h2>
      <p className="text-stone mb-8 max-w-md">
        {error.message ||
          'We could not load our branch locations at this time.'}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-colors"
      >
        Retry
      </button>
    </div>
  );
}
