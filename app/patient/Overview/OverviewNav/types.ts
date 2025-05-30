import { z } from 'zod';

const overviewNavLinkSchema = z.object({
    title: z.string(),
    link: z.string(),
});

export const overviewNavSchema = z.object({
    nav: z.object({
        mainTitle: z.string(),
        navList: z.array(overviewNavLinkSchema),
    })
});

export type OverviewNav = z.infer<typeof overviewNavSchema>;