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
    <Image src={flutterIcon} className='h-8 w-8' />
  );
}
export function next(props) {
  return (
    <Image src={nextIcon} className='h-8 w-8' />
  );
}
export function tailwind(props) {
  return (
    <Image src={tailwindIcon} className='h-8 w-8' />
  );
}
export function react(props) {
  return (
    <Image src={reactIcon} className='h-8 w-8' />
  );
}
export function javascript(props) {
  return (
    <Image src={javascriptIcon} className='h-8 w-8' />
  );
}
export function html(props) {
  return (
    <Image src={htmlIcon} className='h-8 w-8' />
  );
}
export function typescript(props) {
  return (
    <Image src={typescriptIcon} className='h-8 w-8' />
  );
}
export function java(props) {
  return (
    <Image src={javaIcon} className='h-8 w-8' />
  );
}