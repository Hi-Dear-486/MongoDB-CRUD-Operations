"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EditButton(props) {
  console.log("🚀 ~ EditButton ~ props:", props.data);

  return (
    <div>
      <Link href={`/alluser/${props.data._id}`}>
        <Button>Edit</Button>
      </Link>
    </div>
  );
}
