"use client";

import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { useLocale } from "use-intl";

export default function LocalSwicher() {
  const router = useRouter();
  const activeRoute = useLocale();
  const onSlectChange = (e) => {
    const locale = e.target.value;
    router.replace(`/${locale}`);
  };

  return (
    <div>
      <label className="border-2 rounded text-black">
        <p className="sr-only">change Language </p>
        <select defaultValue={activeRoute} onChange={onSlectChange}>
          <option name="english" value="en">
            English
          </option>
          <option name="bangla" value="bn">
            Bangla
          </option>
        </select>
      </label>
    </div>
  );
}
