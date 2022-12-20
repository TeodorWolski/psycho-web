import React from 'react';

export const HeroSection = () => {
  return (
    <div className="mx-3 my-5 h-72 flex w-100 align-center justify-around">
      <section className="w-3/4 flex flex-col flex-end">
        <h1 className="text-lg p-2 font-medium">
          Lorem ipsum dolor sit amet,{' '}
          <strong className="font-extrabold text-primary">
            {' '}
            consectetur adipiscing elit.
          </strong>
        </h1>
        <p className="text-sm w-full p-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          in nobis a soluta tenetur
        </p>
        <button className="font-extrabold text-xs px-10 py-3 mt-3 mr-auto text-white bg-tertiary  shadow-black rounded-3xl">
          Click me
        </button>
      </section>
      <section className=" w-1/2 flex flex-col items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dogge_Odin.jpg/800px-Dogge_Odin.jpg"
          className="h-24 w-24 rounded-full border-solid border-4 border-tertiary z-10 -translate-x-8"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UTTgIMBNz2UrFY5Vruz2ansVuxmdOg--cnztA04_DPrUtC5zaJkKABSrU2-U34eKCcA&usqp=CAU"
          alt="rounded"
          className="h-24 w-24 rounded-full border-solid border-4 border-tertiary translate-x-4 -translate-y-8"
        />
      </section>
    </div>
  );
};
