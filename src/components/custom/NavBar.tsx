"use client"

import { Link, NavigationMenu, NavigationMenuItem } from "@radix-ui/react-navigation-menu"
import Image from "next/image"
export default function NavBar(){
    return(
        <NavigationMenu className="flex flex-row list-none justify-evenly h-[5vh] align-middle items-center p-5 bg-darkgreenish">
            <NavigationMenuItem className="flex flex-row gap-x-2">
                <Image src={'icons8-home.svg'} width={20} height={20} alt="home"></Image>
                <Link href="/"><strong className="text-xl">Home</strong></Link>
            </NavigationMenuItem>
            
    </NavigationMenu>
    )
}