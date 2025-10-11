import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Avatar {
  src: string;
  alt: string;
}

export interface PaymentSummaryCardProps {
  title: string;
  amount: number;
  currency?: string;
  statText?: string; // if provided, shown instead of numeric amount
  subCardTitle: string;
  subCardSubtitle: string;
  avatars: Avatar[];
  moreCount?: number;
  subCardHref?: string; // prefer link over function to work in Server Components
  className?: string;
}

export const PaymentSummaryCard = React.forwardRef<HTMLDivElement, PaymentSummaryCardProps>(
  (
    {
      title,
      amount,
      currency = '$',
      statText,
      subCardTitle,
      subCardSubtitle,
      avatars,
      moreCount,
      subCardHref,
      className,
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn('w-full max-w-sm rounded-2xl bg-white/5 backdrop-blur-sm p-6 text-card-foreground shadow-sm border border-white/10', className)}>
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        {statText ? (
          <p className="mt-2 text-2xl font-semibold text-muted-foreground">{statText}</p>
        ) : (
          <p className="mt-2 text-5xl font-bold tracking-tight">
            {currency}
            {amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        )}

        <a
          href={subCardHref}
          className="group mt-8 block rounded-xl bg-white/5 p-4 transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-md border border-white/10"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-card-foreground">{subCardTitle}</p>
              <p className="text-sm text-muted-foreground">{subCardSubtitle}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background transition-transform duration-300 group-hover:scale-110 border border-white/10">
              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar.src}
                alt={avatar.alt}
                className="h-10 w-10 rounded-full border-2 border-background object-cover"
                style={{ marginLeft: index > 0 ? '-12px' : 0 }}
              />
            ))}
            {moreCount && moreCount > 0 && (
              <div className="ml-[-12px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-sm font-semibold text-primary-foreground">
                +{moreCount}
              </div>
            )}
          </div>
        </a>
      </div>
    );
  },
);

PaymentSummaryCard.displayName = 'PaymentSummaryCard';
