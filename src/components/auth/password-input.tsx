"use client";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isChangePassword?: boolean;
}

const PasswordInput = ({ isChangePassword, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const onClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <div
        className={cn(
          "flex items-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          isChangePassword && "rounded-r-none"
        )}
      >
        <input
          type={showPassword ? "text" : "password"}
          placeholder="******"
          className="peer w-full bg-transparent outline-none hide-password-toggle ...other-classes"
          autoComplete="off"
          {...props}
        />
        <div
          onClick={onClick}
          className="hover:opacity-50 bg-transparent text-gray-400 cursor-pointer"
        >
          {!showPassword ? (
            <Eye className="text-gray-900 w-5 h-5 dark:text-white" />
          ) : (
            <EyeOff className="text-gray-900 w-5 h-5 dark:text-white" />
          )}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-md peer-focus:outline peer-focus:outline-2 peer-focus:outline-primary"></div>
    </div>
  );
};

export default PasswordInput;
