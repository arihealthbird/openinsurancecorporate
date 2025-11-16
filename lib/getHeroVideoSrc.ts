export function getHeroVideoSrc(date: Date = new Date()): string {
  const hour = date.getHours()

  if (hour >= 6 && hour < 9) return '/videos/early-morning-hero.mp4'
  if (hour >= 9 && hour < 12) return '/videos/morning-hero.mp4'
  if (hour >= 12 && hour < 16) return '/videos/afternoon-hero.mp4'
  if (hour >= 16 && hour < 18) return '/videos/dusk-hero.mp4'
  if (hour >= 18 && hour < 22) return '/videos/early-night-hero.mp4'
  return '/videos/midnight-hero.mp4'
}
