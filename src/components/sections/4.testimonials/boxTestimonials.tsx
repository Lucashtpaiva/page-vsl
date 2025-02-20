import { CircleUser, Star } from 'lucide-react';

interface TestimonialsProps {
  name: string;
  text: string;
}

export default function BoxTestimonials(props: TestimonialsProps) {
  return (
    <div className="flex max-w-96 flex-col gap-2.5 rounded-lg border border-[#8A05BE] bg-[linear-gradient(150deg,_rgba(64,26,83,0.70)_-16.34%,_rgba(6,0,11,0.70)_101.62%)] p-5 backdrop-blur-[5px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CircleUser className="text-gray-300" />
          <h4 className="text-white-500 text-lg font-bold">{props.name}</h4>
        </div>
        <div className="flex items-center gap-0.5">
          <Star className="w-4 text-amber-300" />
          <Star className="w-4 text-amber-300" />
          <Star className="w-4 text-amber-300" />
          <Star className="w-4 text-amber-300" />
          <Star className="w-4 text-amber-300" />
        </div>
      </div>
      <p className="text-base">{props.text}</p>
    </div>
  );
}
