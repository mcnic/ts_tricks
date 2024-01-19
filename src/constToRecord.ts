const routes = {
  user: ['get-user', 'get-all-user'],
  comment: ['get-comment', 'get-all-comment'],
} as const;

type Routes = typeof routes;

type PossibleUrl = {
  [K in keyof Routes]: `/${K}/${Routes[K][number]}`;
}[keyof Routes];

type Example = Record<PossibleUrl, {}>;
