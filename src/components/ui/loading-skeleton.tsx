import { Skeleton } from "@/components/ui/skeleton";

export const ImageSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <Skeleton className="w-full h-full bg-gradient-to-r from-muted via-muted/50 to-muted animate-shimmer bg-[length:200%_100%]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-muted-foreground/50 text-sm">Loading...</div>
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="border rounded-lg p-6 space-y-3">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
};

export const GallerySkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <ImageSkeleton key={i} className="aspect-video rounded-lg" />
      ))}
    </div>
  );
};