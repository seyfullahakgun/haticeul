import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("hakkimda", "routes/hakkimda.tsx"),
  route("hizmetlerim", "routes/hizmetlerim.tsx"),
  route("blog", "routes/blog.tsx"),
  route("egitimler", "routes/egitimler.tsx"),
  route("iletisim", "routes/iletisim.tsx"),
] satisfies RouteConfig;
