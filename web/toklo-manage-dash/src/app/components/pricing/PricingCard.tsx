import { TPricing } from "@/app/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

type Props = {
  item: TPricing;
};

const PricingCard = ({ item }: Props) => {
  return (
    <div>
      <div className=" flex flex-col justify-center gap-2  w-[300px] min-h-[400px] p-4 bg-white shadow-md rounded-md">
        {/* header */}
        <div className="">
          <p
            className={`font-semibold mb-3  ${
              item?.type == "ALL_TIME"
                ? "text-purple-700"
                : item?.type == "HAL_YEARLY"
                ? "text-blue-500"
                : "text-yellow-500"
            }`}
          >
            {" "}
            {item?.name}{" "}
          </p>
          <p>
            {" "}
            <span
              className={`font-extrabold text-3xl  ml-2  ${
                item?.type == "ALL_TIME"
                  ? "text-purple-700"
                  : item?.type == "HAL_YEARLY"
                  ? "text-blue-500"
                  : "text-yellow-500"
              }`}
            >
              {" "}
              {item?.price} frs{" "}
            </span>{" "}
            /<span className="font-bold"> {item?.type} </span>{" "}
          </p>
        </div>
        {/* content */}
        <div className="">
          <p className="my-3">{item?.desc}</p>
          <div>
            {item?.items.map((feature, i) => (
              <div className="flex gap-3 items-center mb-2" key={i.toString()}>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4 ml-3",
                    item?.type == "ALL_TIME"
                ? "text-purple-700"
                : item?.type == "HAL_YEARLY"
                ? "text-blue-500"
                : "text-yellow-500"
                  )}
                />
                <p> {feature}{" "} </p>
              </div>
            ))}
          </div>
        </div>
        {/* bottom */}
        <div className="">
          <Button
            className={`w-full ${
              item?.type == "ALL_TIME"
                ? "bg-purple-700"
                : item?.type == "HAL_YEARLY"
                ? "bg-blue-500"
                : "bg-yellow-500"
            }`}
          >
            {" "}
            Subscribe{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
