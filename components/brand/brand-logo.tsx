import Image from 'next/image';

type BrandLogoProps = {
  compact?: boolean;
  priority?: boolean;
};

export default function BrandLogo({ compact = false, priority = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/brand/etc-mark.svg"
        alt=""
        width={200}
        height={162}
        priority={priority}
        className={compact ? 'h-6 w-auto' : 'h-7 w-auto'}
      />
      <span className={compact ? 'text-sm font-bold text-white tracking-tight' : 'text-base font-bold text-white tracking-tight'}>
        ETC
      </span>
      <span className="sr-only">Energy Trade Centre</span>
    </span>
  );
}
