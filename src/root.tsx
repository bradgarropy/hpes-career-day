import type {LinksFunction, MetaFunction} from "@remix-run/node"
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react"

import tailwindStyles from "~/styles/tailwind.css?url"

export const meta: MetaFunction = () => [
    {charset: "utf-8"},
    {title: "career day"},
    {viewport: "width=device-width,initial-scale=1"},
]

export const links: LinksFunction = () => {
    const links = [
        {
            rel: "stylesheet",
            href: tailwindStyles,
        },
        {
            rel: "icon",
            href: "https://fav.farm/💻",
        },
    ]

    return links
}

const App = () => {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default App
