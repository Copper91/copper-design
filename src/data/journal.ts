// Journal entries. The page shows a "coming soon" state while this is empty.
// TODO(owner): add real articles (title, date, summary, slug) when ready; individual article pages are not built yet.
export type JournalEntry = { slug: string; title: string; date: string; summary: string };
export const journal: JournalEntry[] = [];
