import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface actionscardProps {
  icon?: any;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export default function ActionCard({
  icon,
  title,
  description,
  link,
  linkText,
}: actionscardProps) {
  const IconComponent = icon || undefined;
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        {icon && (
          <IconComponent className="w-10 h-10 mx-auto mb-2 text-primary" />
        )}
        <CardDescription>
          {description}
          {link && (
            <Link href={link}>
              <span className="text-primary hover:underline">{linkText}</span>
            </Link>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
