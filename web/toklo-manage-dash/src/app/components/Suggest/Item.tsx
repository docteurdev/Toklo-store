"use client";
import { IDressMaker, TComment } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { DataService } from "@/lib/dataService";
import {
  FireExtinguisher,
  FolderArchive,
  MessageCircleDashed,
  Send,
  Trash2,
} from "lucide-react";
import React, { useState, useTransition } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { MutatingDots } from "react-loader-spinner";

type Props = {
  content: TComment;
  DressMaker: IDressMaker;
  refetch: () => void;
};

const Item = ({ content, DressMaker, refetch }: Props) => {
  // console.log(DressMaker);
  const [isPending, startTransition] = useTransition()
  const [isMessaging, setisMessaging] = useState(false);
  const [isSaved, setisSaved] = useState(content?.status ? true : false);

  const { comment, createdAt, id } = content;

   function handleSaveSuggestion() {
    startTransition(async() => {
      setisSaved((prev) => !prev);
      try {
        const resp = await DataService.put("save-comment", {
          id,
          status: content?.status,
        });
        if (resp.data) {
          setTimeout(() => {
            refetch();
          }, 1500);
        }
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }

    })
  }
  return (
    <div
      className={`relative mb-3 md:pl-3 ${
        content.status ? "bg-red-50" : "bg-white"
      }`}
    >
      <div className="flex gap-4 flex-col md:flex-row items-center ">
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-300 text-white">
          <h1>AO</h1>
        </div>
        <div className="flex-1 w-full shadow-sm md:p-3">
          <div className="flex flex-col md:flex-row md:justify-between">
            <h1 className="font-semibold mb-3">
              Suggestion{" "}
              <span className="mx-3"> Created on : {createdAt} </span>{" "}
              <span className="">
                By: {DressMaker?.name} {DressMaker?.lastname}{" "}
              </span>{" "}
            </h1>
            {/* <Switch checked={isSaved} onCheckedChange={handleSaveSuggestion} /> */}
          </div>
          <p className="text-justify"> {comment} </p>
          <div className="flex justify-center md:justify-end items-center gap-3 my-5">
            {isMessaging && (
              <Button
                variant="outline"
                className="flex gap-1 h-7 items-center text-xs font-thin rounded-lg  4 bg-green-500 text-white hover:text-white hover:bg-green-500"
              >
                <Send className="w-4" />
                <span>Envoyer</span>
              </Button>
            )}
            <Button
              onClick={() => handleSaveSuggestion()}
              variant="outline"
              className="flex gap-1 h-7 items-center text-xs font-thin rounded-lg  4 text-green-500 hover:text-white hover:bg-green-500"
            >
              <FolderArchive className="w-4" />
              <span> {content?.status ? "Unsave" : "Save"} </span>
            </Button>

            <div className="flex justify-center w-8  items-center h-7 text-xs font-thin rounded-lg bg-blue-500 text-white cursor-pointer">
              <Button
                variant="ghost"
                onClick={() => setisMessaging(!isMessaging)}
              >
                <MessageCircleDashed className="h-4" />
              </Button>
            </div>
            <div className="flex justify-center w-8  items-center h-7 text-xs font-thin rounded-lg bg-red-500 text-white cursor-pointer">
              <Trash2 className="h-4" />
            </div>
          </div>
          {isMessaging && (
            <div className="flex justify-center">
              <Textarea
                className=" w-[80%] mr-2 mt-3"
                placeholder="Ecrire le message au couturier."
              />
            </div>
          )}
        </div>
      </div>
      <div className="h-1 bg-slate-500 w-[100px] mx-auto rounded-md"></div>
     {isPending && <div className="flex justify-center items-center absolute top-1 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#ffff"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>}
      {/* send message */}
    </div>
  );
};

export default Item;
