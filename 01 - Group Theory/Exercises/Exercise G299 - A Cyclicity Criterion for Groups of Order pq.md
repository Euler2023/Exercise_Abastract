---
title: "Exercise G299: A Cyclicity Criterion for Groups of Order pq"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - sylow-theory
  - cyclic-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 26, printed p. 77, PDF p. 92"
created: 2026-08-28
---

# Exercise G299: A Cyclicity Criterion for Groups of Order pq

## Problem Statement

> [!question] Exercise 26
> (a) Let $G$ have order $pq$, where $p<q$ are primes and $q\not\equiv1\pmod p$. Prove that $G$ is cyclic.
>
> (b) Show that every group of order $15$ is cyclic.

## Hints

> [!hint]- Hint 1
> Apply the Sylow congruence and divisibility conditions to both primes.

## Solution

> [!success]- Solution
> **(a)** The number $n_q$ of Sylow $q$-subgroups divides $p$ and is congruent to $1$ modulo $q$. Since $p<q$, this forces $n_q=1$. Likewise $n_p$ divides $q$ and is congruent to $1$ modulo $p$. Its only possibilities are $1$ and $q$, and the hypothesis excludes $n_p=q$. Thus both Sylow subgroups $P,Q$ are normal. Their intersection is trivial, and normal subgroups of coprime orders commute elementwise, so
>
> $$
> G=P\times Q\cong C_p\times C_q\cong C_{pq}.
> $$
>
> **(b)** Take $p=3$ and $q=5$. Since $5\not\equiv1\pmod3$, part (a) gives $G\cong C_{15}$.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 26, printed p. 77, PDF p. 92]. The proof is independently derived.
