// Base skeleton component
export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-stone/20 rounded-md ${className}`} />
  );
}

// Page-specific skeletons
export function HomeSkeleton() {
  return (
    <div className="w-full h-screen">
      <Skeleton className="w-full h-full rounded-none" />
    </div>
  );
}

export function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="flex flex-col gap-4">
          <Skeleton className="w-full aspect-[3/4]" />
          <Skeleton className="w-3/4 h-6" />
          <Skeleton className="w-1/2 h-4" />
        </div>
      ))}
    </div>
  );
}

export function BrewingSkeleton() {
  return (
    <div className="flex flex-col gap-12 max-w-3xl mx-auto">
      <div className="flex gap-4 mb-8">
        <Skeleton className="w-32 h-12" />
        <Skeleton className="w-32 h-12" />
        <Skeleton className="w-32 h-12" />
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-8">
          <Skeleton className="w-16 h-16 shrink-0 rounded-full" />
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="w-1/3 h-6" />
            <Skeleton className="w-full h-24" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function LocationsSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 border border-stone/20">
            <Skeleton className="w-2/3 h-6 mb-4" />
            <Skeleton className="w-full h-4 mb-2" />
            <Skeleton className="w-4/5 h-4" />
          </div>
        ))}
      </div>
      <div className="w-full lg:w-2/3 h-[500px] lg:h-[700px]">
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
}
