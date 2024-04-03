import React from "react";

import Header from "./Header";
import CategoryBar from "./CategoryBar";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header user={user} onLogin={() => setUser({ name: "Jane Doe" })} onLogout={() => setUser(undefined)} onCreateAccount={() => setUser({ name: "Jane Doe" })} />
      <CategoryBar categories={["home", "category1", "category2", "category3", "category4", "category5", "category6"]} />

      <section className="flex justify-between gap-4 px-20 mb-8 text-black">
        <div>slide</div>
        <div>slide</div>
        <div>slide</div>
      </section>

      <section className="flex flex-wrap justify-between gap-4 px-20 mb-8 text-black">
        <div className="w-1/4">1</div>
        <div className="w-1/4">2</div>
        <div className="w-1/4">3</div>
        <div className="w-1/4">4</div>
        <div className="w-1/4">5</div>
        <div className="w-1/4">6</div>
        <div className="w-1/4">7</div>
        <div className="w-1/4">8</div>
        <div className="w-1/4">9</div>
      </section>
    </article>
  );
};
