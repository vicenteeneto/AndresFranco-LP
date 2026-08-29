import Photo from "../ui/Photo";

/**
 * One photograph, edge to edge, between the figures and the list.
 *
 * With the middle of the site folded into rows, the page would otherwise show
 * a single photograph — the hero — and then read as an index. This is the one
 * moment of scale left: a room full of people, at full width, fading into the
 * ground at its foot. It costs a few hundred pixels and it is the difference
 * between an executive presence and a directory.
 */
export default function Band() {
  return (
    <div className="relative">
      <Photo
        id="eventRoadshow"
        className="aspect-[3/2] w-full sm:aspect-[2/1] lg:aspect-[21/8]"
        sizes="100vw"
        editorial
      />
      <div aria-hidden="true" className="fade-b" />
    </div>
  );
}
