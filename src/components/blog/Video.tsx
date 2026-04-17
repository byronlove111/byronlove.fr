interface VideoProps {
  src: string;
  caption?: string;
}

export default function Video({ src, caption }: VideoProps) {
  return (
    <figure className="my-6">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-lg border border-gray-100"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
