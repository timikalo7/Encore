import { FC } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Card } from "../ui/card";

interface errorcardProps {}

const errorcard: FC<errorcardProps> = ({}) => {
  return (
    <Card
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </Card>
  );
};

export default errorcard;
