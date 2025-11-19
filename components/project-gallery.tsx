"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const handlePrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  return (
    <div className="space-y-6 py-8">
      <h2 className="text-2xl font-semibold text-foreground">Gallery</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group aspect-video overflow-hidden rounded-lg border border-border bg-muted transition-all hover:border-primary"
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <img
              src={images[selectedIndex] || "/placeholder.svg"}
              alt={`Gallery image ${selectedIndex + 1}`}
              className="w-full rounded-lg"
            />

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 rounded-lg bg-black/50 p-2 text-white hover:bg-black/70"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg bg-black/50 p-2 text-white hover:bg-black/70"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-black/50 p-2 text-white hover:bg-black/70"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="mt-4 text-center text-sm text-white">
              {selectedIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
