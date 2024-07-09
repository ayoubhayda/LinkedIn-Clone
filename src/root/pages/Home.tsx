import React from "react";
import {
  Ad,
  FeedCard,
  FeedFilter,
  MiniFooter,
  ProfileCard,
  RecentCard,
  Recommended,
  ShareBox,
} from "../../components/home";
import Posts from "../../constants";

const Home = () => {
  return (
    <div className="w-full min-h-screen py-[15px] md:py-[24px] md:px-[24px]">
      <div className="main-container min-h-screen flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between">
        <section className="flex flex-col gap-2 w-full md:w-[225px]">
          <ProfileCard />
          <RecentCard />
        </section>
        <section className="flex flex-col flex-1 gap-[6px] min-h-screen">
          <ShareBox />
          <FeedFilter />
          {Posts.map((post, index) => (
            <FeedCard key={index} {...post} />
          ))}
        </section>
        <section className="hidden lg:flex flex-col gap-2 w-[300px]">
          <Recommended />
          <Ad />
          <MiniFooter />
        </section>
      </div>
    </div>
  );
};

export default Home;
