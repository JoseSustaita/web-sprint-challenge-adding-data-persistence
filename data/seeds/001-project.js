exports.seed = async function (knex) {
  await knex("project").insert([
    {
      name: "Get a new job",
      description: "Perferably a web developer job",
      completed: true,
    },
    {
      name: "Buy a new car",
      description: "That new tesla model Y looks nice",
      completed: false,
    },
    {
      name: "Finish Lamnda",
      description: "Get a web dev job",
      completed: false,
    },
  ]);
};
