'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Blog from './../components/blog/Blog';
import { useEffect } from "react";

export default function Home() {
  useTitle("SG Praunheim");
  return (
    <Blog></Blog>    
  );
}

function useTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title
    return () => {
      document.title = prevTitle
    }
  })
}
