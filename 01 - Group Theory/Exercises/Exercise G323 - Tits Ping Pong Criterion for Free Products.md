---
title: "Exercise G323: Tits Ping-Pong Criterion for Free Products"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - free-products
  - ping-pong-lemma
  - group-actions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 54, printed p. 81, PDF p. 96"
created: 2026-08-28
---

# Exercise G323: Tits Ping-Pong Criterion for Free Products

## Problem Statement

> [!question] Exercise 54 (Tits)
> Let subgroups $\{G_i\}_{i\in I}$ generate a group $G$ acting on a set $S$. For each $i$, let $S_i\subseteq S$, and choose $s\in S\setminus\bigcup_iS_i$. Assume that for every $g\in G_i\setminus\{e\}$,
>
> $$
> gS_j\subseteq S_i\quad(j\ne i),
> \qquad
> g(s)\in S_i.
> $$
>
> Prove that $G$ is the coproduct (free product) of the family $\{G_i\}_{i\in I}$.

## Hints

> [!hint]- Hint 1
> Apply a nonempty reduced word to the base point $s$, starting with its rightmost factor.

## Solution

> [!success]- Solution
> Since the $G_i$ generate $G$, the canonical homomorphism
>
> $$
> \Phi:*_{i\in I}G_i\longrightarrow G
> $$
>
> is surjective. It remains to prove injectivity. Let
>
> $$
> w=g_1g_2\cdots g_m
> $$
>
> be a nonempty reduced word, where $g_r\in G_{i_r}\setminus\{e\}$ and $i_r\ne i_{r+1}$. Starting on the right, $g_m(s)\in S_{i_m}$. Then $g_{m-1}$ sends that point into $S_{i_{m-1}}$, and induction yields
>
> $$
> w(s)\in S_{i_1}.
> $$
>
> But $s$ lies in none of the $S_i$, so $w(s)\ne s$. Thus no nonempty reduced word maps to the identity of $G$, and $\Phi$ is injective. Therefore $G\cong*_{i\in I}G_i$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Exercises/Exercise G322 - Amalgamated Free Products as Group Pushouts|Exercise G322]]
- [[01 - Group Theory/Exercises/Exercise G324 - Free Matrix Groups from Projective Ping Pong|Exercise G324]]

## Notes

- **Method boundary:** The proof establishes injectivity of the canonical map from the abstract free product; generation supplies surjectivity.
- **Source status:** [S2, Ch. I, Ex. 54, printed p. 81, PDF p. 96]. The reduced-word proof is independent.

