import clsx from 'clsx';
import Link from 'next/link';
import React, { forwardRef } from 'react'

const baseStyles={
    solid: "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
    outline: "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles={
    solid: {
        gray: "bg-amber-900 text-white hover:bg-gold active:amber-900 active:text-white/80",
        yellow: "bg-yellow-300 text-black hover:bg-yellow-400 active:bg-yellow-300 active:text-black/80"
    },
    outline: {
        gray: "border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
    }
};

const Button = forwardRef(function Button(
    {variant='solid', color="gray", className, href, ...props}, ref){className=clsx(baseStyles[variant], variantStyles[variant][color], className); 
        return href ? (<Link ref={ref} href={href} className={className} {...props} />) : (<button ref={ref} className={className} {...props}/>)
    }
)

export default Button