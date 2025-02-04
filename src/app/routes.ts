import {
    type RoutingConfig,
    route,
    index
} from "@react-router/dev/routes"

export default [
    route("dashboard", "./dashboard.tsx", [
        index("./index.tsx"),
        route("settings", "./settings.tsx")
    ]),
] satisfies RoutingConfig;