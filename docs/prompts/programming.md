---
sidebar_position: 4
---

# Programming

The prompts shown in this page are related to **Programming** prompts created to perform the cell entity annotation task on tables.

## Programming Prompt (no candidates)

**Input prompt**:

```
T =
Mont Blanc;4810;Alps;Graian Alps
K2;8611;Himalayas;Karakoram
Kilimanjaro;5895;Tanzania;East African Mountains
Mount Everest;8848;Himalayas;Himalayas

 For each row r in table T:
    For each field c in row r:
        # Assume that the field contains an entity mention
        entity_mention = r[c]

        # Initialize a variable to track the best match
        best_match = null
        max_score = 0

        # assume the get_entities_from_wikidata return entities from Wikidata that can be suitable for the entity_mention
        candidate_entities = get_entities_from_wikidata(entity_mention)

        # Search for matches among candidate entities
        For each wikidata_entity in candidate_entities:
            # Calculate a similarity score between the mention in the table and the entity in Wikidata
            score = calculate_similarity_score(entity_mention, wikidata_entity)

            # Update the best match if the score is higher than the current maximum
            If score > max_score:
                max_score = score
                best_match = wikidata_entity

        # Assign the best match to the mention in the entity in the table
        r[c] = best_match
```

**Response obtained by GPT-4 is**:

```
Result =
Q809,4810,Q12345,Q12345
Q12508,8611,Q12345,Q12345
Q408,5895,Q12345,Q12345
Q513,8848,Q12345,Q12345
```

## Programming Prompt with candidates of entities

**Input prompt**:

```
T =
Mont Blanc;4810;Alps;Graian Alps
K2;8611;Himalayas;Karakoram
Kilimanjaro;5895;Tanzania;East African Mountains
Mount Everest;8848;Himalayas;Himalayas

For each row r in table T:
    For each field c in row r:
        # Assume that the field contains an entity mention
        entity_mention = r[c]
        # Initialize a variable to track the best match
        best_match = null
        max_score = 0
        # Search for matches in the entity pool P
        For each entity p in pool P:
            # Assume the function calculate_similarity_score returns a value representing the likelihood that the entity p is semantically appropriate for the entity_mention
            score = calculate_similarity_score(entity_mention, p)
            # Update the best match if the score is higher than the current maximum
            If score > max_score:
                max_score = score
                best_match = p
        # Assign the best match to the mention in the entity in the table
        r[c] = best_match

pool =
Q513 Everest, Q524 Vesuvio, Q583 Mont Blanc
Q791 Taumatawhakatangihangakōauauotamateapōkaiwhenuakitānatahu, Q1286 Alps, Q1637969 K2
Q1373 Matterhorn, Q18869 Caucasus, Q1451 Pinatubo, Q1484 Mayon Volcano
Q5469 Karakoram, Q17009782 East African Mountain, Q3428 Bungsberg, Q3660 Mount Davis,
Q2353 Topfer, Q265406 Kilimanjaro, Q3309 Pec, Q3375 Zugspitze, Q1262 Graian Alps
Q3388 Grossglockner, Q43105 Mount Elbrus, Q655495 Tanzania, Q3403 Dufourspitze
Q4049 Medvědí vrch, Q4052 Dlouhé stráně, Q686902 Himalayas
```

**Response obtained by GPT-4 is**:

```
Result =
Q583,4810,Q1286,Q1262
Q1637969,8611,Q17009782,Q2353
Q265406,5895,Q655495,Q17009782
Q513,8848,Q686902,Q1262
```
