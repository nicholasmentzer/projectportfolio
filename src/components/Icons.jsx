import React, { useId } from "react";
import flutterIcon from "@/images/flutter.png"
import Image from "next/image";

export function flutter(props) {
  return (
    <Image src={flutterIcon} className='h-8 w-8' />
  );
}