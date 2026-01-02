# UI Design and Styling Conventions

## Font Conventions

- **Primary Font**: `inter` (imported from `@/app/ui/fonts`). Applied to the `<body>` in `RootLayout`.
- **Secondary Font**: `lusitana` (imported from `@/app/ui/fonts`). Used for headings, logos, and emphasis.
- **Usage**:
    - Always import fonts from the central `@/app/ui/fonts` file.
    - Apply fonts using the `${font.className}` pattern within template literals.
    - **Always** include the `antialiased` Tailwind class when applying font families to ensure smooth rendering.

## CSS & Styling

- **Tailwind CSS**: The primary framework for all styling. Avoid custom CSS unless absolutely necessary (use
  `global.css` for base styles).
- **Conditional Classes**: Use the `clsx` utility for merging and conditionally applying Tailwind classes.
- **Responsive Design**: Follow a mobile-first approach. Use `md:`, `lg:`, etc., for desktop overrides.
- **Icons**: Use the `@heroicons/react` library (prefer `24/outline` for consistency).
- **Loading States**: Use skeleton components with the `shimmer` animation (defined in `tailwind.config.ts` and
  `app/ui/skeletons.tsx`) for a better user experience during data fetching.

## Component Patterns

- **Navigation**: Use `Link` from `next/link` for all internal routing to benefit from prefetching.
- **Images**: Use the Next.js `Image` component. Always provide `width` and `height` to prevent layout shift. Use
  responsive classes (e.g., `hidden md:block`) for art direction between mobile and desktop.
