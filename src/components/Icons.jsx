import React, { useId } from "react";
import flutterIcon from "@/images/flutter.png"
import nextIcon from "@/images/next.png"
import tailwindIcon from "@/images/tailwind.png"
import reactIcon from "@/images/react.png"
import javascriptIcon from "@/images/javascript.png"
import htmlIcon from "@/images/html.png"
import typescriptIcon from "@/images/typescript.png"
import javaIcon from "@/images/java.png"
import Image from "next/image";

export function flutter(props) {
  return (
    <Image src={flutterIcon} className='h-14 w-12' alt='flutterIcon' />
  );
}
export function next(props) {
  return (
    <Image src={nextIcon} className='h-14 w-14' alt='nextIcon' />
  );
}
export function tailwind(props) {
  return (
    <Image src={tailwindIcon} className='h-14 w-14' alt='tailwindIcon' />
  );
}
export function react(props) {
  return (
    <Image src={reactIcon} className='h-14 w-16' alt='reactIcon' />
  );
}
export function javascript(props) {
  return (
    <Image src={javascriptIcon} className='h-14 w-14' alt='jsIcon' />
  );
}
export function html(props) {
  return (
    <Image src={htmlIcon} className='h-14 w-14' alt='htmlIcon' />
  );
}
export function typescript(props) {
  return (
    <Image src={typescriptIcon} className='h-14 w-14' alt='tsIcon' />
  );
}
export function java(props) {
  return (
    <Image src={javaIcon} className='h-14 w-14' alt='javaIcon' />
  );
}