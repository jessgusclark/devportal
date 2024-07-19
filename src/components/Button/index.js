import React from "react";
import Link from '/src/components/Link';
import clsx from "clsx";

export default function Button ({variant, href, className, size, target, title, icon, stretched, children, ...props}) {
  const btnClassName = clsx(`btn`, className, size && `btn-${size}`, stretched && `stretched-link position-static`);
  // will start with exactly one slash, and that anything else is external.
  const Icon = () => {
    return icon && (
      <svg width={16} height={16}>
        <use xlinkHref={`#icon-${icon}`}/>
      </svg>
    )
  }
  return href ? (
    <Link
      href={href}
      className={btnClassName}
      target={target}
      title={title || null}
      onClick={props.onClick}
    >
      <Icon />
      {children}
    </Link>
  ) : (
    <button
      type={`button`}
      className={btnClassName}
      title={title || null}
      onClick={props.onClick}
    >
      <Icon />
      {children}
    </button>
  )
}
