"use client";
import { Fragment, useState } from "react";
import Container from "../container";
import { Heading } from "../ui/heading";
import { services } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Paragraph } from "../ui/paragraph";

const Service = () => {
  const [selectOption, setSelectOption] = useState<"buy" | "sell" | "rent">(
    "buy"
  );
  const handleClicks = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const option = e.currentTarget.getAttribute("data-option") as
      | "buy"
      | "sell"
      | "rent";
    setSelectOption(option);
  };
  return (
    <Container>
      <div className="mt-16">
        <Heading as="h2" size="2">
          Discover how we can help
        </Heading>

        <div className="pt-6 flex gap-2">
          <button
            className={` ${
              selectOption === "buy"
                ? "bg-button-primary-default text-text-primary-inverted"
                : "bg-transparent border hover:border-border-primary-hover border-border-primary-default text-text-primary-default"
            } rounded-3xl font-normal text-base leading-6 px-4 py-2 cursor-pointer`}
            data-option="buy"
            onClick={(e) => handleClicks(e)}
          >
            Buying
          </button>
          <button
            className={` ${
              selectOption === "rent"
                ? "bg-button-primary-default text-text-primary-inverted"
                : "bg-transparent border hover:border-border-primary-hover border-border-primary-default text-text-primary-default"
            } rounded-3xl font-normal text-base leading-6 px-4 py-2 cursor-pointer`}
            data-option="rent"
            onClick={(e) => handleClicks(e)}
          >
            Renting
          </button>
          <button
            className={` ${
              selectOption === "sell"
                ? "bg-button-primary-default text-text-primary-inverted"
                : "bg-transparent border hover:border-border-primary-hover border-border-primary-default text-text-primary-default"
            } rounded-3xl font-normal text-base leading-6 px-4 py-2 cursor-pointer`}
            data-option="sell"
            onClick={(e) => handleClicks(e)}
          >
            Selling
          </button>
        </div>

        <div className=" mt-8 flex gap-6 flex-wrap">
          {services.map(
            (service, serviceIdx) =>
              service.option === selectOption && (
                <Fragment key={serviceIdx}>
                  {service.content.map((content, idx) => (
                    // <ServiceCard
                    //   title={content.title}
                    //   subtitle={content.subtitle}
                    //   Icon={content.Icon}
                    //   key={idx}
                    // />
                    <Card
                      className="w-[400px] md:h-[180px] p-4 flex flex-col gap-2 hover:border-border-primary-hover cursor-pointer shrink grow h-fit"
                      key={idx}
                    >
                      <CardHeader className="flex justify-between items-center">
                        <Heading as="h6" size="6">
                          {content.title}
                        </Heading>
                        <content.Icon />
                      </CardHeader>
                      <CardContent>
                        <Paragraph color="gray">{content.subtitle}</Paragraph>
                      </CardContent>
                    </Card>
                  ))}
                </Fragment>
              )
          )}
        </div>
      </div>
    </Container>
  );
};

export default Service;
