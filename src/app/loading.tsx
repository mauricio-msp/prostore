import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex-center gap-2 text-muted-foreground">  
      <Loader2Icon className="animate-spin size-5" />
      <span>loading...</span>
    </div>
  )
}