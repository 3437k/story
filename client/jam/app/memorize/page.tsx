"use client";

import jp from "@/app/data/jp";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

interface LangSet {
  name: string;
  clickCount: number;
}

export default function Page() {
  const [clickedItems, setClickedItems] = useState<any>([]);
  const [langSet, setLangSet] = useState<LangSet[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleHint = () => {
    setIsVisible(!isVisible);
  };

  const handleLogClear = () => {
    setClickedItems([]);
    setLangSet([]);
  };

  const handleAddClickedLang = (character: string) => {
    setClickedItems((prev: any) => [
      ...prev,
      {
        character,
        createdAt: new Date(),
      },
    ]);

    const findIdx = langSet.findIndex((items) => items.name === character);
    if (findIdx === -1) {
      setLangSet((prev) => [
        ...prev,
        {
          name: character,
          clickCount: 1,
        },
      ]);
    } else {
      // calc sum click count
      setLangSet((prev) =>
        prev.map((items) =>
          items.name === character
            ? { ...items, clickCount: items.clickCount + 1 }
            : items
        )
      );

      // order by desc
      setLangSet((prev) =>
        prev.slice().sort((a, b) => b.clickCount - a.clickCount)
      );
    }
  };

  return (
    <div className="flex justify-center items-start p-4 gap-4">
      {/* 화면이 넘어가면 스크롤이 안됨 */}
      <div className="fixed top-0 left-0 flex flex-col gap-2 w-40">
        <Button color="primary" onClick={handleHint}>
          Hint
        </Button>
        <Button color="primary" onClick={handleLogClear}>
          Clear
        </Button>
        <div className="flex flex-wrap  gap-2">
          {langSet.map((langs) => {
            return (
              <div key={langs.name} className="text-4xl ">
                <span>{langs.name}</span>
                <span>{langs.clickCount}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-wrap justify-center items-center">
          <div className="">
            <div className="flex flex-col flex-wrap text-6xl gap-2">
              {jp.map((items, index) => {
                return (
                  <div key={index} className="flex flex-wrap gap-4">
                    {items.map((item, index) => {
                      return (
                        <div key={index + item.hiragana}>
                          <Card
                            isPressable
                            shadow="sm"
                            onPress={(e) => {
                              // console.log("item pressed", item.hiragana);
                              handleAddClickedLang(item.hiragana);
                              console.log(e);
                            }}
                            // className="bg-rose-100"
                          >
                            <CardBody className="text-4xl justify-center items-center">
                              <span>{item.hiragana}</span>
                            </CardBody>
                            {isVisible && (
                              <>
                                <Divider />
                                <CardFooter className="justify-center items-center text-base">
                                  <span>{item.pronunciation}</span>
                                </CardFooter>
                              </>
                            )}
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="">
            <div className="flex flex-col flex-wrap text-6xl gap-2">
              {jp.map((items, index) => {
                return (
                  <div key={index} className="flex flex-wrap gap-4">
                    {items.map((item, index) => {
                      return (
                        <div key={index + item.hiragana}>
                          <Card
                            isPressable
                            shadow="sm"
                            onPress={(e) => {
                              // console.log("item pressed", item.hiragana);
                              handleAddClickedLang(item.katakana);
                              console.log(e);
                            }}
                            // className="bg-rose-100"
                          >
                            <CardBody className="text-4xl justify-center items-center">
                              <span>{item.katakana}</span>
                            </CardBody>
                            {isVisible && (
                              <>
                                <Divider />
                                <CardFooter className="justify-center items-center text-base">
                                  <span>{item.pronunciation}</span>
                                </CardFooter>
                              </>
                            )}
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
