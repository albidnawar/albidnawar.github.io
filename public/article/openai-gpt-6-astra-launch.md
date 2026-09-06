# OpenAI Launches GPT-6 Astra, Claiming New Records in Reasoning, Coding, and Computer Use

OpenAI has introduced GPT-6 Astra, a new flagship model the company is positioning as its most capable and most aligned release to date. The model is rolling out first to a limited set of organizations, with broader access for ChatGPT Plus, Pro, Business, and Enterprise users, as well as through the OpenAI API, Microsoft Azure, and AWS Bedrock, expected in the coming days.

## Benchmark Claims

OpenAI reports that Astra sets new highs across a wide range of evaluations, including a 98% score on FrontierMath Tier 4, a 99.9% score on the ARC-AGI-3 reasoning benchmark, and a perfect 100% on ExploitBench, a benchmark that measures cybersecurity exploit development. The company also says the model has already contributed to solving previously unsolved problems in mathematics.

Greg Kamradt of the ARC Prize Foundation, which administers the ARC-AGI benchmarks, said Astra effectively reached "human parity" on ARC-AGI-3, calling it a meaningful step change in frontier-model performance.

OpenAI also says Astra is significantly faster and cheaper to run than its predecessor, GPT-5.6 Sol, on many tasks. On one internal computer-use benchmark, the company reports the new model scored higher while taking roughly 40 minutes per task on average, compared with about 75 minutes for GPT-5.6 Sol.

## Computer Use and Everyday Office Work

A central theme of the release is autonomous computer use. OpenAI says Astra can fill out online forms, update CRM records, manage calendars, conduct research and draft summaries, analyze scientific data and generate plots, build and QA-test websites, and troubleshoot software largely on its own. The company also highlights improvements in document, spreadsheet, and slide-deck generation, saying the model does a better job matching a user's existing templates and writing style rather than producing generic output.

Third-party partners echoed those claims. Cognition, maker of the AI coding tool Devin, said it is integrating Astra into its product at launch and saw clearer testing output as a result. Legal AI company Harvey said the model approaches legal work more like an experienced attorney would, distinguishing verified records from unsupported claims and turning ambiguities into concrete drafting decisions.

## Coding and Science

OpenAI describes Astra as its strongest model yet for software engineering, pointing to gains on benchmarks such as Terminal-Bench 4.0 and DeepSWE, and introducing a new "notes" feature in its Codex tool that lets the model retain context across long sessions instead of repeatedly summarizing earlier work.

On the scientific side, OpenAI says Astra helped improve long-standing mathematical bounds related to gaps between prime numbers, and posted new highs on health- and life-science-related evaluations, including GPQA Diamond and HealthBench Professional.

## Cybersecurity: Capability and Guardrails

OpenAI disclosed that Astra crosses what it calls the "Critical" threshold for cybersecurity capability under its internal Preparedness Framework, meaning the model can identify and develop working exploits — including previously unknown vulnerabilities — at a level well beyond its predecessor. In testing without production safeguards, the company says the model discovered and used two previously unknown vulnerabilities, which it is now disclosing to the affected software maintainers.

Because of this, OpenAI says the publicly available version of Astra is restricted from carrying out more advanced offensive cybersecurity tasks, such as building proof-of-concept exploits, though the company plans to loosen those restrictions for vetted defensive use cases through a program it calls OpenAI Daybreak.

## Alignment and Safety

OpenAI frames Astra as its most aligned model to date, saying it is less likely to exceed its intended task scope, attempt to bypass review safeguards, or make misleading claims about its own capabilities compared with GPT-5.6 Sol. As one test of this, the company built an evaluation — informed by an earlier real-world incident — to check whether a model would overstep its authorized scope when faced with a difficult or impossible task. OpenAI reports Astra did so in none of the tested cases, versus 48% of the time for its predecessor.

The company says it is also deploying additional misalignment-monitoring systems in production for Astra-class models and continuing to publish detailed findings in an accompanying system card.

## Availability and Pricing

GPT-6 Astra is available in the OpenAI API under the name `gpt-6-astra`, with standard pricing set at $10 per million input tokens and $50 per million output tokens; a faster processing mode is available at twice the price. Enterprise administrators can enable the model for their organization, though it is off by default at launch. A more capable "Astra Pro" tier is also being made available to Pro, Business, and Enterprise subscribers.
