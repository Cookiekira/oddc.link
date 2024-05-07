import { cn } from '@/lib/utils';
import { memo } from 'react';

export function GitHubIcon(props: { className?: string }) {
  return <span className={cn('icon-[mdi--github]', props.className)} />;
}

export function EmailIcon(props: { className?: string }) {
  return <span className={cn('icon-[mdi--email]', props.className)} />;
}

export function LinkedInIcon(props: { className?: string }) {
  return <span className={cn('icon-[mdi--linkedin]', props.className)} />;
}

export function TwitterIcon(props: { className?: string }) {
  return <span className={cn('icon-[mdi--twitter]', props.className)} />;
}

export const Icon = memo(function Icon(props: { name: string; className?: string }) {
  const className = cn('align-middle', props.className);
  switch (props.name) {
    case 'github':
      return <GitHubIcon className={className} />;
    case 'email':
      return <EmailIcon className={className} />;
    case 'linkedin':
      return <LinkedInIcon className={className} />;
    case 'twitter':
      return <TwitterIcon className={className} />;
    default:
      return null;
  }
});
