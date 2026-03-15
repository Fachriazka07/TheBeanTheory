'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-4 text-center">
      <h2 className="text-4xl font-playfair text-charcoal mb-4">
        Oops! Something went wrong
      </h2>
      <p className="text-stone mb-8 max-w-md">
        {error.message ||
          'An unexpected error occurred while loading the page.'}
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-4 bg-espresso text-cream hover:bg-roast transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
