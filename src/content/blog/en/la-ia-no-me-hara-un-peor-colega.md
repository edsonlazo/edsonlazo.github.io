---
pubDatetime: 2026-11-12T05:00:00Z
title: AI won't make me a worse coworker
slug: ai-wont-make-me-a-worse-coworker
featured: false
draft: false
tags:
  - ai
  - communication
  - remote work
description:
  I use Claude every day to communicate at work, but I don't delegate my
  judgment to it. Why reviewing what I send is respecting other people's time.
---

> Ironically (or not), this post was translated using AI. I checked the translation before publishing.

One of the keys to working remotely is asynchronous collaboration. We usually collaborate through different tools: email, Slack, Discord, etc.

Something I've noticed is that AI has made its way into our workspaces and that it's often not used carefully. Not with bad intentions, but I have received a few [grenades](https://noslopgrenade.com/) (messages generated in seconds that end up taking the recipient time to understand) that have left me badly wounded.

## I'm not against AI

I love using Claude to communicate at work; it really helps me "save" time. Some ways I use it that are genuinely good:

- Getting summaries (TL;DR) of very long conversation threads to understand what's needed from me when I'm mentioned.
- Investigating bugs based on what's being said in a conversation.
- Getting a clear list every morning of what I need to finish that day (approving PRs, replying to threads) and, at the end of the day, what was left unfinished so I can plan the next day.

But what I don't delegate to Claude is my judgment. If I need to use Claude (or any agent) to reply to a conversation, I always make it clear what I want to communicate and what decisions I'm making, ask it to put together a draft before sending anything, review it, edit it, and then send it.

This filter is important because, by doing it, I'm respecting other people's time.

## If you don't read it, why would I?

With AI agents it's easy to just say: "reply to this conversation for me." It takes you less than 10 seconds and the agent will generate a reply pretty quickly, which is great. But what took you no effort to generate can take other people several minutes to read, interpret, and respond to.

I think it's a lack of consideration toward your coworkers. When they bring you into a conversation, they expect to read a reply from you; they want to see your opinion, your judgment, because otherwise they would have asked their own agent directly.

To be clear, I don't mean we should take longer to write our messages, but rather that we should make sure what we send actually represents what we want to communicate.

Here's an example of a bad reply:

![A long AI-generated reply to a simple question about moving a deploy, with options, emojis, and no decision](/assets/reply-without-judgment.png)

And here's a good one:

![A short, direct reply to the same question that makes a clear decision](/assets/reply-with-judgment.png)

## I delegate the writing, not the judgment

Asking AI to write for you is different from asking it to think for you. This is something I've experienced firsthand.

A while ago, someone from an internal team reported a bug: certain documents weren't showing up on the platform they used to review them.

In the thread where the report was raised, someone asked the AI to find where the problem was and fix it. A PR was opened with the "fix" and I was added to approve it.

To be honest, I was tempted to just approve the change and get on with my day, but I decided to ask myself, and them: was this really a bug? The platform had been working this way for a while and nobody had complained.

So I decided to dig a little deeper into the flow for this type of client, and we realized that their documents are never reviewed by our internal team: their flow was different and the documents were approved automatically. In the end, we explained to the person who reported the problem that this wasn't a bug, it was the expected behavior, and we closed the PR without merging it.

This is the kind of situation where agents shine, but also fail. If you ask them to fix something, they'll probably come up with a solution, but it's still your responsibility to ask whether something is actually broken.

## The responsibility is mine

My coworkers don't work with my agent, they work with me. If a message is sent under my name, it's my responsibility, and people expect me to be able to stand behind what I wrote.

AI helps me stay organized, not lose track of conversations, and not leave things unfinished. But reading what I write and being aware of the decisions I'm making is still my job, and as long as I keep doing it, AI won't make me a worse coworker.
