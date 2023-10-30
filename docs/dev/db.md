## Q & A
### Why are there tables like "implementation" and "implementation_revisions"?
In a PostgreSQL database (and in relational databases in general), tables and revision tables are often used to track data changes and versions. This is commonly employed in applications where data history is important or where version control is required. In your specific case, you mentioned tables like "implementation" and "implementation_revisions." Here's an explanation of why such tables might be used:

1. "implementation" Table:
   - This table could be the primary table where current or active implementation records are stored. These are the current data used in your application. Changes to these data are typically first saved in this table.

2. "implementation_revisions" Table:
   - The "implementation_revisions" table could serve to store previous revisions of implementation records. Each change to the data in the "implementation" table could be saved in this table as a separate revision or version. This records the history of the data and allows for reverting to previous states or tracking who made what changes and when.

The use of revision tables offers several advantages, including:

- Traceability: You can track changes to data and review when and by whom they were made.
- Recoverability: You can go back to an earlier point in history by retrieving an older revision of the data.
- Security: You can ensure that data changes are logged and auditable to maintain data integrity and compliance requirements.

This model is particularly useful in applications where data changes need to be closely monitored or where it's essential to have a complete history of data modifications.