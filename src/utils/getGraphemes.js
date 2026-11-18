// Helper to split text into visual characters, keeping complex scripts intact
export const getGraphemes = (str) => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(str), (s) => s.segment);
    }
    return Array.from(str); // Fallback for older browsers
  };