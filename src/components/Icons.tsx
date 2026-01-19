import { cn } from '@/lib/utils'

export function GitHubIcon(props: { className?: string }) {
	return <span className={cn('icon-[mdi--github]', props.className)} />
}

export function EmailIcon(props: { className?: string }) {
	return <span className={cn('icon-[mdi--email]', props.className)} />
}

export function LinkedInIcon(props: { className?: string }) {
	return <span className={cn('icon-[mdi--linkedin]', props.className)} />
}

export function TwitterIcon(props: { className?: string }) {
	return <span className={cn('icon-[mdi--twitter]', props.className)} />
}

export function MenuIcon(props: { className?: string }) {
	return <span className={cn('icon-[mdi--dots-horizontal]', props.className)} />
}

export function BlogIcon(props: { className?: string }) {
	return <span className={cn('icon-[mdi--blogger]', props.className)} />
}

const iconMap: Record<string, (props: { className?: string }) => React.ReactElement> = {
	github: GitHubIcon,
	email: EmailIcon,
	linkedin: LinkedInIcon,
	twitter: TwitterIcon,
	menu: MenuIcon,
	blog: BlogIcon,
}

export function Icon(props: { name: string; className?: string }) {
	const className = cn('align-middle', props.className)
	const IconComponent = iconMap[props.name]
	return IconComponent ? <IconComponent className={className} /> : null
}
