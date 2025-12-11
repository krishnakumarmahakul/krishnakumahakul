"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Me",
    href: "#about",
    description:
      "Learn more about my background, skills, and professional journey.",
  },
  {
    title: "Projects",
    href: "#projects",
    description:
      "Explore the projects I've worked on and my contribution to each.",
  },
  {
    title: "Blog",
    href: "#blog",
    description:
      "Read my thoughts on technology, development, and industry trends.",
  },
  {
    title: "Contact",
    href: "#contact",
    description:
      "Get in touch with me for collaborations, opportunities, or just to say hi.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="#home">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-100 to-gray-200 p-6 no-underline outline-none focus:shadow-md text-slate-900"
                    href="#home"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Portfolio Overview
                    </div>
                    <p className="text-sm leading-tight text-slate-600">
                      A comprehensive showcase of my work and achievements
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-200 focus:bg-gray-200 text-slate-900"
                    href="#skills"
                  >
                    <div className="text-sm font-medium leading-none">Skills</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                      Technical expertise and competencies
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-200 focus:bg-gray-200 text-slate-900"
                    href="#experience"
                  >
                    <div className="text-sm font-medium leading-none">Experience</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                      Professional work history and achievements
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-200 focus:bg-gray-200 text-slate-900"
                    href="#projects"
                  >
                    <div className="text-sm font-medium leading-none">Projects</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                      Featured work and case studies
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-200 focus:bg-gray-200 text-slate-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
