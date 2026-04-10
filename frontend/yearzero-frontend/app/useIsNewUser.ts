"use client";
import { useEffect, useState } from "react";

export function useIsNewUser() {
  useEffect(() => {
    const visited: string | null =
      localStorage.getItem("firstTimeVisit") || null;
    if (visited == null) {
      localStorage.setItem("firstTimeVisit", Date.now().toString());
      return;
    }
  }, []);
}

export default function UserTracker() {
  useIsNewUser();
  return null;
}
