exports.seed = async function (knex) {
  await knex("task").insert([
    {
      project_id: 1,
      description: "Practice code problems",
      notes: "leetcode",
      completed: true,
    },
    {
      project_id: 1,
      description: "Reach out to recruiters",
      notes: "make connections",
      completed: true,
    },
    {
      project_id: 2,
      description: "Get a car",
      notes: "Tesla",
      completed: true,
    },
    {
      project_id: 2,
      description: "Get the model Y",
      notes: "",
      completed: false,
    },
    {
      project_id: 3,
      description: "Get endorsed",
      notes: "",
      completed: false,
    },
    {
      project_id: 3,
      description: "Apply for jobs after getting endorsed",
      notes: "Go all in!",
      completed: false,
    },
  ]);
};
