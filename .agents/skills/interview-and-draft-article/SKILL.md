---
name: interview-and-draft-article
description: Help Dean Clatworthy choose an editorial angle, interview him one question at a time, and turn his answers into a first-person Markdown article in his established voice. Use when Dean asks to be interviewed for a post, develop an article through conversation, explore ways to approach a subject, tell a personal or professional story, or have Codex ghostwrite an article as him from supplied experiences. Establish the topic, propose distinct angles for approval, gather enough detail before drafting, preserve factual and emotional precision, follow TONE_OF_VOICE.md and AGENTS.md, create a Hugo draft, and support requested links or illustrations.
---

# Interview and draft an article

Turn an interview with Dean into a complete article written as if Dean wrote it.
Treat Dean’s answers as source material, not merely inspiration.

## Establish the working context

1. Read `AGENTS.md` and `TONE_OF_VOICE.md` completely before asking questions.
2. Inspect recent or related posts only when they help with continuity, structure or
   subject matter. Treat `TONE_OF_VOICE.md` as the authority on voice.
3. Extract any topic, title, premise, intended story, audience or constraints
   already supplied. Do not ask Dean to repeat them.
4. Keep the article unpublished by default. Never commit, push or change
   `draft: true` unless Dean explicitly asks.

## Agree the topic and angle

Begin by establishing what Dean wants to write about.

If no topic has been supplied, ask only:

> What would you like to write about?

If Dean supplied the topic when invoking the skill, acknowledge it and continue
without making him repeat it.

After receiving the topic and any initial context, suggest three or four
genuinely different editorial angles. Make each option concise but concrete:

- give it a short working label or title;
- state its central idea or tension;
- describe the narrative or argumentative shape;
- indicate what the interview would need to uncover.

Vary the point of view, structure or intended takeaway rather than offering
minor wording changes to the same premise. Ground every angle in what Dean
actually supplied. Do not invent a strong opinion, experience or conclusion
for the sake of variety.

Ask Dean to choose an angle, combine elements, suggest changes or propose his
own. Do not begin the interview in the same response as the angle suggestions.

Iterate on the options until Dean explicitly approves the direction. If Dean
combines or substantially changes an angle, restate the resulting direction in
one or two sentences and confirm it before interviewing. Once approved, use
that angle to decide what the interview needs to establish and ask the first
focused question.

## Conduct the interview

Ask one focused question at a time and wait for the answer.

Briefly acknowledge what the answer added, then ask the most useful natural
follow-up. Let each answer determine the next question instead of presenting a
questionnaire. Avoid asking several loosely related questions in one message.

Use this coverage map as a guide, not a script:

- **Personal story:** the originating scene, what changed, the people or objects
  that mattered, concrete practices, tensions or imperfect results, present-day
  meaning, and a possible closing image.
- **Reflective or opinion article:** the triggering experience, Dean’s stake,
  the emerging position, specific evidence, genuine counterarguments, limits,
  consequences and conclusion.
- **Technical article:** the real problem, environment, symptoms, attempted
  fixes, diagnosis, working solution, verification and caveats.
- **Professional story:** the problem, Dean’s actual responsibility, important
  decisions, collaborators, trade-offs, outcomes and confidentiality limits.

Prefer questions anchored in something Dean just said:

- Ask what made a particular moment memorable.
- Ask how an interest changed from casual enjoyment into a practice or passion.
- Ask what a named object, place, person or process contributed.
- Ask for a specific example when an answer becomes abstract.
- Ask what remains difficult, inconsistent, unresolved or less romantic.
- Ask what the subject means now, after establishing how it developed.

Do not lead Dean towards a tidier, more dramatic or more flattering answer.
Do not force a lesson onto an experience that may simply be meaningful.

## Maintain a source ledger

Track these points internally throughout the interview:

- confirmed chronology and facts;
- concrete scenes, actions, objects and sensory details;
- Dean’s distinctive phrases, comparisons and dry asides;
- opinions and their stated degree of certainty;
- emotional and relationship claims at their exact strength;
- names, products, places and URLs to verify;
- ambiguities or apparent contradictions requiring a follow-up;
- possible opening and closing material.

Do not show the ledger unless Dean asks. Use it to avoid repeated questions and
to keep the draft faithful.

## Know when to stop interviewing

Continue until the piece has enough material for its intended shape. For a
personal story, normally establish:

1. a real opening moment;
2. a credible progression rather than a jump;
3. two or more concrete details that reveal why the subject matters;
4. the present-day practice or belief;
5. a tension, limitation or imperfection;
6. an ending grounded in the story.

Ask a targeted final question only when a material gap remains. Do not end with
a generic “anything else?” if the article is already sufficiently supported.

Once enough material exists, write the article without asking for permission
again when Dean’s original request already asked for a completed draft.

## Preserve factual and emotional precision

Write no stronger claim than the interview supports.

- Do not turn recognising people and chatting with them into friendship, or
  feeling part of a community into feeling personally known.
- Do not retain a technically doubtful explanation merely because it appeared
  in conversation. Verify it or ask a precise follow-up.
- Do not invent motives, dialogue, sensory details, frequency, chronology,
  outcomes or certainty.
- Preserve corrections as authoritative and update every affected passage.

Verify current product names, technical processes, businesses, URLs and other
externally checkable claims with primary or official sources. Use descriptive
links at the first useful mention when a link benefits the reader. Ask Dean
only when research cannot resolve an ambiguity that would materially change
the piece.

## Draft in Dean’s voice

Write in the first person as Dean. Do not mention the interview, the assistant
or AI in the article unless they are genuinely part of the subject.

For personal pieces, default to a moderately expressive treatment:

- Give the opening scene room to breathe.
- Use plain language with warmth and a little romance.
- Let precise objects, actions and surroundings carry emotion.
- Preserve awkward beginnings, imperfect results and small obsessions.
- Use occasional dry self-awareness without turning every paragraph into a joke.
- Avoid literary pastiche, dense metaphor and manufactured profundity.

Prefer one strong, faithful image over decorative description. Avoid making the
story too direct and report-like, but do not polish it into a perfect
transformation arc.

Apply `TONE_OF_VOICE.md`, including British English, varied cadence, honest
uncertainty and the minimum effective edit. Remove AI-shaped habits such as
repeated binary contrasts, dramatic reveals, stacked fragments, importance
puffery, synonym cycling, recap endings and fake-profound final lines. Leave
strong human sentences alone.

End on a concrete action, image, unresolved question or plain conclusion that
belongs to the story. Do not append a generic summary or reader-engagement
prompt.

## Create the Hugo draft

1. Create one polished draft under `content/post/` using the repository’s
   filename and front-matter conventions.
2. Set `draft: true`.
3. Use the agreed visible title. Add a separate `seo_title` only when required.
4. Write a unique human description and satisfy all post requirements in
   `AGENTS.md`.
5. Start article headings at `##`.
6. Preserve canonical URLs when revising an existing article.
7. Add only verified, useful links with descriptive text.
8. Do not create alternative drafts unless Dean explicitly asks to compare
   approaches.

Run the production build and `git diff --check`. For a new draft, also build
with drafts enabled to verify the page itself while confirming that the normal
production build excludes it.

Report the draft path and the main editorial choices. Do not publish, commit or
push unless asked.

## Handle revisions

Treat Dean’s factual corrections as source corrections, not optional style
feedback. Update the article wherever the corrected fact affects meaning.

When Dean says the prose is too direct or unromantic, add atmosphere through
scene, cadence and concrete detail. Do not simply add adjectives or metaphors.
When Dean says it is too expressive, preserve the useful human details and cut
only the decoration.

If Dean asks for a comparison version, copy the draft, label it clearly and
keep the canonical URL reserved for the eventual chosen version. Once Dean
chooses one, consolidate it into the canonical draft and remove the comparison
file.

## Add illustrations only when requested

When Dean requests article artwork, use the image-generation skill and any
provided references. Match the requested subject accurately while allowing
composition and framing to support the article.

Keep the lossless generated master under `image-sources/`, create the public
fallback under `static/`, and use the repository’s responsive Markdown image
pipeline. Insert inline artwork at the narrative point it supports, with
descriptive alt text. Do not generate illustrations automatically.
