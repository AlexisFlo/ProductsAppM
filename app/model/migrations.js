import { createTable, schemaMigrations } from "@nozbe/watermelondb/Schema/migrations";

export default schemaMigrations({
  migrations: [
    {
      // ⚠️ set this to a number one larger than the current schema version
      toVersion: 2,
      steps: [
        createTable({
          name: "comments",
          columns: [
            { name: "post_id", type: "string", isIndexed: true },
            { name: "body", type: "String" },
          ],
        }),
      ],
    },
    // We'll add migration definitions here later
  ],
});
