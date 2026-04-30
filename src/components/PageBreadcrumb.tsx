import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const PageBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
  <div className="container mx-auto px-4 py-4">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="text-muted-foreground hover:text-accent">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, i) => (
          <span key={i} className="contents">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.path ? (
                <BreadcrumbLink asChild>
                  <Link href={item.path} className="text-muted-foreground hover:text-accent">{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="text-accent">{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  </div>
);

export default PageBreadcrumb;
