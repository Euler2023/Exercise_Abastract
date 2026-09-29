---
title: "Exercise ST9: Countable Products and Their Iteration"
topic: set-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 13, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise ST9: Countable Products and Their Iteration

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 13
> Let $S$ be a non-empty set. Let $S'$ denote the product $S$ with itself taken denumerably many times. Prove that $(S')'$ has the same cardinality as $S'$. [Given a set $S$ whose cardinality is strictly greater than the cardinality of $\mathbb R$, I do not know whether it is always true that $\operatorname{card}S=\operatorname{card}S'$.] Added 1994: The grapevine communicates to me that according to Solovay, the answer is “no.”

## Hints

> [!hint]- Hint 1: Regard an iterated sequence as an array
> An element of $(S^{\mathbb N})^{\mathbb N}$ is a family indexed by $\mathbb N\times\mathbb N$.

> [!hint]- Hint 2: Flatten the array
> Choose a bijection $\pi:\mathbb N\to\mathbb N\times\mathbb N$ and read the entries in that order. For the historical question, use a union of sets of successively larger cardinality and diagonalize block by block.

## Solution

> [!success]- Complete independent derivation
> Use $\mathbb N=\{0,1,\ldots\}$ to index a denumerable product and choose a pairing bijection $\pi:\mathbb N\to\mathbb N^2$. An array $(s_{i,j})$ is an element of $(S')'$. Define its flattened sequence by $t_n=s_{\pi(n)}$. Conversely recover the entry $s_{i,j}=t_{\pi^{-1}(i,j)}$. These operations are inverse, proving
>
> $$
> (S^{\mathbb N})^{\mathbb N}\cong S^{\mathbb N\times\mathbb N}\cong S^{\mathbb N}.
> $$
>
> This holds for every set $S$, including singleton and empty sets, and uses no choice.
>
> **Independent resolution of the historical question.** The bracket and 1994 addition are preserved as historical source text; they are distinct from the exercise's main assertion. Here is a concrete cardinal construction proving that $|S|=|S^{\mathbb N}|$ need not hold even when $|S|>|\mathbb R|$.
>
> Let $B_0=\mathbb R$ and recursively $B_{n+1}=\mathcal P(B_n)$. Form the disjoint union $S=\bigsqcup_{n\ge0}B_n$, with summands $S_n$. Cantor's theorem gives
>
> $$
> |S_n|=|B_n|<|B_{n+1}|\le|S|.
> $$
>
> Also $|S|\ge|B_1|>|\mathbb R|$. Suppose $F:S\to S^{\mathbb N}$ were surjective. For each $n$, the set
>
> $$
> D_n=\{F(s)(n):s\in S_n\}
> $$
>
> has cardinality at most $|S_n|<|S|$ and thus is a proper subset of $S$. Choose $a_n\in S\setminus D_n$ for each $n$. The sequence $a=(a_n)$ is not $F(s)$ for any $s\in S$, because $s$ lies in a summand $S_n$ and the $n$th coordinate differs. This contradicts surjectivity. Therefore no bijection $S\to S^{\mathbb N}$ exists. Constant sequences inject $S$ into $S^{\mathbb N}$, so the latter has strictly greater cardinality.
>
> The historical-question argument uses the axiom of choice, in particular the cardinal comparison and selections for $D_n$; these are the same assumptions used in Lang's appendix. It does not affect the unconditional flattening bijection for the numbered exercise.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]

## Notes

Main problem, bracketed question, and complete 1994 addition checked at printed p. 893 / PDF p. 908. Both proofs are independent derivations. The counterexample does not rely on an unlocated theorem attributed to Solovay and does not describe the author's historical question as presently unresolved.
