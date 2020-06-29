exports.seed = async function (knex) {
  await knex("resources").insert([
    { project_id: 1, name: "Lambda", description: "School" },
    { project_id: 1, name: "Endorsement", description: "to get hire" },
    { project_id: 2, name: "Car", description: "Tesla" },
    { project_id: 2, name: "keys", description: "to open door" },
    { project_id: 3, name: "Sprints", description: "to show what i know" },
    {
      project_id: 3,
      name: "Endorsement",
      description: "to prove I am hirable",
    },
  ]);
};
