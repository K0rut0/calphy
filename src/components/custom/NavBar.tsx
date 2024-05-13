"use client"

import { Link, NavigationMenu, NavigationMenuItem } from "@radix-ui/react-navigation-menu"

export default function NavBar(){
    return(
        <NavigationMenu className="flex flex-row">
            <NavigationMenuItem>
                <Link href="/">Calculators</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/">The Team</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/">Resources</Link>
            </NavigationMenuItem>
    </NavigationMenu>
    )
}