import { validateImageAddress } from "../../../utils/validateImageAdderss";
import fallbackImage from "../../../assets/pictures/teachers/arian.webp";
import React from "react";
import { Image } from "@nextui-org/react";

export default function UserCard({ title, description, image, size }) {
  return (
    <div className="flex gap-x-4">
      <div>
        <Image
          src={validateImageAddress(image, fallbackImage)}
          alt=""
          width={size}
          height={size}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-2xl !text-primary dark:text-primary-lighter mb-0.1 font-kalamehBlack">
          {title}
        </p>
        <p className="text-xs text-lightBody dark:text-darkBody">
          {description}
        </p>
      </div>
    </div>
  );
}
