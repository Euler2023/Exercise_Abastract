---
title: "Exercise G317: Fixed Point Moments and Double Transitivity"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - burnside-lemma
  - source-issue
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 48, printed p. 80, PDF p. 95"
created: 2026-08-28
---

# Exercise G317: Fixed Point Moments and Double Transitivity

## Problem Statement

> [!question] Exercise 48 — printed statement
> Let $G$ be a group acting transitively on a set $S$ with at least two elements. For $x\in G$, let $f(x)$ be the number of points of $S$ fixed by $x$. Prove
>
> (a) $\sum_{x\in G}f(x)=|G|$;
>
> (b) $G$ is doubly transitive if and only if $\sum_{x\in G}f(x)^2=2|G|$.

> [!warning] Source issue
> The printed statement omits finiteness hypotheses, although both sums and the cardinality identities are ordinary finite counts. The proof below uses the intended hypothesis that $G$ (and hence the transitive set $S$) is finite.

## Hints

> [!hint]- Hint 1
> Apply Burnside's orbit formula first to $S$ and then to $S\times S$.

## Solution

> [!success]- Solution under the intended finite hypothesis
> **(a)** The action on $S$ is transitive, so Burnside's formula gives
>
> $$
> 1=|S/G|=\frac1{|G|}\sum_{x\in G}f(x),
> $$
>
> proving the first identity.
>
> **(b)** In the diagonal action on $S\times S$, the number of ordered pairs fixed by $x$ is $f(x)^2$. Hence
>
> $$
> |(S\times S)/G|=\frac1{|G|}\sum_{x\in G}f(x)^2.
> $$
>
> The diagonal $\{(s,s):s\in S\}$ is one orbit. The action is doubly transitive exactly when all off-diagonal pairs form one further orbit, that is, exactly when $S\times S$ has two orbits. This is equivalent to the stated second-moment identity.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Exercises/Exercise G193 - Burnside Formula by Double Counting|Exercise G193]]

## Notes

- **Source issue:** The missing finiteness condition is preserved rather than silently repaired.
- **Source status:** [S2, Ch. I, Ex. 48, printed p. 80, PDF p. 95]. The corrected-hypothesis proof is independent.

