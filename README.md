# mongodboperators

Query Selectors<br />


<b>Comparison:</b>For comparison of different BSON type values, see the specified BSON comparison order.<br />

1)$eq  :Matches values that are equal to a specified value.<br />
2)$gt  :Matches values that are greater than a specified value.<br />
3)$gte :Matches values that are greater than or equal to a specified value.<br />
4)$in  :Matches any of the values specified in an array.<br />
5)$lt  :Matches values that are less than a specified value.<br />
6)$lte :Matches values that are less than or equal to a specified value.<br />
7)$ne  :Matches all values that are not equal to a specified value.<br />
8)$nin :Matches none of the values specified in an array.<br />


<b>Logical:</b>

1)$and :Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.<br />
2)$not :Inverts the effect of a query expression and returns documents that do not match the query expression.<br />
3)$nor :Joins query clauses with a logical NOR returns all documents that fail to match both clauses.<br />
4)$or  :Joins query clauses with a logical OR returns all documents that match the conditions of either clause.<br />


<b>Element:</b>

1)$exists :Matches documents that have the specified field.<br />
2)$type   :Selects documents if a field is of the specified type.<br />

<b>Evaluation:</b>

1)$expr :Allows use of aggregation expressions within the query language.<br />
2)$jsonSchema :Validate documents against the given JSON Schema.<br />
3)$mod :Performs a modulo operation on the value of a field and selects documents with a specified result.<br />
4)$regex :Selects documents where values match a specified regular expression.<br />
5)$text :Performs text search.<br />
6)$where :Matches documents that satisfy a JavaScript expression.<br />
