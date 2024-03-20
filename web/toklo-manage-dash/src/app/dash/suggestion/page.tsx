"use client";
import Menu from "@/app/components/Suggest/Menu";
import Item from "@/app/components/Suggest/Item";
import Wrapper from "@/app/components/dashboard/Wrapper";
import React, { Suspense, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DataService } from "@/lib/dataService";
import { TComment } from "@/app/types";

type Props = {};

const page = (props: Props) => {
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    handleFetchComments();
    return () => {};
  }, []);

  async function handleFetchComments() {
    try {
      const resp = await DataService.get("comments");
      const { comments } = resp.data;
      console.log(resp.data);

      if (comments) {
        setComments(comments);
      }
    } catch (error) {}
  }

  return (
    <Wrapper isHead={false}>
      <Menu />
      <ScrollArea className="bg-white w-full rounded-sm md:w-10/12 min-h-[400px] h-[450px] mx-auto p-6">
        <Suspense fallback="LOADING..........">
          {comments.map((comment, i) => (
            <Item
              key={i.toString()}
              content={comment}
              DressMaker={comment.DressMaker}
              refetch={handleFetchComments}
            />
          ))}
        </Suspense>
      </ScrollArea>
    </Wrapper>
  );
};

export default page;
